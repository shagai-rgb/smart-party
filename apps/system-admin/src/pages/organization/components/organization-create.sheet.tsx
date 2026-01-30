import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { PlusIcon } from '@radix-ui/react-icons'
import { type LucideIcon, PlusCircleIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { OrgAddressFrom } from './form/org-address.form'
import { OrgColorForm } from './form/org-color-form'
import { OrgContactForm } from './form/org-contact.form'
import { OrgLogoForm } from './form/org-logo-form'
import { OrgMainInfoForm } from './form/org-main-info.form'

export const OrganizationCreateSchema = z.object({
  full_name: z.string().min(1),
  short_name: z.string().min(1),
  website: z.string().min(1, 'Цахим хуудас оруулна уу'),
  phone: z.string().min(1, 'Утасны дугаар оруулна уу'),
  primary_color: z.string().optional(),
  secondary_color: z.string().optional(),
  email: z.string().email('Зөв имэйл оруулна уу'),
  address: z.string().min(1, 'Хаяг оруулна уу'),
  established_date: z.string().min(1, 'Огноо оруулна уу'),
  logo: z.instanceof(File).optional().nullable()
})

export type TParams = z.infer<typeof OrganizationCreateSchema>

interface TProps {
  title: string
  icon: LucideIcon
  onSubmit: () => void
}

export function OrganizationCreate({ icon, title, onSubmit }: TProps) {
  const [open, setOpen] = useState<boolean>(false)
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
  const Icon = icon
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="create" size="sm">
          <PlusCircleIcon />
          Байгууллага нэмэх
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-0">
          <SheetTitle className="flex items-center gap-1.5">
            <Icon className="h-5 w-5" />
            {title}
          </SheetTitle>
          <SheetDescription className="sr-only">_</SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-full overflow-hidden">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col p-2 gap-4">
                <OrgMainInfoForm />
                <OrgContactForm />
                <OrgAddressFrom />
                <OrgColorForm />
                <OrgLogoForm />
              </div>
              <SheetFooter>
                <Button type="submit" variant="create">
                  <PlusIcon />
                  Нэмэх
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
