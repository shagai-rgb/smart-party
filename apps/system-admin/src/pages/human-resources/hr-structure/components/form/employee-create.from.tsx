import { useState } from 'react'

import { format } from 'date-fns'
import { CalendarIcon, ImageIcon, ImagePlusIcon, XIcon } from 'lucide-react'
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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const EmployeeCreateForm = () => {
  const { control } = useFormContext()
  const [image, setImage] = useState<string | null>(null)

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <FormField
        control={control}
        name="image"
        render={({ field }) => {
          const handleRemove = () => {
            setImage(null)
            field.onChange(null)
          }

          return (
            <FormItem className="flex flex-col gap-2">
              <FormLabel className="flex items-center gap-2">
                <ImageIcon className="h-4 w-4" />
                Ажилтны зураг:
              </FormLabel>

              <FormControl>
                <div className="relative">
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      field.onChange(file)
                      setImage(URL.createObjectURL(file))
                    }}
                  />

                  <label
                    htmlFor="image-upload"
                    className="flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-muted/30 transition hover:bg-muted/50"
                  >
                    {image ? (
                      <div className="relative h-full w-full p-3">
                        <img
                          src={image}
                          alt="preview"
                          className="h-full w-full rounded-lg object-cover"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          onClick={handleRemove}
                          className="absolute right-2 top-2 h-8 w-8"
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <ImagePlusIcon className="h-10 w-10 opacity-50" />
                        <span className="text-sm">Зураг оруулах</span>
                      </div>
                    )}
                  </label>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />

      {/* Form fields */}
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          control={control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Эцэг, эхийн нэр:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Овог" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Өөрийн нэр:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Нэр" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="register_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Регистр:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="РД оруулна уу" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Утасны дугаар:</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Утасны дугаар" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="birthday"
          render={({ field }) => (
            <FormItem className="flex flex-col ">
              <FormLabel>Төрсөн огноо:</FormLabel>

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
                      {field.value instanceof Date
                        ? format(field.value, 'yyyy-MM-dd')
                        : 'Огноо сонгох'}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0 z-999" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => field.onChange(date)}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
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

        <FormField
          control={control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Хүйс:</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-6"
                >
                  <Label className="flex items-center ">
                    <RadioGroupItem value="male" />
                    Эрэгтэй
                  </Label>
                  <Label className="flex items-center ">
                    <RadioGroupItem value="female" />
                    Эмэгтэй
                  </Label>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
