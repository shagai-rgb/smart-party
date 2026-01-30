import { Fragment, Suspense, lazy } from 'react'

import { Users2Icon } from 'lucide-react'

import { TabSkeleton } from '@/components/custom/tab-skeleton'
import { Tabs, TabsList, TabsTrigger } from '@/components/custom/tabs'
import { Card, CardContent } from '@/components/ui/card'

import { usePreference } from '@/shared/stores/preference.store'

const HrElectionTab = lazy(() => import('./components/tabs/hr-election.tab'))
const HrNationalAuditTab = lazy(
  () => import('./components/tabs/hr-national-audit.tab')
)
const HrPoliticalPartyTab = lazy(
  () => import('./components/tabs/hr-political-party.tab')
)
const HrPrivateAuditTab = lazy(
  () => import('./components/tabs/hr-private-audit.tab')
)

export default function HumanResourcesPage() {
  const organizationTab = usePreference((state) => state.organization_tab)
  const setOrganizationTab = usePreference(
    (state) => state.handlers.set_organization_tab
  )

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
            <Users2Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>

          <div className="flex flex-col gap-1.5 w-full px-4">
            <h1 className="line-clamp-2 uppercase text-sm font-semibold text-gray-900">
              Хүний нөөц
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
      <Tabs
        value={organizationTab}
        onValueChange={setOrganizationTab}
        className="flex grow"
      >
        <div className="w-full border-b flex justify-start h-10 shrink-0 z-10">
          <TabsList>
            <TabsTrigger className="cursor-pointer" value="political-party">
              <span className="hidden sm:inline">Улс төрийн нам</span>
              <span className="sm:hidden">УТН</span>
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer" value="election">
              <span className="hidden sm:inline">Сонгуулийн ерөнхий хороо</span>
              <span className="sm:hidden">СЕХ</span>
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer" value="private-audit">
              <span className="hidden sm:inline">Хувийн аудитын компани</span>
              <span className="sm:hidden">ХАК</span>
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer" value="national-audit">
              <span className="hidden sm:inline">Үндэсний аудитын газар</span>
              <span className="sm:hidden">ҮАГ</span>
            </TabsTrigger>
          </TabsList>
        </div>
        <Fragment>
          <Suspense fallback={<TabSkeleton />}>
            <HrPoliticalPartyTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <HrElectionTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <HrPrivateAuditTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <HrNationalAuditTab />
          </Suspense>
        </Fragment>
      </Tabs>
    </>
  )
}
