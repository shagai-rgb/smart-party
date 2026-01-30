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

import { TPosition, organizationMock } from '@/shared/mock/organization-data'

import { PositionAction } from './components/position-action'
import { StructurePositionCreate } from './components/position-create'

export default function StructurePositionPage() {
  const { id } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))

  const posistion = orgDetail?.structureData.positions || []

  const columns: ColumnDef<TPosition>[] = [
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
            <PositionAction position={row.original} />
          </div>
        )
      }
    },

    {
      accessorKey: 'position_name',
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
        data={posistion}
        toolbar_actions={<StructurePositionCreate />}
      />
    </>
  )
}
