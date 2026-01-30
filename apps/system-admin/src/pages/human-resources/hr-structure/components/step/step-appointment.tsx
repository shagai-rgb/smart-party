import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronLeftIcon, PlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { AppointmentForm } from '../form/appointment-form'
import { StepType } from './step-check'

interface TProps {
  setStep: React.Dispatch<React.SetStateAction<StepType>>
  setOpen: React.Dispatch<React.SetStateAction<Record<'edit', boolean>>>
}

export const AppointmentSchema = z.object({
  regNo: z.string().optional(),
  exemption_reason: z.string().optional(),
  appointment_status: z.string().min(1),
  employee_status: z.string().min(1),
  appointment_date: z.string().min(1)
})

export type TParams = z.infer<typeof AppointmentSchema>

export const StepAppointment = ({ setStep, setOpen }: TProps) => {
  const form = useForm({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: {
      regNo: '',
      appointment_status: '',
      employee_status: '',
      appointment_date: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
    setOpen({ edit: false })
    setStep('check')
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2  gap-4">
            <FormField
              control={form.control}
              name="regNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Регистрийн дугаар:</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="РД оруулах"
                      className="shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AppointmentForm />
          </div>

          <div className="flex justify-between mt-4">
            <Button
              variant="outline"
              type="button"
              className="rounded-2xl"
              onClick={() => setStep('registration')}
            >
              <ChevronLeftIcon />
              Буцах
            </Button>

            <Button variant="create" type="submit">
              <PlusIcon />
              Нэмэх
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
