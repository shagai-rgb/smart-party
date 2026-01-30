import { zodResolver } from '@hookform/resolvers/zod'
import { NetworkIcon, PlusCircleIcon, PlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import { StructureForm } from './structure-form'

export const StructureSchema = z.object({
  name: z.string().min(1, 'Нэр заавал'),
  start_date: z.string().min(1, 'Өөрчлөлт хийсэн огноо заавал'),
  effectiveDate: z.string().min(1, 'Ажиллаж эхлэх огноо заавал')
})

export type TParams = z.infer<typeof StructureSchema>

export const StructureCreateDialaog = () => {
  const form = useForm<TParams>({
    resolver: zodResolver(StructureSchema),
    defaultValues: {
      name: '',
      effectiveDate: '',
      start_date: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="create"
          className="flex items-center gap-1.5"
          size="sm"
        >
          <PlusCircleIcon /> Бүтцийн өөрчлөлт нэмэх
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-0 ">
          <SheetTitle className="flex items-center gap-1.5">
            <NetworkIcon /> Шинэ бүтцийн өөрчлөлт нэмэх
          </SheetTitle>
          <SheetDescription className="sr-only">_</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <div className="flex flex-col p-2 gap-4 flex-1">
              <StructureForm />
            </div>

            <SheetFooter className=" my-auto">
              <Button
                type="submit"
                className="flex items-center gap-1.5"
                variant="create"
              >
                <PlusIcon /> Нэмэх
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
