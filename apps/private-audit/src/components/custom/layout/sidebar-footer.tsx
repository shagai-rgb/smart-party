import { CaretSortIcon, ExitIcon } from '@radix-ui/react-icons'
import { UserRound } from 'lucide-react'

import { dx } from '@/lib/dx'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useSidebar } from '@/components/ui/sidebar'

import { SidebarFooter, SidebarMenu, SidebarMenuItem } from '../../ui/sidebar'

export const CustomSidebarFooter = () => {
  const { state } = useSidebar()

  const isCollapsed = state === 'collapsed'
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="flex p-2 w-full h-10" variant="outline">
                <div className="flex shrink-0 items-center justify-center rounded-full bg-card">
                  <UserRound />
                </div>
                {!isCollapsed && (
                  <>
                    <div className="flex grow flex-col items-start text-start">
                      <span
                        className={dx(
                          'heading-compact-01',
                          'line-clamp-1 break-all uppercase ml-2'
                        )}
                      >
                        Б.Тэмүүжин
                      </span>
                    </div>
                    <CaretSortIcon className="shrink-0" />
                  </>
                )}
              </Button>
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
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
