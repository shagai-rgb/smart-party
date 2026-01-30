import { Fragment, useState } from 'react'

import {
  CalendarCheck2Icon,
  CalendarX2Icon,
  EditIcon,
  MoreHorizontalIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { TStructureItem } from '@/shared/mock/organization-data'

import { StructureEditDialog } from './structure-edit.dialog'
import { StructureEndDialog } from './structure-end.dialog'
import { StructureStartDialog } from './structure-start.dialog'

interface TProps {
  structure: TStructureItem
}

export const StructureAction = ({ structure }: TProps) => {
  const [open, setOpen] = useState<Record<'edit' | 'start' | 'end', boolean>>({
    edit: false,
    start: false,
    end: false
  })

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="hover:bg-transparent">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Үйлдэл</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={() => setOpen((prev) => ({ ...prev, edit: true }))}
          >
            <EditIcon className="text-blue-500" /> Засах
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setOpen((prev) => ({ ...prev, start: true }))}
          >
            <CalendarCheck2Icon className="text-green-500" /> Эхлүүлэх
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setOpen((prev) => ({ ...prev, end: true }))}
          >
            <CalendarX2Icon className="text-violet-500" /> Дуусгах
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <StructureEditDialog
        open={open.edit}
        onOpenChange={(value) => setOpen((prev) => ({ ...prev, edit: value }))}
        structure={structure}
      />
      <StructureStartDialog
        open={open.start}
        onOpenChange={(value) => setOpen((prev) => ({ ...prev, start: value }))}
        structure={structure}
      />
      <StructureEndDialog
        open={open.end}
        onOpenChange={(value) => setOpen((prev) => ({ ...prev, end: value }))}
        structure={structure}
      />
    </>
  )
}
