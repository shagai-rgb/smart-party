import { Outlet, useLocation } from 'react-router-dom'

import { ConfigDrawer } from '@/layouts/components/config-drawer'
import { ModuleMenu } from '@/layouts/components/module-dropdown'

import { ThemeSwitch } from '@/components/mirage/theme-changer'
import { ScrollArea } from '@/components/ui/scroll-area'

import { AppSidebar } from './components/app-sidebar'
import { Header } from './components/header'

export default function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      <AppSidebar />
      <div className="flex flex-1">
        <ScrollArea className="h-full w-full">
          <Header fixed className="border-b">
            <p className="text-sm">СОНГУУЛИЙН ЕРӨНХИЙ СИСТЕМ</p>
            <div className="ms-auto flex items-center gap-4">
              <ModuleMenu />
              <ThemeSwitch />
              <ConfigDrawer />
            </div>
          </Header>
          <Outlet />
        </ScrollArea>
      </div>
    </div>
  )
}
