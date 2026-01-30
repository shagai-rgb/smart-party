import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface TProps {
  className?: string
}
export const OrgColorForm = (props: TProps) => {
  const { className } = props
  const { control } = useFormContext()
  return (
    <div className="space-y-3">
      <FormField
        control={control}
        name="primary_color"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Үндсэн өнгө:</FormLabel>
            <FormControl>
              <div className="flex gap-2">
                <Input
                  type="color"
                  {...field}
                  className={`w-20 p-1 cursor-pointer ${className}`}
                />
                <Input
                  type="text"
                  placeholder="#000000"
                  {...field}
                  className={`shadow-none ${className}`}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="secondary_color"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Туслах өнгө:</FormLabel>
            <FormControl>
              <div className="flex gap-2">
                <Input
                  type="color"
                  {...field}
                  className={`w-20 p-1 cursor-pointer ${className}`}
                />
                <Input
                  type="text"
                  placeholder="#000000"
                  {...field}
                  className={`shadow-none ${className}`}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
