import { Building2, Calendar, Globe, Mail, Phone } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { nationalAuditMock } from '@/shared/mock/national-audit.data'

import { NationalAuditEdit } from './components/national-audit-edit.dialog'

export default function NationalAudit() {
  const { id } = useParams()
  const nationalAudit = nationalAuditMock.find((org) => org.id === Number(id))
  if (!nationalAudit) return null

  return (
    <div>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Нүүр</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/organization">Байгууллага</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className="uppercase">
            <BreadcrumbPage>{nationalAudit.full_name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className="shadow-none rounded-none ">
        <CardHeader className=" flex items-center font-medium  ">
          <div className="flex items-center justify-between w-full ">
            <CardTitle className="text-xl  flex items-center gap-1.5 uppercase  font-medium ">
              <img
                src={nationalAudit.logo || '/placeholder.svg'}
                alt="LOGO"
                className="h-10 w-10 object-contain "
              />
              <p style={{ color: nationalAudit.primary_color }}>
                {nationalAudit?.full_name}
              </p>
            </CardTitle>
            <NationalAuditEdit national_audit={nationalAudit} />
          </div>
        </CardHeader>
        <Separator style={{ backgroundColor: nationalAudit.secondary_color }} />
        <CardContent className="p-4">
          <div className="space-y-6">
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                Үндсэн мэдээлэл
              </h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground  tracking-wide">
                    <Building2 className="h-3.5 w-3.5" />
                    Бүтэн нэр
                  </dt>
                  <dd className="text-sm font-medium text-foreground pl-5 uppercase">
                    {nationalAudit?.full_name || '—'}
                  </dd>
                </div>
                <div className="space-y-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground   tracking-wide">
                    <Building2 className="h-3.5 w-3.5" />
                    Товч нэр
                  </dt>
                  <dd className="text-sm font-medium text-foreground pl-5 uppercase">
                    {nationalAudit?.short_name || '—'}
                  </dd>
                </div>

                <div className="space-y-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground  tracking-wide">
                    <Building2 className="h-3.5 w-3.5" />
                    Байгууллагын төрөл
                  </dt>
                  <dd className="pl-5">
                    <Badge
                      variant="secondary"
                      className="font-medium uppercase"
                    >
                      {nationalAudit.type}
                    </Badge>
                  </dd>
                </div>

                <div className="space-y-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground  tracking-wide">
                    <Calendar className="h-3.5 w-3.5" />
                    Байгуулагдсан огноо
                  </dt>
                  <dd className="text-sm font-medium text-foreground pl-5">
                    {nationalAudit?.established_date || '—'}
                  </dd>
                </div>
              </dl>
            </section>

            <Separator />
            <section>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 ">
                Холбоо барих мэдээлэл
              </h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                <div className="space-y-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground  tracking-wide">
                    <Globe className="h-3.5 w-3.5" />
                    Цахим хуудас
                  </dt>
                  <dd className="text-sm font-medium pl-5">
                    {nationalAudit?.website ? (
                      <div className="text-primary hover:underline underline-offset-4 transition-colors ">
                        {nationalAudit.website}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </dd>
                </div>

                <div className="space-y-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground  tracking-wide">
                    <Phone className="h-3.5 w-3.5" />
                    Утасны дугаар
                  </dt>
                  <dd className="text-sm font-medium text-foreground pl-5 uppercase">
                    {nationalAudit?.phone || '—'}
                  </dd>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground  tracking-wide">
                    <Mail className="h-3.5 w-3.5" />
                    Цахим шуудан
                  </dt>
                  <dd className="text-sm font-medium pl-5">
                    {nationalAudit?.email ? (
                      <div className="text-primary hover:underline underline-offset-4 transition-colors">
                        {nationalAudit.email}
                      </div>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </dd>
                </div>
              </dl>
            </section>

            <Separator />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Байршил
                </h3>
                <dl>
                  <dd className="text-sm font-medium text-foreground leading-relaxed border h-32 flex items-start text-justify p-6 rounded-2xl">
                    {nationalAudit?.address || '—'}
                  </dd>
                </dl>
              </div>
              <div>
                <h3 className="text-xs font-semibold  tracking-wider text-muted-foreground mb-4">
                  Лого
                </h3>
                <div className=" border items-center flex justify-center rounded-2xl">
                  <div className="relative w-32 h-32  overflow-hidden bg-muted/30 flex items-center justify-center p-3">
                    <img
                      src={nationalAudit.logo || ''}
                      alt="Байгууллагын лого"
                      className=" w-full h-full object-conver"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold  tracking-wider text-muted-foreground mb-4">
                  Өнгө
                </h3>
                <div className="flex items-center gap-6 border h-32 justify-center rounded-2xl ">
                  <div className="space-y-2">
                    <dt className="text-xs font-medium text-muted-foreground ">
                      Үндсэн өнгө
                    </dt>
                    <dd className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg border-2 border-border shadow-sm"
                        style={{
                          backgroundColor: nationalAudit?.primary_color
                        }}
                      />
                      <span className="text-sm font-mono font-medium text-foreground uppercase">
                        {nationalAudit?.primary_color || '—'}
                      </span>
                    </dd>
                  </div>
                  <div className="space-y-2">
                    <dt className="text-xs font-medium text-muted-foreground">
                      Хоёрдогч өнгө
                    </dt>
                    <dd className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg border-2 border-border shadow-sm"
                        style={{
                          backgroundColor: nationalAudit?.secondary_color
                        }}
                      />
                      <span className="text-sm font-mono font-medium text-foreground uppercase">
                        {nationalAudit?.secondary_color || '—'}
                      </span>
                    </dd>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
