import { ColumnDef } from '@tanstack/react-table'
import { Settings } from 'lucide-react'

import { DataTable } from '@/components/mirage/data-table'
import { Card, CardContent } from '@/components/ui/card'

import { GroupCreateTrigger } from './group-create'
import { TGroup, groupsMockData } from './group-data'

export default function GroupTable() {
  const columns: ColumnDef<TGroup>[] = [
    {
      accessorKey: 'name',
      header: 'Нэр',
      meta: { label: 'Нэр' },
      cell: ({ row }) => {
        return (
          <div className="h-10 flex items-center">{row.getValue('name')}</div>
        )
      }
    },
    {
      accessorKey: 'user_count',
      header: 'Хэрэглэгчийн тоо',
      meta: { label: 'Хэрэглэгчийн тоо' },
      cell: ({ row }) => {
        return (
          <div className="cursor-pointer hover:underline">
            {row.getValue('user_count')}
          </div>
        )
      }
    },
    {
      accessorKey: 'permission_count',
      header: 'Эрхийн тоо',
      meta: { label: 'Эрхийн тоо' },
      cell: ({ row }) => {
        return (
          <div className="cursor-pointer hover:underline">
            {row.getValue('permission_count')}
          </div>
        )
      }
    }
  ]
  return (
    <>
      <Card className="shadow-none p-2 rounded-md hover:shadow-lg transition-all duration-300 h-full">
        <CardContent
          className="p-0 flex items-center border-2"
          style={{ borderColor: '#007773' }}
        >
          <div
            className="flex items-center justify-center w-30 h-30 p-8 flex-shrink-0"
            style={{ backgroundColor: '#007773' }}
          >
            <Settings className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>

          <div className="flex flex-col gap-1.5 w-full px-4">
            <h1 className="line-clamp-2 uppercase text-sm font-semibold text-gray-900">
              Хэрэглэгчийн удирдлага
            </h1>

            <div
              className="w-1/2 h-0.5"
              style={{ backgroundColor: '#007773' }}
            />

            <p className="text-xs text-muted-foreground">
              Хяналт хөгжлийн бодлого
            </p>
          </div>
        </CardContent>
      </Card>
      <DataTable
        columns={columns}
        data={groupsMockData}
        toolbar_actions={<GroupCreateTrigger />}
      />
    </>
  )
}
