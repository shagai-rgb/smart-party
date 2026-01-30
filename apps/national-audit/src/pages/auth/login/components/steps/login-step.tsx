import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import PasswordInput from '@/components/mirage/password-input'
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

import { mockUser } from '../mock/data'

const LoginFormSchema = z.object({
  email: z.string().email('Зөв имэйл хаяг оруулна уу'),
  password: z.string().min(6, 'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой')
})

type TLoginParams = z.infer<typeof LoginFormSchema>

interface TProps {
  error: string
  setError: (v: string) => void
  onSuccess: () => void
}

export const LoginStep = (props: TProps) => {
  const { error, setError, onSuccess } = props
  const form = useForm<TLoginParams>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data: TLoginParams) => {
    setError('')

    if (data.email === mockUser.email && data.password === mockUser.password) {
      onSuccess()
      form.reset()
    } else {
      setError('Имэйл хаяг эсвэл нууц үг буруу байна')
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Имэйл хаяг</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@email.com"
                  type="email"
                  autoComplete="email"
                  className="h-11 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel className="text-gray-700">Нууц үг</FormLabel>
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Нууц үг мартсан?
                </button>
              </div>
              <FormControl>
                <PasswordInput
                  autoComplete="current-password"
                  className="h-11 shadow-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full h-11 text-base font-medium">
          Нэвтрэх
        </Button>
      </form>
    </Form>
  )
}
