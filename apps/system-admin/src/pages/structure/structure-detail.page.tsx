import { Suspense, lazy } from 'react'

import { useParams } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

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

const UnitTab = lazy(() => import('./components/detail/unit-tab'))
const PositionTab = lazy(() => import('./components/detail/position-tab'))

export default function StructureDetail() {
  const { id, structureId } = useParams()
  const orgDetail = organizationMock.find((org) => org.id === Number(id))
  const structure = orgDetail?.structureData.structures
  const structureData = structure?.find((s) => s.id === Number(structureId))

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/structure">Байгууллага</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="uppercase">
            <BreadcrumbLink
              href={`/structure/${orgDetail?.id}`}
              style={{ color: orgDetail?.primary_color }}
            >
              {orgDetail?.full_name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/structure/${orgDetail?.id}`}>
              Бүтцийн өөрчлөлт
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{structureData?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="unit" className="flex grow mt-2">
        <div className="w-full border-b flex justify-start h-10 shrink-0 z-10">
          <TabsList>
            <TabsTrigger className="cursor-pointer" value="unit">
              Бүтцийн нэгж
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="position">
              Албан тушаал
            </TabsTrigger>
          </TabsList>
        </div>
        <Fragment>
          <Suspense fallback={<TabSkeleton />}>
            <UnitTab />
          </Suspense>
          <Suspense fallback={<TabSkeleton />}>
            <PositionTab />
          </Suspense>
        </Fragment>
      </Tabs>
    </>
  )
}
