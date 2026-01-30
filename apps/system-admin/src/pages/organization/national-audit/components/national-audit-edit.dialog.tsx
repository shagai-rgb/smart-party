import { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { EditIcon, PaintbrushIcon, Save, X } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

import { TNationalAudit } from '@/shared/mock/national-audit.data'

import { OrgAddressFrom } from '../../components/form/org-address.form'
import { OrgColorForm } from '../../components/form/org-color-form'
import { OrgContactForm } from '../../components/form/org-contact.form'
import { OrgLogoForm } from '../../components/form/org-logo-form'
import { OrgMainInfoForm } from '../../components/form/org-main-info.form'
import {
  OrganizationCreateSchema,
  TParams
} from '../../components/organization-create.sheet'

type TProps = {
  national_audit: TNationalAudit
}

export const NationalAuditEdit = ({ national_audit }: TProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const form = useForm<TParams>({
    resolver: zodResolver(OrganizationCreateSchema),
    defaultValues: {
      full_name: '',
      short_name: '',
      website: '',
      phone: '',
      email: '',
      primary_color: '',
      secondary_color: '',
      logo: null,
      address: '',
      established_date: ''
    }
  })

  useEffect(() => {
    if (national_audit) {
      form.reset({
        full_name: national_audit.full_name,
        short_name: national_audit.short_name,
        website: national_audit.website,
        phone: national_audit.phone,
        email: national_audit.email,
        address: national_audit.address,
        established_date: national_audit.established_date,
        primary_color: national_audit.primary_color,
        secondary_color: national_audit.secondary_color,
        logo: null
      })
    }
  }, [national_audit, form])

  const onSubmit = (data: TParams) => {
    console.log(data)
    setIsDialogOpen(false)
  }

  const handleCancel = () => {
    if (national_audit) {
      form.reset()
    }
    setIsDialogOpen(false)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="save" size="sm">
          <EditIcon />
          Засах
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[70vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Байгууллагын мэдээлэл засах</DialogTitle>
          <DialogDescription className="sr-only">_</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Үндсэн мэдээлэл
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <OrgMainInfoForm />
                </div>
              </section>

              <Separator />

              <section>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Холбоо барих мэдээлэл
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <OrgContactForm />
                </div>
              </section>

              <Separator />

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <OrgAddressFrom className="h-40" />
                <OrgLogoForm source={national_audit} />

                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold  tracking-wider  mb-4 flex items-center gap-1.5">
                    <PaintbrushIcon />
                    Өнгө
                  </h3>
                  <div>
                    <OrgColorForm className="h-10" />
                  </div>
                </div>
              </section>
            </div>

            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="gap-2 bg-transparent"
              >
                <X className="h-4 w-4" />
                Цуцлах
              </Button>
              <Button variant="save">
                <Save />
                Хадгалах
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
