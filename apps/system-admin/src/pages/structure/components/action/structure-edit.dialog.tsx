import { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SaveIcon, XIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Form } from '@/components/ui/form'

import { TStructureItem } from '@/shared/mock/organization-data'

import { StructureSchema, TParams } from './structure-create'
import { StructureForm } from './structure-form'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  structure: TStructureItem
}

export const StructureEditDialog = (props: TProps) => {
  const { open, onOpenChange, structure } = props

  const form = useForm({
    resolver: zodResolver(StructureSchema),
    defaultValues: {
      name: '',
      start_date: '',
      effectiveDate: ''
    }
  })
  const onSubmit = (data: TParams) => {
    console.log(data)
  }

  useEffect(() => {
    if (structure) {
      form.reset({
        name: structure.name,
        start_date: structure.start_date,
        effectiveDate: structure.effectiveDate
      })
    }
  }, [form, structure])

  const isDirty = form.formState.isDirty

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-100">
        <DialogHeader>
          <DialogTitle className="flex items-center text-lg w-full justify-between">
            Бүтцийн өөрчлөлт засах
            <DialogClose className="cursor-pointer">
              <XIcon className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Бүтцийн мэдээллийг засах
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4 rounded-lg border bg-white p-4 mt-2"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <StructureForm />
            <DialogFooter className="gap-2">
              <Button
                type="submit"
                disabled={!isDirty}
                variant="save"
                className="w-full"
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
