import { ColumnDef } from '@tanstack/react-table'

import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import { TStructureUnit, structureUnit } from '@/shared/mock/organization-data'

import { DetailAction } from './detail-action'
import DetailUnitAdd from './detail-unit-add'

export default function UnitTab() {
  const columns: ColumnDef<TStructureUnit>[] = [
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
      header: 'Нэр',
      size: 280,
      meta: { label: 'Нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'priority',
      header: 'Эрэмбэ',
      size: 120,
      meta: { label: 'Эрэмбэ' }
    },
    {
      accessorKey: 'date_added',
      header: 'Эхэлсэн огноо',
      size: 130,
      meta: { label: 'Эхэлсэн огноо' }
    },
    {
      accessorKey: 'position_number',
      header: 'Албан тушаалын тоо',
      size: 140,
      meta: { label: 'Албан тушаалын тоо' }
    },
    {
      accessorKey: 'end_date',
      header: 'Нэмсэн огноо',
      size: 135,
      meta: { label: 'Нэмсэн огноо' }
    }
  ]

  return (
    <TabsContent value="unit">
      <DataTable
        columns={columns}
        data={structureUnit}
        toolbar_actions={<DetailUnitAdd />}
      />
    </TabsContent>
  )
}
