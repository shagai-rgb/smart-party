import * as React from 'react'

import {
  ChevronDown,
  ClipboardList,
  FileText,
  Gift,
  Handshake,
  Home,
  Landmark,
  LucideIcon,
  Scale,
  Users,
  Vote,
  Wallet
} from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export type TModuleData = {
  title: string
  description?: string
  path: string
  icon: LucideIcon
}

export const menuData: TModuleData[] = [
  {
    title: 'Нүүр хуудас',
    description: 'Үндсэн нүүр хуудас',
    icon: Home,
    path: '/'
  },
  {
    title: 'Улс төрийн намын бүртгэл',
    description:
      'Улс төрийн намын улсын бүртгэлтэй холбоотой мэдээлэл, баримт бичиг',
    path: '/registration',
    icon: FileText
  },
  {
    title: 'Улс төрийн намын үйл ажиллагааны товч тайлан',
    description: 'Намын жилийн болон улирлын үйл ажиллагааны товч тайлан',
    path: '/activity-report',
    icon: ClipboardList
  },
  {
    title: 'Улс төрийн намын санхүүгийн тайлан',
    description: 'Намын орлого, зарлага, санхүүгийн тайлангийн мэдээлэл',
    path: '/financial-report',
    icon: Wallet
  },
  {
    title: 'Төрийн санхүүжилт',
    description:
      'Төрөөс улс төрийн намд олгосон санхүүжилтийн дэлгэрэнгүй мэдээлэл',
    path: '/state-funding',
    icon: Landmark
  },
  {
    title: 'Төрөөс үзүүлэх шууд бус дэмжлэг',
    description: 'Намд үзүүлж буй шууд бус хэлбэрийн дэмжлэг, тусламж',
    path: '/indirect-support',
    icon: Handshake
  },
  {
    title: 'Намын гишүүний татвар',
    description: 'Намын гишүүдээс авдаг татвар, төлбөрийн мэдээлэл',
    path: '/membership-fee',
    icon: Users
  },
  {
    title: 'Намын хандив',
    description: 'Иргэн, байгууллагаас намд өгсөн хандивын бүртгэл, тайлан',
    path: '/donation',
    icon: Gift
  },
  {
    title:
      'Улс төрийн намын үйл ажиллагаан дахь жендэрийн эрх тэгш байдлын тайлан',
    description:
      'Намын үйл ажиллагаанд жендэрийн тэгш байдлыг хангаж буй байдлын тайлан',
    path: '/gender-equality',
    icon: Scale
  },
  {
    title: 'Улс төрийн намын сонгуулийн оролцоо',
    description:
      'Намын оролцсон сонгуулиуд, нэр дэвшигчид болон үр дүнгийн мэдээлэл',
    path: '/election-participation',
    icon: Vote
  }
]

export function ModuleMenu() {
  const [open, setOpen] = React.useState<boolean>(false)
  const { pathname } = useLocation()

  const activeModule = menuData.find(
    (item) =>
      pathname === item.path ||
      (item.path !== '/' && pathname.startsWith(item.path))
  )

  const ActiveIcon = activeModule?.icon || Home

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 shadow-none"
        >
          <ActiveIcon className="h-4 w-4" />
          {activeModule?.title || 'Цэс'}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="grid grid-cols-2 gap-2">
        {menuData.map((item, index) => {
          const isActive =
            pathname === item.path ||
            (item.path !== '/' && pathname.startsWith(item.path))
          const ItemIcon = item.icon

          return (
            <Link key={index} to={item.path}>
              <DropdownMenuItem
                className={`flex flex-col cursor-pointer  items-start gap-1 p-3 ${
                  isActive ? 'border border-blue-500 bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center gap-2 w-full">
                  <ItemIcon className="h-4 w-4 shrink-0" />
                  <span className="font-medium text-sm normal-case">
                    {item.title}
                  </span>
                </div>
                {item.description && (
                  <p className="text-xs text-muted-foreground pl-6">
                    {item.description}
                  </p>
                )}
              </DropdownMenuItem>
            </Link>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
