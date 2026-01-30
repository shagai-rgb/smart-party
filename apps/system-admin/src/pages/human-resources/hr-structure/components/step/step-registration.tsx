import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  BriefcaseBusinessIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

import { EmployeeCreateForm } from '../form/employee-create.from'
import { StepType } from './step-check'

export const EmployeeSchema = z.object({
  register_number: z.string().min(1, 'Регистрийн дугаар оруулна уу'),
  last_name: z.string().min(1, 'Эцэг, эхийн нэр оруулна уу'),
  first_name: z.string().min(1, 'Өөрийн нэр оруулна уу'),
  birthday: z.date({ required_error: 'Төрсөн огноо сонгоно уу' }),
  gender: z.enum(['male', 'female'], { required_error: 'Хүйс сонгоно уу' }),
  phone_number: z.string().min(1, 'Утасны дугаар оруулна уу'),
  image: z.instanceof(File).optional().nullable()
})

export type TParams = z.infer<typeof EmployeeSchema>

interface TProps {
  setStep: React.Dispatch<React.SetStateAction<StepType>>
}

export const StepRegistration = ({ setStep }: TProps) => {
  const form = useForm<TParams>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: {
      register_number: '',
      last_name: '',
      first_name: '',
      phone_number: '',
      birthday: new Date(),
      image: null
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
    setStep('position-add')
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-h-[400px] flex flex-col justify-around"
        >
          <EmployeeCreateForm />

          <div className="flex justify-between mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep('check')}
              className="rounded-2xl"
            >
              <ChevronLeftIcon />
              Буцах
            </Button>

            <Button type="submit" variant="create">
              <BriefcaseBusinessIcon /> Албан тушаалд томилох
              <ChevronRightIcon />
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
