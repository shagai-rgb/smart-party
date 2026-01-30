import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { mockOtp } from '../mock/data'

const OtpFormSchema = z.object({
  otp1: z.string().length(1, ''),
  otp2: z.string().length(1, ''),
  otp3: z.string().length(1, ''),
  otp4: z.string().length(1, '')
})

type TOtpParams = z.infer<typeof OtpFormSchema>

interface TProps {
  error: string
  setError: (v: string) => void
  onSuccess: () => void
  onBack: () => void
}

export const OtpStep = (props: TProps) => {
  const { error, setError, onSuccess, onBack } = props

  const form = useForm<TOtpParams>({
    resolver: zodResolver(OtpFormSchema),
    defaultValues: {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: ''
    }
  })

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return

    const fieldName = `otp${index + 1}` as keyof TOtpParams
    form.setValue(fieldName, value)

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 2}`)
      nextInput?.focus()
    }
  }

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === 'Backspace' &&
      !form.getValues(`otp${index + 1}` as keyof TOtpParams) &&
      index > 0
    ) {
      const prevInput = document.getElementById(`otp-${index}`)
      prevInput?.focus()
    }
  }

  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 4)

    pastedData.split('').forEach((char, index) => {
      if (index < 4) {
        form.setValue(`otp${index + 1}` as keyof TOtpParams, char)
      }
    })
  }
  const onSubmit = (data: TOtpParams) => {
    setError('')
    const code = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`

    if (code === mockOtp) {
      form.reset()
      onSuccess()
    } else {
      setError('OTP код буруу байна')
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="text-center text-sm text-gray-600 mb-4">
          Таны имэйл хаягруу илгээсэн 4 оронтой кодыг оруулна уу
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <FormLabel className="sr-only">_</FormLabel>
          <div className="flex gap-3 justify-center">
            {[0, 1, 2, 3].map((index) => (
              <FormField
                key={index}
                control={form.control}
                name={`otp${index + 1}` as keyof TOtpParams}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        id={`otp-${index + 1}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        className="h-16 w-16 text-center text-2xl font-semibold"
                        autoComplete="off"
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, '')
                          handleOtpChange(index, value)
                        }}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        onPaste={handleOtpPaste}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
          </div>
          {Object.values(form.formState.errors).some(Boolean) && (
            <p className="text-sm font-medium text-destructive text-center">
              Бүх талбаруудыг бөглөнө үү
            </p>
          )}
        </div>

        <div className="text-center">
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors hover:underline"
            onClick={() => console.log('Resend OTP')}
          >
            Код дахин илгээх
          </button>
        </div>

        <div className="flex gap-3 items-center">
          <Button
            type="button"
            variant="outline"
            className="flex-1 h-10"
            onClick={onBack}
          >
            Буцах
          </Button>
          <Button type="submit" className="flex-1 h-10">
            Баталгаажуулах
          </Button>
        </div>
      </form>
    </Form>
  )
}
