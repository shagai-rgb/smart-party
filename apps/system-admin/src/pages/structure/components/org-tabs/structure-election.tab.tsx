import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'

import { DetailTooltip } from '@/components/custom/detail-tooltip'
import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import { TElection, electionMock } from '@/shared/mock/election.data'

export default function ElectionTab() {
  const columns: ColumnDef<TElection>[] = [
    {
      id: 'index',
      header: '№',
      size: 40,
      enableSorting: true,
      cell: ({ row }) => (
        <div className="text-center text-muted-foreground">
          {row.index + 1}.
        </div>
      )
    },
    {
      accessorKey: 'logo',
      header: 'Лого',
      meta: { label: 'Лого' },
      size: 60,
      cell: ({ row }) => {
        const logo = row.original.logo
        return (
          <div className="flex items-center justify-center">
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="w-10  h-10 object-contain"
              />
            ) : (
              <div className="h-10 flex items-center">-</div>
            )}
          </div>
        )
      }
    },
    {
      accessorKey: 'full_name',
      header: 'Бүтэн нэр',
      meta: { label: 'Бүтэн нэр', filterVariant: 'text' },
      size: 280,
      enableColumnFilter: true,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link
            to={{ pathname: `/structure/${org_id}` }}
            className="cursor-pointer  hover:underline uppercase"
          >
            {row.getValue('full_name')}
          </Link>
        )
      }
    },
    {
      accessorKey: 'short_name',
      header: 'Товч нэр',
      size: 100,
      meta: { label: 'Товч нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'structure_count',
      header: 'Бүтцийн нэгж',
      size: 120,
      meta: { label: 'Бүтцийн нэгж' },
      cell: ({ row }) => {
        return (
          <div className="w-full text-center">
            {row.getValue('structure_count')}
          </div>
        )
      }
    },
    {
      accessorKey: 'position_count',
      header: 'Албан тушаал',
      size: 120,
      meta: { label: 'Албан тушаал' }
    },
    {
      accessorKey: 'phone',
      header: 'Утасны дугаар',
      size: 120,
      meta: { label: 'Утасны дугаар' }
    },
    {
      accessorKey: 'action',
      meta: { label: 'Үйлдэл', align: 'center' },
      header: '',
      size: 60,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link to={{ pathname: `/structure/${org_id}` }} className="">
            <DetailTooltip />
          </Link>
        )
      }
    }
  ]

  return (
    <TabsContent value="election">
      <DataTable columns={columns} data={electionMock} />
    </TabsContent>
  )
}
