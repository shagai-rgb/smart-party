import {
  Building2Icon,
  NetworkIcon,
  Settings,
  UserCogIcon,
  Users2Icon
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Card, CardContent } from '@/components/ui/card'

type TItem = {
  title: string
  path: string
  bgColor: string
  borderColor: string
  icon: React.ComponentType<{ className: string }>
}

const items: TItem[] = [
  {
    title: 'Байгууллага',
    path: '/organization',
    bgColor: '#007773',
    borderColor: '#007773',
    icon: Building2Icon
  },
  {
    title: 'Бүтэц, зохион байгуулалт',
    path: '/structure',
    bgColor: '#007773',
    borderColor: '#007773',
    icon: NetworkIcon
  },
  {
    title: 'Хүний нөөц',
    path: '/human-resources',
    bgColor: '#007773',
    borderColor: '#007773',
    icon: Users2Icon
  },
  {
    title: 'Хэрэглэгчийн удирдлага',
    path: '/user-management',
    bgColor: '#007773',
    borderColor: '#007773',
    icon: UserCogIcon
  },
  {
    title: 'Системийн тохиргоо',
    path: '/settings',
    bgColor: '#007773',
    borderColor: '#007773',
    icon: Settings
  }
]

export const Hero = () => {
  return (
    <div className="relative flex-1  w-full bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 overflow-hidden px-4">
      <img
        src="/background-em.svg"
        alt="Background"
        className="absolute bottom-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <h1 className="text-2xl md:text-5xl font-bold text-white text-center pt-28">
        Нэгдсэн удирдлага зохицуулалт
      </h1>

      <div className="relative  z-10 mx-auto  container h-full flex justify-center max-w-8/12">
        <div className="w-full">
          <div className="grid grid-cols-1 pt-40 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {items.map((item) => {
              const IconComponent = item.icon
              return (
                <Link key={item.path} to={item.path}>
                  <Card className="shadow-none p-2 rounded-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <CardContent
                      className="p-0 flex items-center border-2"
                      style={{ borderColor: item.borderColor }}
                    >
                      <div
                        className="flex items-center justify-center w-30 h-30 p-8 flex-shrink-0"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
                      </div>

                      <div className="flex flex-col gap-1.5 w-full px-4">
                        <h1 className="line-clamp-2 uppercase text-sm font-semibold text-gray-900">
                          {item.title}
                        </h1>

                        <div
                          className="w-1/2 h-0.5"
                          style={{ backgroundColor: item.borderColor }}
                        />

                        <p className="text-xs text-muted-foreground">
                          Хяналт хөгжлийн бодлого
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
