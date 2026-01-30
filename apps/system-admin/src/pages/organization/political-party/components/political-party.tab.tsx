import { ColumnDef } from '@tanstack/react-table'
import { Building2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { DetailTooltip } from '@/components/custom/detail-tooltip'
import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'


import {
  TOrganization,
  organizationMock
} from '@/shared/mock/organization-data'

import {
  OrganizationCreate,
  TParams
} from '../../components/organization-create.sheet'

export default function PoliticalPartyTab() {
  const onSubmit = (data: TParams) => {
    console.log(data)
  }
  const columns: ColumnDef<TOrganization>[] = [
    {
      id: 'index',
      header: '№',
      size: 40,
      enableSorting: true,
      cell: ({ row }) => (
        <div className="text-center text-muted-foreground">
          {row.index + 1}.
        </div>
      )
    },
    {
      accessorKey: 'logo',
      header: 'Лого',
      meta: { label: 'Лого' },
      size: 60,
      cell: ({ row }) => {
        const logo = row.original.logo
        return (
          <div className="flex items-center justify-center">
            {logo ? (
              <img
                src={logo}
                alt="Logo"
                className="w-10  h-10 object-contain"
              />
            ) : (
              <div className="h-10 flex items-center">-</div>
            )}
          </div>
        )
      }
    },
    {
      accessorKey: 'full_name',
      header: 'Бүтэн нэр',
      meta: { label: 'Бүтэн нэр', filterVariant: 'text' },
      size: 280,
      enableColumnFilter: true,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link
            to={{ pathname: `/organization/${org_id}` }}
            className="cursor-pointer  hover:underline uppercase"
          >
            {row.getValue('full_name')}
          </Link>
        )
      }
    },
    {
      accessorKey: 'short_name',
      header: 'Товч нэр',
      size: 100,
      meta: { label: 'Товч нэр', filterVariant: 'text' },
      enableColumnFilter: true
    },
    {
      accessorKey: 'established_date',
      header: 'Байгуулагдсан огноо',
      size: 150,
      meta: { label: 'Байгуулагдсан огноо' },
      cell: ({ row }) => {
        const value = row.getValue<string>('established_date')
        return value && value.trim() !== '' ? value : '-'
      }
    },
    {
      accessorKey: 'website',
      header: 'Вэб сайт',
      size: 230,
      meta: { label: 'Вэб сайт' },
      cell: ({ row }) => {
        const value = row.getValue<string>('website')
        return value && value.trim() !== '' ? value : '-'
      }
    },
    {
      accessorKey: 'phone',
      header: 'Утасны дугаар',
      size: 100,
      meta: { label: 'Утасны дугаар' }
    },
    {
      accessorKey: 'action',
      meta: { label: 'Үйлдэл', align: 'center' },
      header: '',
      size: 60,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link to={{ pathname: `/organization/${org_id}` }} className="">
            <DetailTooltip />
          </Link>
        )
      }
    }
  ]
  return (
    <TabsContent value="political-party">
      <DataTable
        data={organizationMock}
        columns={columns}
        toolbar_actions={
          <OrganizationCreate
            icon={Building2Icon}
            onSubmit={() => onSubmit}
            title="Улс төрийн нам нэмэх"
          />
        }
      />
    </TabsContent>
  )
}
