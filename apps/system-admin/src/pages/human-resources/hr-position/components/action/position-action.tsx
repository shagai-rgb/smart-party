import { useState } from 'react'

import { EditIcon, MoreHorizontalIcon, UserMinusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { TEmployee } from '@/shared/mock/employee.data'

import { PositionEditDialog } from './position-edit.dialog'
import { PosionRemoveDialog } from './position-remove.dialog'

interface TProps {
  employee: TEmployee
}

export const PositionAction = ({ employee }: TProps) => {
  const [open, setOpen] = useState<Record<'edit' | 'exemption', boolean>>({
    edit: false,
    exemption: false
  })

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-gray-100"
          >
            <MoreHorizontalIcon />
            <span className="sr-only">Цэс нээх</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Үйлдэл</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setOpen((prev) => ({ ...prev, edit: true }))}
            className="cursor-pointer"
          >
            <EditIcon className=" text-blue-600" />
            Албан тушаалын томилолт засах
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => setOpen((prev) => ({ ...prev, exemption: true }))}
          >
            <UserMinusIcon className="text-red-600" />
            Албан тушаалаас чөлөөлөх
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <PositionEditDialog
        open={open['edit']}
        onOpenChange={(value) => setOpen((prev) => ({ ...prev, edit: value }))}
        employee={employee}
      />
      <PosionRemoveDialog
        open={open['exemption']}
        onOpenChange={(value) =>
          setOpen((prev) => ({ ...prev, exemption: value }))
        }
        employee={employee}
      />
    </>
  )
}
