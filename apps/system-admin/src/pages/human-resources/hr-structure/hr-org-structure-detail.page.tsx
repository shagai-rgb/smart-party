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
  TStructurePosition,
  organizationMock,
  structurePosition
} from '@/shared/mock/organization-data'

import { HrOrgStructureAction } from './components/action/hr-org-structure-action'

export default function HrOrgStructureDetail() {
  const { id, structureId } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))
  const structure = orgDetail?.structureData.structures
  const structureData = structure?.find((s) => s.id === Number(structureId))

  const columns: ColumnDef<TStructurePosition>[] = [
    {
      accessorKey: 'action',
      header: '',
      size: 40,
      meta: { label: 'Үйлдэл' },
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center h-10 ">
            {structureData && (
              <HrOrgStructureAction
                structurePosition={row.original}
                structureData={structureData}
              />
            )}
          </div>
        )
      }
    },
    {
      accessorKey: 'name',
      header: 'Албан тушаалын нэр',
      size: 330,
      meta: { label: 'Албан тушаалын нэр', filterVariant: 'text' },
      enableColumnFilter: true,
      cell: ({ row }) => {
        const positionId = row.original.id
        return (
          <Link
            to={`/human-resources/${id}/structure/${structureId}/position/${positionId}`}
            className="hover:underline text-blue-500"
          >
            {row.getValue('name')}
          </Link>
        )
      }
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
      meta: { label: 'Томилогдсон хүний тоо' },
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center">
            {row.getValue('people_count')}
          </div>
        )
      }
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
            <BreadcrumbLink
              href={`/human-resources/${orgDetail?.id}`}
              style={{ color: orgDetail?.primary_color }}
            >
              {orgDetail?.full_name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/human-resources/${orgDetail?.id}`}>
              Бүтцийн өөрчлөлт
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{structureData?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <DataTable columns={columns} data={groupedData} />
    </>
  )
}
