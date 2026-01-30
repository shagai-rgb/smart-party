import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'

import { DetailTooltip } from '@/components/custom/detail-tooltip'
import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import {
  TOrganization,
  organizationMock
} from '@/shared/mock/organization-data'

export default function HrPoliticalPartyTab() {
  const columns: ColumnDef<TOrganization>[] = [
    {
      id: 'index',
      header: '№',
      size: 40,
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
            to={{ pathname: `/human-resources/${org_id}` }}
            className="cursor-pointer hover:underline uppercase"
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
      accessorKey: 'positions',
      header: 'Албан тушаал',
      cell: ({ row }) => {
        const count = row.original.structureData.units.length
        return <div>{count}</div>
      }
    },

    {
      accessorKey: 'id',
      header: 'Томилсон',
      meta: { label: 'Томилсон' }
    },

    {
      accessorKey: 'action',
      meta: { label: 'Үйлдэл', align: 'center' },
      header: '',
      size: 60,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link to={{ pathname: `/human-resources/${org_id}` }} className="">
            <DetailTooltip />
          </Link>
        )
      }
    }
  ]
  return (
    <TabsContent value="political-party">
      <DataTable data={organizationMock} columns={columns} />
    </TabsContent>
  )
}
