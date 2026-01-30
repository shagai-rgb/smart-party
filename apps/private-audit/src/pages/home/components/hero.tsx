import {
  ClipboardList,
  FileText,
  Gift,
  Handshake,
  Landmark,
  Scale,
  Users,
  Vote,
  Wallet
} from 'lucide-react'
import { Link } from 'react-router-dom'

import { Card, CardContent } from '@/components/ui/card'

import { BannerSection } from './custom/banner-section'

type TItem = {
  title: string
  path: string
  bgColor: string
  borderColor: string
  icon: React.ComponentType<{ className: string }>
}
export const bgColor1 = '#3456a6'
export const borderColor = '#f7b83b'

const items: TItem[] = [
  {
    title: 'Улс төрийн намын бүртгэл',
    path: '/registration',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: FileText
  },
  {
    title: 'Улс төрийн намын үйл ажиллагааны товч тайлан',
    path: '/activity-report',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: ClipboardList
  },
  {
    title: 'Улс төрийн намын санхүүгийн тайлан',
    path: '/financial-report',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Wallet
  },
  {
    title: 'Төрийн санхүүжилт',
    path: '/state-funding',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Landmark
  },
  {
    title: 'Төрөөс үзүүлэх шууд бус дэмжлэг',
    path: '/indirect-support',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Handshake
  },
  {
    title: 'Намын гишүүний татвар',
    path: '/membership-fee',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Users
  },
  {
    title: 'Намын хандив',
    path: '/donation',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Gift
  },
  {
    title: 'Жендэрийн эрх тэгш байдлын тайлан',
    path: '/gender-equality',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Scale
  },
  {
    title: 'Сонгуулийн оролцоо',
    path: '/election-participation',
    bgColor: bgColor1,
    borderColor: borderColor,
    icon: Vote
  }
]

export const Hero = () => {
  return (
    <div className="relative flex-1  w-full px-4">
      <BannerSection
        title='"УХААЛАГ НАМ" төсөл'
        bgImage="/national-audit.jpg"
        desc="Алсын хараа 5.4.1. Төрийн албан хаагчийн үйл ажиллагаанд гүйцэтгэлийн удирдлагын тогтолцоог нэвтрүүлж, ажлын үр дүнгээс хамаарч шатлан дэвших зохицуулалтыг боловсронгуй болгоно."
        logo="/Ministry_01.jpg"
        gradientColor=""
      />
      <div className="relative  z-10 mx-auto py-6  container h-fit flex justify-center max-w-12/12">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {items.map((item) => {
              const IconComponent = item.icon
              const primary = item.bgColor
              const accent = item.borderColor || item.bgColor
              return (
                <Link key={item.path} to={item.path}>
                  <Card className="shadow-none p-2 hover:shadow-lg transition-all duration-300 rounded-md">
                    <CardContent
                      className="p-0 flex items-center border-2"
                      style={{ borderColor: primary }}
                    >
                      {/* <img
                        src="https://upload.wikimedia.org/wikipedia/commons/3/3e/State_emblem_of_Mongolia.svg"
                        alt="Logo"
                        className="w-30 h-30 p-8"
                        style={{ backgroundColor: primary }}
                      /> */}
                      <div
                        className="flex items-center justify-center w-30 h-30 p-8 flex-shrink-0"
                        style={{ backgroundColor: item.bgColor }}
                      >
                        <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
                      </div>
                      <div className="flex flex-col gap-1.5 w-full px-4">
                        <h1 className="line-clamp-2 uppercase">{item.title}</h1>

                        <div
                          className="w-1/2 h-0.5"
                          style={{ backgroundColor: accent }}
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
