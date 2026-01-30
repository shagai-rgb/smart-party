import { CalendarIcon, PenToolIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const OrgMainInfoForm = () => {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name="full_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <PenToolIcon />
              Бүтэн нэр:
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                className="shadow-none uppercase"
                placeholder="Нэр оруулах"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="short_name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <PenToolIcon />
              Товч нэр:
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                className="shadow-none uppercase "
                placeholder="Товч нэр оруулах"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="established_date"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <CalendarIcon />
              Үүсгэн байгуулагдсан огноо:
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="1921-07-23"
                inputMode="numeric"
                maxLength={10}
                className="shadow-none"
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, '')
                  if (value.length > 4)
                    value = value.slice(0, 4) + '-' + value.slice(4)
                  if (value.length > 7)
                    value = value.slice(0, 7) + '-' + value.slice(7, 9)

                  field.onChange(value)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
