import { ColumnDef } from '@tanstack/react-table'
import { Link, useParams } from 'react-router-dom'

import { DataTable } from '@/components/mirage/data-table'

import { electionMock } from '@/shared/mock/election.data'

import { TSubOrg } from '../../../shared/mock/organization-data'

export default function ElectionSub() {
  const { id } = useParams()
  const orgData = electionMock.find((e) => e.id === Number(id))
  const subOrgMock = orgData?.sub_orgs || []

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
            to={{ pathname: `/organization/election/${org_id}/sub` }}
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
