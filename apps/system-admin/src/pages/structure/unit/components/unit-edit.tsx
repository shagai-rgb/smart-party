import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { DialogClose } from '@radix-ui/react-dialog'
import { SaveIcon, XIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { TUnit } from '@/shared/mock/organization-data'

import { StructurUnitSchema, TParams } from './unit-create'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  unit?: TUnit
}

export const StructureUnitEdit = (props: TProps) => {
  const { open, onOpenChange, unit } = props
  const form = useForm({
    resolver: zodResolver(StructurUnitSchema),
    defaultValues: {
      name: '',
      short_name: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
  }

  useEffect(() => {
    if (unit) {
      form.reset({
        name: unit.name,
        short_name: unit.short_name
      })
    }
  }, [form, unit])

  const isDirty = form.formState.isDirty

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-100 ">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between w-full">
            Бүтцийн нэгж засах
            <DialogClose className="cursor-pointer">
              <XIcon className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Бүтцийн нэгж засах
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" p-4 space-y-6 bg-white rounded-lg border ">
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
            <DialogFooter>
              <Button
                type="submit"
                variant="save"
                className="w-full "
                disabled={!isDirty}
              >
                <SaveIcon />
                Хадгалах
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
