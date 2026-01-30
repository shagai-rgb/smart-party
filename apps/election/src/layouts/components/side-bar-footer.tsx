import { CaretSortIcon, ExitIcon } from '@radix-ui/react-icons'
import { UserRound } from 'lucide-react'

import { dx } from '@/lib/dx'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { CONTENT_PADDING, SIDE_OPEN_W } from '@/shared/constants/layout'

interface SidebarFooterProps {
  collapsed?: boolean
}

export default function SidebarFooter({ collapsed }: SidebarFooterProps) {
  // const { signOut } = useAuth()
  // const handleSignout = () => {
  //   signOut()
  // }

  if (collapsed) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className="flex shrink-0 items-center justify-center rounded-lg border bg-background p-2 shadow-block"
          title="User menu"
        >
          <div className="flex  shrink-0 items-center justify-center  bg-card">
            <UserRound className="h-4 w-4" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          side="right"
          sideOffset={8}
          className="rounded-2xl"
        >
          <DropdownMenuGroup className="p-1">
            <div className="flex w-full items-center gap-2 p-1">
              <UserRound />
              <span
                className={dx(
                  'heading-compact-01',
                  'line-clamp-1 break-all uppercase'
                )}
              >
                System Admin
              </span>
            </div>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              variant="destructive"
              className="justify-between gap-2 rounded-lg"
            >
              Log Out
              <ExitIcon className="text-current" />
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex w-full shrink-0 items-center gap-2 rounded-2xl border bg-background p-2 shadow-block">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-card">
          <UserRound />
        </div>
        <div className="flex grow flex-col items-start text-start">
          <span
            className={dx(
              'heading-compact-01',
              'line-clamp-1 break-all uppercase'
            )}
          >
            System Admin
          </span>
        </div>
        <CaretSortIcon className="shrink-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="right"
        sideOffset={8}
        className="rounded-2xl"
        style={{ minWidth: SIDE_OPEN_W - CONTENT_PADDING }}
      >
        <DropdownMenuGroup className="p-1">
          <div className="flex w-full items-center gap-2 p-1">
            <UserRound />
            <span
              className={dx(
                'heading-compact-01',
                'line-clamp-1 break-all uppercase'
              )}
            >
              System Admin
            </span>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            className="justify-between gap-2 rounded-lg"
          >
            Log Out
            <ExitIcon className="text-current" />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
