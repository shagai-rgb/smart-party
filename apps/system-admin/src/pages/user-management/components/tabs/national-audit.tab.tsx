import { ColumnDef } from '@tanstack/react-table'

import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import {
  TNationalAudit,
  nationalAuditMock
} from '@/shared/mock/national-audit.data'

export default function NationalAuditTab() {
  const columns: ColumnDef<TNationalAudit>[] = [
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
            src={row.original.logo}
            alt="Logo"
            className="w-10 h-10  object-contain"
          />
        </div>
      )
    },
    {
      accessorKey: 'name',
      header: 'Бүтэн нэр',
      meta: { label: 'Бүтэн нэр', filterVariant: 'text' },
      size: 300,
      enableColumnFilter: true
    },
    {
      accessorKey: 'short_name',
      header: 'Товч нэр',
      meta: { label: 'Товч нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },

    {
      accessorKey: 'website',
      header: 'Вэб сайт',
      size: 300,
      meta: { label: 'Вэб сайт' }
    },
    {
      accessorKey: 'type',
      header: 'Төрөл',
      meta: { label: 'Төрөл' }
    },
    {
      accessorKey: 'phone',
      header: 'Утас',
      meta: { label: 'Утас' }
    },
    {
      accessorKey: 'action',
      meta: { label: 'Үйлдэл', align: 'center' },
      header: '',
      size: 110,
      cell: () => {
        return (
          <div className="cursor-pointer text-blue-500 hover:underline">
            Дэлгэрэнгүй
          </div>
        )
      }
    }
  ]

  return (
    <TabsContent value="national-audit">
      <DataTable columns={columns} data={nationalAuditMock} />
    </TabsContent>
  )
}
