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

import { TPosition } from '@/shared/mock/organization-data'

import { PositionSchema, TParams } from './position-create'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  position?: TPosition
}

export const PositionEdit = (props: TProps) => {
  const { open, onOpenChange, position } = props
  const form = useForm({
    resolver: zodResolver(PositionSchema),
    defaultValues: {
      position_name: '',
      short_name: ''
    }
  })

  const onSubmit = (data: TParams) => {
    console.log(data)
  }

  useEffect(() => {
    if (position) {
      form.reset({
        position_name: position.position_name,
        short_name: position.short_name
      })
    }
  }, [form, position])

  const isDirty = form.formState.isDirty

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-100 ">
        <DialogHeader>
          <DialogTitle className="flex items-center text-lg justify-between w-full">
            Албан тушаал засах
            <DialogClose className="cursor-pointer">
              <XIcon className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Албан тушаал засах
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" p-4 space-y-6 bg-white rounded-lg border ">
              <FormField
                name="position_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Албан тушаалын нэр:</FormLabel>
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
                className="w-full"
                variant={'save'}
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
