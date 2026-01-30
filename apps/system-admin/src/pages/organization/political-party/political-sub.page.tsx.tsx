import { ColumnDef } from '@tanstack/react-table'
import { Link, useParams } from 'react-router-dom'

import { DataTable } from '@/components/mirage/data-table'

import {
  TSubOrg,
  organizationMock
} from '../../../shared/mock/organization-data'

export default function PoliticalPartySub() {
  const { id } = useParams()
  const orgData = organizationMock.find((e) => e.id === Number(id))
  const subOrgMock = orgData?.structureData.sub_orgs || []

  const columns: ColumnDef<TSubOrg>[] = [
    {
      accessorKey: 'full_name',
      header: 'Нэр',
      meta: { label: 'Нэр', filterVariant: 'text' },

      enableColumnFilter: true
    },
    {
      accessorKey: 'sub_organization',
      header: 'Дэд байгууллагын тоо',
      meta: { label: 'Дэд байгууллагын тоо' }
    },
    {
      accessorKey: 'member_count',
      header: 'Хэрэглэгчийн тоо',
      meta: { label: 'Хэрэглэгчийн тоо' }
    },
    {
      accessorKey: 'type',
      header: 'Төрөл',
      meta: { label: 'Төрөл' }
    },
    {
      accessorKey: 'action',
      header: '',
      meta: { label: 'Үйлдэл', align: 'center' },
      size: 110,
      cell: ({ row }) => {
        const org_id = row.original.id
        return (
          <Link
            to={{ pathname: `/organization/${org_id}` }}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            Дэлгэрэнгүй
          </Link>
        )
      }
    }
  ]
  return <DataTable columns={columns} data={subOrgMock} />
}
