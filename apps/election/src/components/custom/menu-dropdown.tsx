import { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

export default function MenuDropDown() {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 shadow-none"
        >
          <ChevronDownIcon
            className={`transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className=" "></DropdownMenuContent>
    </DropdownMenu>
  )
}
