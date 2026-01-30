import { Suspense } from 'react'

import { VenusAndMars } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

import { bgColor1, borderColor } from '../home/components/hero'

export default function RegistrationPage() {
  const IconComponent = VenusAndMars
  const primary = bgColor1
  const accent = borderColor || bgColor1
  return (
    <Suspense>
      <>
        <Card className="shadow-none p-2 rounded-md">
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
              style={{ backgroundColor: primary }}
            >
              <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            <div className="flex flex-col gap-1.5 w-full px-4">
              <h1 className="line-clamp-2 uppercase">
                Төрөөс үзүүлэх шууд бус дэмжлэг
              </h1>

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
      </>
    </Suspense>
  )
}
