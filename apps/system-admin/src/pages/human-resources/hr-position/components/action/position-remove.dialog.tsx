import { zodResolver } from '@hookform/resolvers/zod'
import { format, parse } from 'date-fns'
import { SaveIcon, XIcon } from 'lucide-react'
import { CalendarIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Form } from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

import { TEmployee } from '@/shared/mock/employee.data'

import { EmployeeInformation } from '../../../components/employee-information'
import {
  AppointmentSchema,
  TParams
} from '../../../hr-structure/components/step/step-appointment'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  employee: TEmployee
}

export const PosionRemoveDialog = (props: TProps) => {
  const { open, onOpenChange, employee } = props

  const form = useForm({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      exemption_reason: '',
      appointment_date: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-5xl max-h-[90vh] overflow-y-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle className="text-lg flex items-center justify-between">
                Албан хаагч чөлөөлөх
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
            <Separator className="my-4" />
            <EmployeeInformation employee={employee} />

            <div className="rounded-lg border border-gray-200 bg-white p-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="exemption_reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Чөлөөлсөн шалтгаан:</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder={'Сонгох'} />
                          </SelectTrigger>
                          <SelectContent className="z-999">
                            <SelectItem value="active">Hello</SelectItem>
                            <SelectItem value="not-active">World</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="appointment_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Томилогдсон огноо:</FormLabel>

                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              className={cn(
                                'justify-start text-left font-normal',
                                !field.value && 'text-muted-foreground'
                              )}
                            >
                              {field.value
                                ? format(
                                    parse(
                                      field.value,
                                      'yyyy-MM-dd',
                                      new Date()
                                    ),
                                    'yyyy-MM-dd'
                                  )
                                : 'Огноо сонгох'}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>

                        <PopoverContent
                          className="w-auto p-0 z-999"
                          align="start"
                        >
                          <Calendar
                            mode="single"
                            selected={
                              field.value
                                ? parse(field.value, 'yyyy-MM-dd', new Date())
                                : undefined
                            }
                            onSelect={(date) =>
                              field.onChange(
                                date ? format(date, 'yyyy-MM-dd') : ''
                              )
                            }
                            fromYear={1900}
                            toYear={new Date().getFullYear()}
                            captionLayout="dropdown"
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter className="mt-6 gap-3">
              <Button type="submit" variant="save">
                <SaveIcon />
                Чөлөөлөх
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
