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

import { TOrganization } from '@/shared/mock/organization-data'

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
  organization: TOrganization
}

export const PoliticalPartyEdit = ({ organization }: TProps) => {
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
    if (organization) {
      form.reset({
        full_name: organization.full_name,
        short_name: organization.short_name,
        website: organization.website,
        phone: organization.phone,
        email: organization.email,
        address: organization.address,
        established_date: organization.established_date,
        primary_color: organization.primary_color,
        secondary_color: organization.secondary_color,
        logo: null
      })
    }
  }, [organization, form])

  const onSubmit = (data: TParams) => {
    console.log(data)
    setIsDialogOpen(false)
  }

  const handleCancel = () => {
    if (organization) {
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
                <OrgLogoForm source={organization} />

                <div className="flex flex-col">
                  <h3 className="mb-4 flex items-center gap-1.5 text-sm font-semibold">
                    <PaintbrushIcon className="h-3.5 w-3.5" />
                    Өнгө
                  </h3>
                  <div>
                    <OrgColorForm className="h-10" />
                  </div>
                </div>
              </section>
            </div>

            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                <X />
                Цуцлах
              </Button>
              <Button type="submit" variant="save">
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
