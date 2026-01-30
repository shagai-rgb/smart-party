import { Suspense, lazy } from 'react'

import { useParams } from 'react-router-dom'

import { TabSkeleton } from '@/components/custom/tab-skeleton'
import { Tabs, TabsList, TabsTrigger } from '@/components/custom/tabs'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'

import { organizationMock } from '@/shared/mock/organization-data'

const ActiveEmployeeTab = lazy(
  () => import('./components/active-employee.tab')
)
const InactiveEmployeeTab = lazy(
  () => import('./components/inactive-employee.tab')
)

export default function HrEmployeePage() {
  const { id } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))
  return (
    <div>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/human-resources">Байгууллага</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="uppercase">
            <BreadcrumbPage style={{ color: orgDetail?.primary_color }}>
              {orgDetail?.full_name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="active" className="relative grow h-full">
        <div className="w-full border-b flex justify-start h-10 shrink-0 z-10">
          <TabsList className="w-full justify-start p-0">
            <TabsTrigger value="active">Идэвхитэй</TabsTrigger>
            <TabsTrigger value="inactive">Идэвхигүй</TabsTrigger>
          </TabsList>
        </div>
        <Suspense fallback={<TabSkeleton />}>
          <ActiveEmployeeTab />
        </Suspense>
        <Suspense fallback={<TabSkeleton />}>
          <InactiveEmployeeTab />
        </Suspense>
      </Tabs>
    </div>
  )
}
