import * as React from 'react'

import {
  Building2,
  ChevronDown,
  ClipboardList,
  Home,
  LucideIcon,
  Network,
  Settings,
  UserCogIcon,
  Users
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
    title: 'Байгууллага',
    description: 'Дунд хугацааны хөгжлийн бодлого',
    icon: Building2,
    path: '/organization'
  },
  {
    title: 'Бүтэц, зохион байгуулалт',
    description: 'Дунд хугацааны хөгжлийн бодлого',
    icon: Network,
    path: '/structure'
  },
  {
    title: 'Хүний нөөц',
    description: 'Богино хугацааны хөгжлийн бодлого',
    icon: Users,
    path: '/human-resources'
  },
  {
    title: 'Хэрэглэгчийн удирдлага',
    description: 'Дунд хугацааны хөгжлийн бодлого',
    icon: UserCogIcon,
    path: '/user-management'
  },
  {
    title: 'Системийн тохиргоо',
    description: 'Богино хугацааны хөгжлийн бодлого',
    icon: Settings,
    path: '/settings'
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
                className={`flex flex-col items-start gap-1 p-3 ${
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
