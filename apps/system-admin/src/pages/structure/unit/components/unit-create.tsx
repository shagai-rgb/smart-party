import { zodResolver } from '@hookform/resolvers/zod'
import { LayersIcon, PlusCircleIcon, PlusIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

export const StructurUnitSchema = z.object({
  name: z.string().min(1, 'Нэр заавал'),
  short_name: z.string().min(1, 'Товч нэр оруулах')
})

export type TParams = z.infer<typeof StructurUnitSchema>

export const StructureUnitCreate = () => {
  const form = useForm<TParams>({
    resolver: zodResolver(StructurUnitSchema),
    defaultValues: {
      name: '',
      short_name: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="create"
          className="flex items-center gap-1.5"
          size="sm"
        >
          <PlusCircleIcon /> Бүтцийн нэгж нэмэх
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pb-0 ">
          <SheetTitle className="flex items-center gap-1.5">
            <LayersIcon /> Шинэ бүтцийн нэгж нэмэх
          </SheetTitle>
          <SheetDescription className="sr-only">_</SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col h-full"
          >
            <div className="flex flex-col p-2 gap-4 flex-1">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Бүтцийн нэгжийн нэр:</FormLabel>
                    <FormControl>
                      <Input placeholder="Нэр оруулах" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="short_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Товч нэр:</FormLabel>
                    <FormControl>
                      <Input placeholder="Товч нэр оруулах" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SheetFooter className=" my-auto">
              <Button
                type="submit"
                className="flex items-center gap-1.5"
                variant="create"
              >
                <PlusIcon /> Нэмэх
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  )
}
