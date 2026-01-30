import { CheckIcon, XIcon } from 'lucide-react'

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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { TStructureItem } from '@/shared/mock/organization-data'

interface TProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  structure: TStructureItem
}

export const StructureEndDialog = (props: TProps) => {
  const { open, onOpenChange, structure } = props

  const onSubmit = () => {
    console.log(structure)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md bg-gray-100">
        <DialogHeader>
          <DialogTitle className="w-full flex items-center justify-between">
            Бүтцийн өөрчлөлт дуусгах
            <DialogClose className="cursor-pointer">
              <XIcon className="size-5" />
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="sr-only">
            Бүтцийн мэдээллийг эхлүүлэх
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 rounded-lg border bg-white p-4">
          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">Нэр:</Label>
            <div className=" ">{structure.name}</div>
          </div>
          <Separator />

          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">
              Өөрчлөлт хийсэн огноо:
            </Label>
            <div className=" ">{structure.start_date}</div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">
              Өөрчлөлтийн дагуу ажиллаж эхлэх огноо:
            </Label>
            <div className=" ">{structure.effectiveDate}</div>
          </div>
          <Separator />
          <div className="space-y-2">
            <Label className="text-sm  text-muted-foreground">
              Бүтцийн өөрчлөлт дуусгавар болсон огноо:
            </Label>
            <Input placeholder="Дуусгавар болсон огноо оруулах" />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button onClick={onSubmit} className="w-full bg-violet-500" disabled>
            <CheckIcon />
            Бүтцийн өөрчлөлт дуусгах
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
