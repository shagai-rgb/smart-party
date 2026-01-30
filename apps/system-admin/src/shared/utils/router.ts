import { type RouteObject, matchPath } from 'react-router-dom'

import { pageRoutes } from '@/routes/utils.route'

import type { TIcon } from '@/shared/utils/icon'

import { TModule } from '../contexts/module.context'

export type TMeta = {
  title?: string
  navTitle?: string
  description?: string
  icon?: TIcon
  module?: TModule
}

export type TRouteObject = Omit<RouteObject, 'path' | 'children'> & {
  path: string
  meta?: TMeta
  children?: TRouteObject[]
}

export const getRouteMeta = (path: string) => {
  return pageRoutes.find((r) => matchPath(r.path, path))?.meta
}
