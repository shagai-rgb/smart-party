import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const OrgContactForm = () => {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <GlobeIcon />
              Цахим хуудас:
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="https://example.com"
                className="shadow-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <PhoneIcon />
              Утасны дугаар:
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="+976 xxxx xxxx"
                className="shadow-none"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              <MailIcon />
              Цахим шуудан:
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                type="email"
                className="shadow-none"
                placeholder="example@email.com"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
