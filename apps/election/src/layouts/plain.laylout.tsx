import { Outlet } from 'react-router-dom'

import { ConfigDrawer } from '@/layouts/components/config-drawer'
import { ModuleMenu } from '@/layouts/components/module-dropdown'

import { ThemeSwitch } from '@/components/mirage/theme-changer'
import { ScrollArea } from '@/components/ui/scroll-area'

import { Header } from './components/header'
import { Profile } from './components/profile-nav'

export default function PlainLayout() {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      <div className="flex flex-1">
        <ScrollArea className="h-full w-full">
          <Header fixed className="border-b">
            <p className="text-sm">УЛС ТӨРИЙН НАМЫН ТУХАЙ ХУУЛИЙН ХЭРЭГЖИЛТ</p>
            <div className="ms-auto flex items-center gap-4">
              <Profile />
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
