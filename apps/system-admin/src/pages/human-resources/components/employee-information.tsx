import { BriefcaseIcon, NetworkIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { TEmployee } from '@/shared/mock/employee.data'

interface TProps {
  employee: TEmployee
}

export const EmployeeInformation = ({ employee }: TProps) => {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200  p-4">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <NetworkIcon className="text-gray-500" />
              <p className="text-sm font-medium text-gray-500">Бүтцийн нэгж:</p>
            </div>
            <p className="text-sm font-medium text-gray-900 ">
              Төрийн захиргаа удирдлагын газар
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <BriefcaseIcon className="text-gray-500" />
              <p className="text-sm font-medium text-gray-500">Албан тушаал:</p>
            </div>
            <p className="text-sm font-medium text-gray-900 ">
              Төрийн захиргаа удирдлагын газрын дарга
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h3 className="mb-5 text-sm font-semibold text-gray-700">
          Ажилтны мэдээлэл
        </h3>
        <div className="grid gap-10 grid-cols-4">
          <div className="flex justify-center md:justify-start">
            <Avatar className="h-24 w-24 border-2 border-gray-100 shadow-sm">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={`${employee.firstName} ${employee.lastName}`}
              />
              <AvatarFallback className="bg-blue-100 text-lg font-semibold text-blue-700">
                {employee.lastName?.[0]}
                {employee.firstName?.[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium text-gray-500">
                Эцэг, эхийн нэр:
              </p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {employee.lastName}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Өөрийн нэр:</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {employee.firstName}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-xs font-medium text-gray-500">Төрсөн огноо:</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {employee.birthDate}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Хүйс:</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {employee.gender}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-500">Утас:</p>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {employee.phone_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
