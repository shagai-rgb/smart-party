import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
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
  organizationMock,
  structureData
} from '@/shared/mock/organization-data'

export default function HrOrgDetail() {
  const { id } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))

  const hr_structure = structureData.structures || []

  const columns: ColumnDef<TStructureItem>[] = [
    {
      accessorKey: 'action',
      header: '',
      size: 40,
      meta: { label: 'Үйлдэл' },
      cell: () => {
        return (
          <div className="flex items-center justify-center h-10 cursor-not-allowed ">
            {/* <StructureAction structure={row.original} /> */}

            <MoreHorizontal />
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
            to={`/human-resources/${id}/structure/${structureId}`}
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
            <BreadcrumbLink href="/human-resources">
              Байгууллага{' '}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="uppercase">
            <BreadcrumbPage style={{ color: orgDetail?.primary_color }}>
              {orgDetail?.full_name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DataTable columns={columns} data={hr_structure} />
    </>
  )
}
