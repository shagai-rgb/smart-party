import type React from 'react'
import { useState } from 'react'

import { Label } from '@radix-ui/react-dropdown-menu'
import {
  BadgeAlertIcon,
  BriefcaseBusinessIcon,
  SearchIcon,
  SettingsIcon,
  UserPlusIcon
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput
} from '@/components/ui/input-group'

import { TEmployee, mockEmployees } from '@/shared/mock/employee.data'

export type StepType = 'check' | 'registration' | 'position-add'

interface TProps {
  setStep: React.Dispatch<React.SetStateAction<StepType>>
}

export const StepCheck = ({ setStep }: TProps) => {
  const [regNo, setRegNo] = useState('')
  const [employee, setEmployee] = useState<TEmployee | null>(null)
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    const found = mockEmployees.find((e) => e.regNo === regNo.trim())
    setEmployee(found ?? null)
    setChecked(true)
  }

  return (
    <div>
      <div className="flex items-center gap-10  justify-center my-2 ">
        <Label>Регистрийн дугаар:</Label>
        <InputGroup className="w-[350px]">
          <InputGroupInput
            placeholder="РД оруулах"
            value={regNo}
            onChange={(e) => {
              setRegNo(e.target.value)
              setChecked(false)
              setEmployee(null)
            }}
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={handleCheck}>Шалгах</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Card className="p-2 shadow-none bg-yellow-50 flex items-center justify-center font-mono text-sm border-dotted border">
          УЗ88111011
        </Card>
        <Card className="p-2 shadow-none bg-green-50 flex items-center justify-center font-mono text-sm border-dotted border">
          АБ99020222
        </Card>
      </div>

      {checked && !employee && (
        <div className="mt-6 space-y-4">
          <div className="flex gap-4 rounded-xl border border-yellow-200 bg-yellow-50 p-5">
            <div className="flex h-15 w-15 items-center justify-center rounded-full bg-yellow-100">
              <BadgeAlertIcon className="h-7 w-7 text-yellow-700" />
            </div>

            <div className="flex items-center w-full justify-center">
              <p className="text-yellow-700 leading-relaxed">
                <span className="font-semibold uppercase">{regNo}</span>{' '}
                регистрийн дугаартай ажилтан системд бүртгэлгүй байна. Та
                дараагийн алхамд шилжиж хувь хүний мэдээллийг бүртгэнэ үү.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setStep('registration')} className="gap-2">
              <UserPlusIcon className="h-4 w-4" />
              Алхам №2 – Бүртгэл үүсгэх
            </Button>
          </div>
        </div>
      )}

      {checked && employee && !employee.employee_status && (
        <>
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
                  <p className="text-xs font-medium text-gray-500">
                    Өөрийн нэр:
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {employee.firstName}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Төрсөн огноо:
                  </p>
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

          <div className="mt-6 flex justify-end">
            <Button
              className="gap-2"
              variant="create"
              onClick={() => setStep('position-add')}
            >
              <BriefcaseBusinessIcon />
              Алхам №3-т шилжих
            </Button>
          </div>
        </>
      )}
      {checked && employee && employee.employee_status && (
        <>
          <div className="rounded-lg border border-gray-200 bg-white p-4 mt-4">
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
                  <p className="text-xs font-medium text-gray-500">
                    Өөрийн нэр:
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {employee.firstName}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-xs font-medium text-gray-500">
                    Төрсөн огноо:
                  </p>
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
          <div className="h-15 border p-4 rounded-lg border-yellow-300 flex mt-4 items-center text-sm justify-between">
            <div className="flex items-center gap-1.5 text-yellow-600">
              <BadgeAlertIcon className="text-yellow-600" />
              Анхааруулга
            </div>
            <div>
              Системд ажиллах идэвхитэй албан тушаал байгаа учир шинэ албан
              тушаалд томилох боломжгүй.
            </div>
            <Button size="sm" variant="save">
              <SettingsIcon />
              Албан тушаалаас чөлөөлөх
            </Button>
          </div>
          <div className="border border-yellow-300 p-4 rounded-lg mt-4">
            <h1>Одоо ажиллаж буй албан тушаал:</h1>
            <div className="grid grid-cols-3 gap-3 w-full text-sm p-2">
              <div>
                <p className="text-muted-foreground">Байгууллага:</p>
                <p>Хүнс, хөдөө аж ахуй, хөнгөн үйлдвэрийн яам</p>
              </div>
              <div>
                <p className="text-muted-foreground"> Бүтцийн нэгж:</p>
                <p>Хууль эрх зүйн хэлтэс</p>
              </div>
              <div>
                <p className="text-muted-foreground">Албан тушаал:</p>
                <p>Хууль эрх зүйн хэлтсийн дарга</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              disabled
              variant="create"
              onClick={() => setStep('position-add')}
            >
              <BriefcaseBusinessIcon />
              Алхам №3-т шилжих
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
