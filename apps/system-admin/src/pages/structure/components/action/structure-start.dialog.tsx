import { DialogClose } from '@radix-ui/react-dialog'
import { CheckIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { TStructureItem } from '@/shared/mock/organization-data'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  structure: TStructureItem
}

export const StructureStartDialog = (props: TProps) => {
  const { open, onOpenChange, structure } = props

  const onSubmit = () => {
    console.log('Hello')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-100">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between w-full">
            Бүтцийн өөрчлөлт эхлүүлэх
            <DialogClose className="cursor-pointer">
              <XIcon className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Бүтцийн мэдээллийг эхлүүлэх
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 rounded-lg border bg-white p-4 mt-2">
          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">Нэр:</Label>
            <div>{structure.name}</div>
          </div>
          <Separator />

          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">
              Өөрчлөлт хийсэн огноо:
            </Label>
            <div>{structure.start_date}</div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">
              Өөрчлөлтийн дагуу ажиллаж эхлэх огноо:
            </Label>
            <div>{structure.effectiveDate}</div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button onClick={onSubmit} className="w-full" variant="save">
            <CheckIcon />
            Эхлүүлэх
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
