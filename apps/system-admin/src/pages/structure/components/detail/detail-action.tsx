// import { Fragment, useState } from 'react'
import { EditIcon, MoreHorizontalIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const DetailAction = () => {
  //   const [open, setOpen] = useState<Record<'edit' | 'start' | 'end', boolean>>({
  //     edit: false,
  //     start: false,
  //     end: false
  //   })

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
          // onSelect={() => setOpen((prev) => ({ ...prev, edit: true }))}
          >
            <EditIcon className="text-blue-500" /> Хасах
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
