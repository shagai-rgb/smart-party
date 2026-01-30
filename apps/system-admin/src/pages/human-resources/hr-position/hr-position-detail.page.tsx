import { ColumnDef } from '@tanstack/react-table'
import { Building2Icon, HomeIcon } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { DataTable } from '@/components/mirage/data-table'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { TEmployee, mockEmployees } from '@/shared/mock/employee.data'
import {
  organizationMock,
  structurePosition
} from '@/shared/mock/organization-data'

import { PositionAction } from './components/action/position-action'
import { EmployeeAppointment } from './components/employee-appointment'

export default function HrPositionDetail() {
  const { id, structureId, positionId } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))
  const structure = orgDetail?.structureData.structures
  const structureData = structure?.find((s) => s.id === Number(structureId))
  const positionData = structurePosition.find(
    (p) => p.id === Number(positionId)
  )
  const columns: ColumnDef<TEmployee>[] = [
    {
      accessorKey: 'action',
      header: '',
      size: 40,
      meta: { label: 'Үйлдэл' },
      cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center h-10 ">
            <PositionAction employee={row.original} />
          </div>
        )
      }
    },
    {
      accessorKey: 'appointment_date',
      header: 'Томилсон огноо',
      size: 120,
      meta: { label: 'Томилсон огноо' }
    },
    {
      accessorKey: 'regNo',
      header: 'Регистрийн дугаар',
      size: 140,
      meta: { label: 'Регистрийн дугаар', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'firstName',
      header: 'Эцэг, эхийн нэр',
      size: 130,
      meta: { label: 'Эцэг, эхийн нэр' }
    },
    {
      accessorKey: 'lastName',
      header: 'Өөрийн нэр',
      size: 130,
      meta: { label: 'Өөрийн нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'phone_number',
      header: 'Утас',
      size: 100,
      meta: { label: 'Утас' }
    },
    {
      accessorKey: 'exempted_status',
      header: 'Чөлөөлөгдсөн байдал',
      size: 140,
      meta: { label: 'Чөлөөлөгдсөн байдал' }
    },
    {
      accessorKey: 'exempted_date',
      header: 'Чөлөөлөгдсөн огноо',
      size: 140,
      meta: { label: 'Чөлөөлөгдсөн огноо' }
    }
  ]

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <Link to={'/'}>
                  <DropdownMenuItem>
                    <HomeIcon /> Нүүр
                  </DropdownMenuItem>
                </Link>
                <Link to={'/human-resources'}>
                  <DropdownMenuItem>
                    <Building2Icon /> Байгууллага
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
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
            <BreadcrumbLink
              href={`/human-resources/${orgDetail?.id}/structure/${structureData?.id}`}
            >
              {structureData?.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{positionData?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="h-14 p-4 flex items-center gap-1.5 border border-b-0">
        Албан тушаал :: <p>{positionData?.name}</p>
      </div>
      <DataTable
        columns={columns}
        data={mockEmployees}
        toolbar_actions={<EmployeeAppointment />}
      />
    </>
  )
}
