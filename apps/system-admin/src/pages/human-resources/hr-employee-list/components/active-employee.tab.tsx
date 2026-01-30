import { ColumnDef } from '@tanstack/react-table'

import { TabsContent } from '@/components/custom/tabs'
import { DataTable } from '@/components/mirage/data-table'

import { TEmployee, mockEmployees } from '@/shared/mock/employee.data'

import { PositionAction } from '../../hr-position/components/action/position-action'

export default function ActiveEmployeeTab() {
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
      accessorKey: 'position',
      header: 'Албан тушаал',
      size: 150,
      meta: { label: 'Албан тушаал' }
    },
    {
      accessorKey: 'regNo',
      header: 'Регистрийн дугаар',
      meta: { label: 'Регистрийн дугаар' },
      size: 130
    },
    {
      accessorKey: 'firstName',
      header: () => (
        <div className=" flex  items-center w-full text-center whitespace-normal break-words">
          Албан хаагчийн нэр
        </div>
      ),
      meta: { label: 'Албан хаагчийн нэр' },
      size: 120
    },
    {
      accessorKey: 'gender',
      header: 'Хүйс',
      meta: { label: 'Хүйс' },
      size: 100
    },
    {
      accessorKey: 'phone_number',
      header: 'Утас',
      meta: { label: 'Утас' },
      size: 100
    },
    {
      accessorKey: 'appointment_date',
      header: () => (
        <div className=" flex  items-center w-full text-center whitespace-normal break-words">
          Томилогдсон огноо
        </div>
      ),
      meta: { label: 'Томилогдсон огноо' },
      size: 120
    },
    {
      accessorKey: 'appointment_status',
      header: () => (
        <div className=" flex  items-center w-full text-center whitespace-normal break-words">
          Томилогдсон байдал
        </div>
      ),
      meta: { label: 'Томилогдсон байдал' },
      size: 120
    },
    {
      accessorKey: 'created_at',
      header: () => (
        <div className=" flex items-center w-full  text-center whitespace-normal break-words">
          Системд бүртгэсэн огноо
        </div>
      ),
      meta: { label: 'Системд бүртгэсэн огноо' },
      size: 110
    }
  ]

  const activeUsers = mockEmployees.filter((a) => a.employee_status === true)
  const groupedData = activeUsers.reduce(
    (
      acc: (TEmployee & { isGroupHeader?: boolean; name?: string })[],
      item,
      index
    ) => {
      const prev = activeUsers[index - 1]

      if (index === 0 || item.group !== prev?.group) {
        acc.push({
          id: -index - 1,
          regNo: '',
          lastName: '',
          firstName: '',
          birthDate: '',
          gender: '',
          phone_number: '',
          appointment_date: '',
          appointment_status: '',
          employee_status: false,
          exempted_status: '',
          exempted_date: '',
          position: '',
          created_at: '',
          group: item.group,
          name: item.group,
          isGroupHeader: true
        })
      }

      acc.push(item)
      return acc
    },
    []
  )

  return (
    <TabsContent value="active" className="w-full">
      <DataTable columns={columns} data={groupedData} />
    </TabsContent>
  )
}
