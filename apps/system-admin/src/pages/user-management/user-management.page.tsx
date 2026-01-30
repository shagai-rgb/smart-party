import { Fragment, Suspense } from 'react'

import { UserCogIcon } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '@/components/custom/tabs'
import { Card, CardContent } from '@/components/ui/card'

import ElectionTab from './components/tabs/election.tab'
import NationalAuditTab from './components/tabs/national-audit.tab'
import PoliticalPartyTab from './components/tabs/political-party.tab'
import PrivateAuditTab from './components/tabs/private-audit.tab'

export default function UserManagementPage() {
  return (
    <>
      <Card className="shadow-none p-2 rounded-md hover:shadow-lg transition-all duration-300 h-full">
        <CardContent
          className="p-0 flex items-center border-2"
          style={{ borderColor: '#007773' }}
        >
          <div
            className="flex items-center justify-center w-30 h-30 p-8 flex-shrink-0"
            style={{ backgroundColor: '#007773' }}
          >
            <UserCogIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>

          <div className="flex flex-col gap-1.5 w-full px-4">
            <h1 className="line-clamp-2 uppercase text-sm font-semibold text-gray-900">
              Хэрэглэгчийн удирдлага
            </h1>

            <div
              className="w-1/2 h-0.5"
              style={{ backgroundColor: '#007773' }}
            />

            <p className="text-xs text-muted-foreground">
              Хяналт хөгжлийн бодлого
            </p>
          </div>
        </CardContent>
      </Card>
      <Tabs defaultValue="political-party" className="flex grow">
        <TabsList>
          <TabsTrigger className="cursor-pointer" value="political-party">
            Улс төрийн нам
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="election">
            Сонгуулийн ерөнхий хороо
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="private-audit">
            Хувийн аудитын компани
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="national-audit">
            Үндэсний аудитын газар
          </TabsTrigger>
        </TabsList>
        <Fragment>
          <Suspense>
            <PoliticalPartyTab />
          </Suspense>
          <Suspense>
            <ElectionTab />
          </Suspense>
          <Suspense>
            <PrivateAuditTab />
          </Suspense>
          <Suspense>
            <NationalAuditTab />
          </Suspense>
        </Fragment>
      </Tabs>
    </>
  )
}
