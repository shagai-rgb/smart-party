import { Fragment, Suspense, lazy } from 'react'

import { Building2Icon } from 'lucide-react'

import { Tabs, TabsList, TabsTrigger } from '@/components/custom/tabs'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Card, CardContent } from '@/components/ui/card'

import { usePreference } from '@/shared/stores/preference.store'

import { TabSkeleton } from '../../components/custom/tab-skeleton'

const ElectionTab = lazy(() => import('./election/components/election.tab'))
const NationalAuditTab = lazy(
  () => import('./national-audit/components/national-audit.tab')
)
const PoliticalPartyTab = lazy(
  () => import('./political-party/components/political-party.tab')
)
const PrivateAuditTab = lazy(
  () => import('./private-audit/components/private-audit.tab')
)

export default function OrganizationList() {
  const organizationTab = usePreference((state) => state.organization_tab)
  const setOrganizationTab = usePreference(
    (state) => state.handlers.set_organization_tab
  )

  return (
    <div>
      <Card className="shadow-none p-2 rounded-md hover:shadow-lg transition-all duration-300 h-full">
        <CardContent
          className="p-0 flex items-center border-2"
          style={{ borderColor: '#007773' }}
        >
          <div
            className="flex items-center justify-center w-30 h-30 p-8 flex-shrink-0"
            style={{ backgroundColor: '#007773' }}
          >
            <Building2Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>

          <div className="flex flex-col gap-1.5 w-full px-4">
            <h1 className="line-clamp-2 uppercase text-sm font-semibold text-gray-900">
              Байгууллага
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
            <PoliticalPartyTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <ElectionTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <PrivateAuditTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <NationalAuditTab />
          </Suspense>
        </Fragment>
      </Tabs>
    </div>
  )
}
