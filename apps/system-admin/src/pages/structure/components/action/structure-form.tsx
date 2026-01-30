import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const StructureForm = () => {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        name="name"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Нэр:</FormLabel>
            <FormControl>
              <Input
                placeholder="Нэр оруулах"
                {...field}
                className="shadow-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="start_date"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Эхэлсэн огноо:</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="2025-07-23"
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
      <FormField
        name="effectiveDate"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Өөрчлөлтийн дагуу ажиллаж эхлэх огноо:</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="2025-07-30"
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
