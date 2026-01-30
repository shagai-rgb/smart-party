// UTILS
import { Suspense, lazy } from 'react'

import { SidebarIcon } from 'lucide-react'
import { useLocation } from 'react-router-dom'

import { dx } from '@/lib/dx'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { HEADER_HEIGHT } from '@/shared/constants/layout'
import { MODULE_COLORS, useModule } from '@/shared/contexts/module.context'
import { useMeta } from '@/shared/stores/meta.store'
import { usePreference } from '@/shared/stores/preference.store'

const MenuDropDown = lazy(() => import('@/components/custom/menu-dropdown'))

export default function StatusBar() {
  const meta = useMeta((s) => s.meta)
  const { module } = useModule()
  const moduleBg = MODULE_COLORS[module]
  const sidebar_open = usePreference((s) => s.layouts.sidebar_open)
  const { sidebar_collapse_toggle } = usePreference((s) => s.handlers)
  const location = useLocation()
  if (location.pathname === '/') return null

  const hideButton =
    location.pathname === '/' ||
    location.pathname === '/organization' ||
    location.pathname === '/structure' ||
    location.pathname === '/human-resources' ||
    location.pathname === '/user-management'

  return (
    <header
      className={`col-span-12 flex shrink-0 items-center justify-between gap-2 border-b px-3 xl:px-6  }`}
      style={{ height: HEADER_HEIGHT, background: moduleBg }}
    >
      <div className="flex items-center gap-2 ">
        {!hideButton && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={sidebar_collapse_toggle}
                variant="outline"
                size="icon"
              >
                <SidebarIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {sidebar_open ? 'Close Sidebar' : 'Open Sidebar'}
            </TooltipContent>
          </Tooltip>
        )}

        <div className="flex items-center gap-1.5  text-white">
          {meta.icon && (
            <h1 className={dx('heading-compact-02')}>
              <meta.icon className="size-5" strokeWidth={2} />
            </h1>
          )}
          {meta.title && (
            <h1 className={dx('heading-compact-02')}>{meta.title}</h1>
          )}
          {/* {meta.description && (
            <span className={dx('label-01', 'text-muted-foreground')}>
              {meta.description}
            </span>
          )} */}
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Suspense>
          <MenuDropDown />
        </Suspense>
      </div>
    </header>
  )
}
