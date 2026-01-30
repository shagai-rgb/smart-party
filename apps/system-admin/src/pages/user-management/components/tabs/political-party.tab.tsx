import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'

import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import {
  TOrganization,
  organizationMock
} from '@/shared/mock/organization-data'

export default function PoliticalPartyTab() {
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
      size: 40,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <img
            src={row.original.logo || undefined}
            alt="Logo"
            className="w-10  object-contain"
          />
        </div>
      )
    },
    {
      accessorKey: 'full_name',
      header: 'Бүтэн нэр',
      meta: { label: 'Бүтэн нэр', filterVariant: 'text' },
      size: 400,
      enableColumnFilter: true
    },
    {
      accessorKey: 'short_name',
      header: 'Товч нэр',
      meta: { label: 'Товч нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'sub_org_count',
      header: 'Дэд байгууллагын тоо',
      meta: { label: 'Дэд байгууллагын тоо' }
    },
    {
      accessorKey: 'member_count',
      header: 'Хэрэглэгчийн тоо',
      meta: { label: 'Хэрэглэгчийн тоо' }
    },
    {
      accessorKey: 'type',
      header: 'Төрөл',
      meta: { label: 'Төрөл' }
    },
    {
      accessorKey: 'action',
      meta: { label: 'Үйлдэл', align: 'center' },
      header: '',
      size: 110,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link
            to={{ pathname: `/structure/${org_id}` }}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Дэлгэрэнгүй
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
