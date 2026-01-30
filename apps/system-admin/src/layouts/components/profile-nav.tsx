'use client'

import { useState } from 'react'

import { ChevronDownIcon, LogOutIcon, UserIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export const Profile = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="h-[40px] w-full border-b flex items-center bg-background">
      <div className="flex items-center gap-1.5">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-[16px] gap-2 hover:bg-transparent"
            >
              Б.Тэмүүжин
              <ChevronDownIcon
                className={`transition-transform ${open ? 'rotate-180' : ''}`}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserIcon />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOutIcon />
              Системээс гарах
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
