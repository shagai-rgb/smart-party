import { zodResolver } from '@hookform/resolvers/zod'
import { SaveIcon, XIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { EmployeeInformation } from '@/pages/human-resources/components/employee-information'
import { AppointmentForm } from '@/pages/human-resources/hr-structure/components/form/appointment-form'
import {
  AppointmentSchema,
  type TParams
} from '@/pages/human-resources/hr-structure/components/step/step-appointment'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'

import { TEmployee } from '@/shared/mock/employee.data'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  employee: TEmployee
}

export const PositionEditDialog = (props: TProps) => {
  const { open, onOpenChange, employee } = props

  const form = useForm({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      appointment_status: '',
      employee_status: '',
      appointment_date: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-5xl max-h-[90vh] overflow-y-auto ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <DialogHeader>
              <DialogTitle className="text-lg flex items-center justify-between">
                Албан хаагч томилолт засах
                <DialogClose className="cursor-pointer">
                  <XIcon className="size-5" />
                </DialogClose>
              </DialogTitle>
              <DialogDescription className="text-sm flex gap-1.5">
                Бүтцийн өөрчлөлт:
                <span className="font-medium text-gray-900">
                  2025 оны 06 сарын 01-ний өдрийн өөрчлөлт
                </span>
              </DialogDescription>
            </DialogHeader>
            <Separator className="my-2" />
            <EmployeeInformation employee={employee} />

            <div className="rounded-lg border border-gray-200 bg-white p-4 ">
              <div className="grid grid-cols-3 gap-4">
                <AppointmentForm />
              </div>
            </div>

            <DialogFooter className="mt-6 gap-3">
              <Button type="submit" variant="save" className="gap-2">
                <SaveIcon className="h-4 w-4" />
                Хадгалах
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
