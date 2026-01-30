import { ColumnDef } from '@tanstack/react-table'

import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import {
  TStructurePosition,
  structurePosition
} from '@/shared/mock/organization-data'

import { DetailAction } from './detail-action'
import DetailPositionAdd from './detail-position-add'

export default function PositionTab() {
  const columns: ColumnDef<TStructurePosition>[] = [
    {
      accessorKey: 'action',
      header: '',
      size: 40,
      meta: { label: 'Үйлдэл' },
      cell: () => {
        return (
          <div className="flex items-center justify-center h-10 ">
            <DetailAction />
          </div>
        )
      }
    },
    {
      accessorKey: 'name',
      header: 'Албан тушаалын нэр',
      size: 330,
      meta: { label: 'Албан тушаалын нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'priority',
      header: 'Эрэмбэ',
      size: 200,
      meta: { label: 'Эрэмбэ' }
    },
    {
      accessorKey: 'people_count',
      header: 'Томилогдсон хүний тоо',
      size: 140,
      meta: { label: 'Томилогдсон хүний тоо' }
    },
    {
      accessorKey: 'date_added',
      header: 'Нэмсэн огноо',
      size: 135,
      meta: { label: 'Нэмсэн огноо' }
    }
  ]

  const groupedData = structurePosition.reduce(
    (
      acc: (TStructurePosition & { isGroupHeader?: boolean })[],
      item,
      index
    ) => {
      const prevItem = structurePosition[index - 1]

      if (index === 0 || item.group !== prevItem?.group) {
        acc.push({
          id: -index - 1,
          name: item.group,
          priority: '',
          people_count: 0,
          date_added: '',
          group: item.group,
          isGroupHeader: true
        })
      }

      acc.push(item)
      return acc
    },
    []
  )

  return (
    <TabsContent value="position">
      <DataTable
        columns={columns}
        data={groupedData}
        toolbar_actions={<DetailPositionAdd />}
      />
    </TabsContent>
  )
}
