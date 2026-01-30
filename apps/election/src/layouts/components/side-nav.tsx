import { TRouteObject } from '@/shared/utils/router'

import SideNavItem from './side-nav-item'

interface TProps {
  collapsed: boolean
  routes: TRouteObject[]
}

export default function SideNav({ collapsed, routes }: TProps) {
  return (
    <nav className="flex flex-col gap-2">
      <ul className="flex flex-col gap-1">
        {routes.map((r) => (
          <SideNavItem
            key={r.path}
            path={r.path}
            meta={r.meta}
            symbol={r.meta?.icon ? <r.meta.icon /> : null}
            collapsed={collapsed}
          />
        ))}
      </ul>
    </nav>
  )
}
