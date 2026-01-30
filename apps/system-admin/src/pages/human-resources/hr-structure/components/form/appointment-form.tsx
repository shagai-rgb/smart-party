import { format, parse } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
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

export const AppointmentForm = () => {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name="appointment_status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Томилогдсон байдал:</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Сонгох" />
                </SelectTrigger>
                <SelectContent className="z-999">
                  <SelectItem value="appointed">Томилогдсон</SelectItem>
                  <SelectItem value="not-appointed">Томилогдоогүй</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="employee_status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ажилтны төлөв:</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={'Сонгох'} />
                </SelectTrigger>
                <SelectContent className="z-999">
                  <SelectItem value="active">Идэвхтэй</SelectItem>
                  <SelectItem value="not-active">Идэвхгүй</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
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
                          parse(field.value, 'yyyy-MM-dd', new Date()),
                          'yyyy-MM-dd'
                        )
                      : 'Огноо сонгох'}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0 z-999" align="start">
                <Calendar
                  mode="single"
                  selected={
                    field.value
                      ? parse(field.value, 'yyyy-MM-dd', new Date())
                      : undefined
                  }
                  onSelect={(date) =>
                    field.onChange(date ? format(date, 'yyyy-MM-dd') : '')
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
    </>
  )
}
