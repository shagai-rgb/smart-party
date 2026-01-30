import { NavLink, useLocation, useParams } from 'react-router-dom'
import { matchPath } from 'react-router-dom'

import { dx } from '@/lib/dx'
import { cn } from '@/lib/utils'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'

import { NAV_ITEM_HEIGHT } from '@/shared/constants/layout'
import type { TMeta } from '@/shared/utils/router'

interface TProps {
  path: string
  meta?: TMeta
  symbol?: React.ReactNode
  collapsed?: boolean
}

export default function SideNavItem(props: TProps) {
  const { meta, path, symbol, collapsed } = props
  const { id } = useParams()
  const location = useLocation()

  const resolvedPath =
    path?.includes(':id') && id ? path.replace(':id', id) : path

  if (!meta) return null

  const checkIsActive = (defaultIsActive: boolean) => {
    if (path === '/structure/:id') {
      const changePathMatch = matchPath(
        '/structure/:id/change/:structureId',
        location.pathname
      )
      if (changePathMatch) {
        return true
      }
    }
    if (path === '/human-resources/:id') {
      const changePathMatch = matchPath(
        '/human-resources/:id/structure/:structureId',
        location.pathname
      )
      if (changePathMatch) {
        return true
      }
    }
    if (path === '/human-resources/:id') {
      const changePathMatch = matchPath(
        '/human-resources/:id/structure/:structureId/position/:positionId',
        location.pathname
      )
      if (changePathMatch) {
        return true
      }
    }
    return defaultIsActive
  }

  return (
    <NavLink end to={resolvedPath} style={{ height: NAV_ITEM_HEIGHT }}>
      {({ isActive }) => {
        const finalIsActive = checkIsActive(isActive)

        return (
          <Tooltip
            disableHoverableContent={finalIsActive}
            delayDuration={collapsed ? 300 : 1000}
          >
            <TooltipTrigger asChild>
              <div
                className={cn(
                  dx('body-compact-01'),
                  'group-hover:text-primary flex h-full w-full items-center gap-2 p-2 text-muted-foreground',
                  finalIsActive &&
                    'rounded-md border bg-background font-medium text-foreground',
                  collapsed && 'justify-center flex items-center'
                )}
              >
                {symbol && (
                  <div className={cn('shrink-0', collapsed ? 'w-4 ' : 'w-5')}>
                    {symbol}
                  </div>
                )}
                {!collapsed && <div className="line-clamp-1">{meta.title}</div>}
              </div>
            </TooltipTrigger>
            {(collapsed || meta.description) && (
              <TooltipContent side="right">
                {collapsed ? meta.title : meta.description}
              </TooltipContent>
            )}
          </Tooltip>
        )
      }}
    </NavLink>
  )
}
