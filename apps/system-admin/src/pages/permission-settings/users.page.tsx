import { ColumnDef } from '@tanstack/react-table'

import { DataTable } from '@/components/mirage/data-table'

import { UserCreateTrigger } from './components/users/user-create'
import { TUser, usersMockData } from './components/users/users-data'

export default function UsersPage() {
  const columns: ColumnDef<TUser>[] = [
    {
      accessorKey: 'name',
      header: 'Нэр',
      meta: { label: 'Нэр', filterVariant: 'text' },
      enableColumnFilter: true,
      cell: ({ row }) => {
        return (
          <div className="flex items-center h-10">{row.getValue('name')}</div>
        )
      }
    },

    {
      accessorKey: 'platform',
      header: 'Платформ',
      meta: { label: 'Платформ', filterVariant: 'text' },
      enableColumnFilter: true
    },

    {
      accessorKey: 'organization',
      header: 'Байгууллага',
      meta: { label: 'Байгууллага', filterVariant: 'select' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'modules',
      header: 'Модуль',
      meta: { label: 'Модуль' }
    },
    {
      accessorKey: 'groups',
      header: 'Бүлэг',
      meta: { label: 'Бүлэг' }
    }
  ]
  return (
    <DataTable
      columns={columns}
      data={usersMockData}
      toolbar_actions={<UserCreateTrigger />}
    />
  )
}
