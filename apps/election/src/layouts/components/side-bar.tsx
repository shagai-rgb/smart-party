import { Suspense, lazy, useMemo } from 'react'

import { AnimatePresence, m } from 'motion/react'
import { useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

import { ScrollArea } from '@/components/ui/scroll-area'

import { getMenuRoutes } from '@/routes/utils.route'

import { SIDE_OPEN_W } from '@/shared/constants/layout'
import { usePreference } from '@/shared/stores/preference.store'

const SIDE_COLLAPSED_W = 60

const SideNav = lazy(() => import('./side-nav'))
const SidebarFooter = lazy(() => import('./side-bar-footer'))

export default function Sidebar() {
  const sidebar_open = usePreference((s) => s.layouts.sidebar_open)
  const sidebar_collapsed = usePreference((s) => s.layouts.sidebar_collapsed)
  const location = useLocation()

  const currentMenuRoutes = useMemo(
    () => getMenuRoutes(location.pathname),
    [location.pathname]
  )
  if (currentMenuRoutes.length === 0) {
    return null
  }

  return (
    <AnimatePresence initial={false}>
      {sidebar_open && (
        <m.aside
          key="sidebar"
          className={cn(
            'relative flex h-screen shrink-0 grow flex-col py-2 pl-2 ',
            sidebar_collapsed ? 'items-center' : 'w-full'
          )}
          initial={{ maxWidth: sidebar_collapsed ? SIDE_COLLAPSED_W : 0 }}
          animate={{
            maxWidth: sidebar_collapsed ? SIDE_COLLAPSED_W : SIDE_OPEN_W
          }}
          exit={{
            maxWidth: 0
          }}
          transition={{ duration: 0.15 }}
        >
          <Suspense>
            {/* <SidebarHeader collapsed={sidebar_collapsed} /> */}
          </Suspense>

          <ScrollArea
            className={cn(
              'grow py-2 xl:py-4',
              sidebar_collapsed ? 'w-full' : 'w-full'
            )}
          >
            <Suspense>
              <SideNav
                collapsed={sidebar_collapsed}
                routes={currentMenuRoutes}
              />
            </Suspense>
          </ScrollArea>

          <Suspense>
            <SidebarFooter collapsed={sidebar_collapsed} />
          </Suspense>
        </m.aside>
      )}
    </AnimatePresence>
  )
}
