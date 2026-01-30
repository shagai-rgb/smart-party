import { ColumnDef } from '@tanstack/react-table'
import { Link, useParams } from 'react-router-dom'

import { DataTable } from '@/components/mirage/data-table'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

import {
  TStructureItem,
  organizationMock
} from '../../shared/mock/organization-data'
import { StructureAction } from './components/action/structure-action'
import { StructureCreateDialaog } from './components/action/structure-create'

export default function StructureOrgDetailPage() {
  const { id } = useParams()
  const structureData = organizationMock.find((e) => e.id === Number(id))
  const structure = structureData?.structureData.structures || []

  const columns: ColumnDef<TStructureItem>[] = [
    {
      accessorKey: 'action',
      header: '',
      size: 40,
      meta: { label: 'Үйлдэл' },
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center h-10 ">
            <StructureAction structure={row.original} />
          </div>
        )
      }
    },

    {
      accessorKey: 'name',
      header: 'Нэр',
      size: 300,
      meta: { label: 'Нэр', filterVariant: 'text' },
      enableColumnFilter: true,
      cell: ({ row }) => {
        const structureId = row.original.id
        return (
          <Link
            to={`/structure/${id}/change/${structureId}`}
            className="cursor-pointer text-blue-700 hover:underline"
          >
            {row.getValue('name')}
          </Link>
        )
      }
    },
    {
      accessorKey: 'is_active',
      header: 'Идэвхитэй эсэх',
      size: 120,
      meta: { label: 'Идэвхитэй эсэх' },
      cell: ({ getValue }) => (getValue() ? 'Тийм' : 'Үгүй')
    },
    {
      accessorKey: 'start_date',
      header: 'Эхэлсэн огноо',
      size: 110,
      meta: { label: 'Эхэлсэн огноо' }
    },
    {
      accessorKey: 'end_date',
      header: 'Дууссан огноо',
      size: 110,
      meta: { label: 'Дууссан огноо' }
    },
    {
      accessorKey: 'attachment',
      header: 'Хавсралт',
      meta: { label: 'Хавсралт' },
      size: 90,
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue('attachment')}</div>
      }
    },
    {
      accessorKey: 'unit_number',
      header: 'Нэгжийн тоо',
      meta: { label: 'Нэгжийн тоо' },
      size: 90,
      cell: ({ row }) => {
        return <div className="text-center">{row.getValue('unit_number')}</div>
      }
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
            <BreadcrumbPage>{structureData?.full_name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DataTable
        columns={columns}
        data={structure}
        toolbar_actions={<StructureCreateDialaog />}
      />
    </>
  )
}
