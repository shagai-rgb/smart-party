import { registrationData } from '@/data/nav-registration-item'
import { LandmarkIcon } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { CustomSidebarFooter } from '@/components/custom/layout/sidebar-footer'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'

import { useLayout } from '@/shared/contexts/layout-provider'

import { sidebarData } from '../../data/nav-item'
import { NavGroup } from './nav-group'

export const AppSidebar = () => {
  const { collapsible, variant } = useLayout()
  const pathname = useLocation().pathname

  return (
    <Sidebar collapsible={collapsible} variant={variant}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="border cursor-pointer hover:bg-transparent"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground ">
                <LandmarkIcon />
              </div>
              <div className="grid flex-1">
                <span className="text-[16px]">Smart Party</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {pathname === '/registration'
          ? registrationData.navGroups.map((props) => (
              <NavGroup key={props.title} {...props} />
            ))
          : sidebarData.navGroups.map((props) => (
              <NavGroup key={props.title} {...props} />
            ))}
      </SidebarContent>
      <CustomSidebarFooter />
      <SidebarRail />
    </Sidebar>
  )
}
