import { MapPinIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

interface TProps {
  className?: string
}

export const OrgAddressFrom = (props: TProps) => {
  const { className } = props
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name="address"
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            <MapPinIcon />
            Хаяг:
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Хаяг оруулна уу"
              {...field}
              className={`shadow-none  ${className}`}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
