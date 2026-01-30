import { ColumnDef } from '@tanstack/react-table'

import { DataTable } from '@/components/mirage/data-table'

import { PermissionCreateTrigger } from './components/permission/permission-create'
import {
  TPermission,
  permissionMockData
} from './components/permission/premission-data'

export default function PermissionPage() {
  const columns: ColumnDef<TPermission>[] = [
    {
      accessorKey: 'name',
      header: 'Нэр',
      meta: { label: 'Нэр' },
      cell: ({ row }) => {
        return (
          <div className="flex items-center h-10">{row.getValue('name')}</div>
        )
      }
    },
    {
      accessorKey: 'code',
      header: 'Код',
      meta: { label: 'Код' }
    },
    {
      accessorKey: 'platform',
      header: 'Платформ',
      meta: { label: 'Платформ' }
    },
    {
      accessorKey: 'module',
      header: 'Модуль',
      meta: { label: 'Модуль' }
    }
  ]
  return (
    <DataTable
      columns={columns}
      data={permissionMockData}
      toolbar_actions={<PermissionCreateTrigger />}
    />
  )
}
