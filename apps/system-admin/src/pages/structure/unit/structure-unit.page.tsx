import { ColumnDef } from '@tanstack/react-table'
import { useParams } from 'react-router-dom'

import { DataTable } from '@/components/mirage/data-table'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

import { TUnit, organizationMock } from '@/shared/mock/organization-data'

import { UnitAction } from './components/unit-action'
import { StructureUnitCreate } from './components/unit-create'

export default function StructureUnitPage() {
  const { id } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))

  const unit = orgDetail?.structureData.units || []

  const columns: ColumnDef<TUnit>[] = [
    {
      accessorKey: 'action',
      header: '',
      size: 40,
      meta: {
        label: 'Үйлдэл'
      },
      enableResizing: false,
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center h-10 ">
            <UnitAction unit={row.original} />
          </div>
        )
      }
    },

    {
      accessorKey: 'name',
      size: 450,
      header: 'Бүтцийн нэгжийн нэр',
      meta: { label: 'Бүтцийн нэгжийн нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'short_name',
      header: 'Товч нэр',
      size: 210,
      meta: { label: 'Товч нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'registration_date',
      header: 'Бүртгэсэн огноо',
      size: 160,
      meta: { label: 'Бүртгэсэн огноо' }
    }
  ]

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/structure">Байгууллага</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="uppercase">
            <BreadcrumbPage>{orgDetail?.full_name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DataTable
        columns={columns}
        data={unit}
        toolbar_actions={<StructureUnitCreate />}
      />
    </>
  )
}
