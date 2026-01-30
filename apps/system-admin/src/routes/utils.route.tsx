import { matchPath } from 'react-router-dom'

import { TRouteObject } from '@/shared/utils/router'

import ProtectedRoute from './protected.routes'
import PublicRoutes from './public.routes'

export const pageRoutes: TRouteObject[] = [...ProtectedRoute, ...PublicRoutes]

const moduleMenuPaths = {
  'organization-election': [
    '/organization/election/:id',
    '/organization/election/:id/sub'
  ],
  'organization-national-audit': [
    '/organization/national-audit/:id',
    '/organization/national-audit/:id/sub'
  ],
  'organization-private-audit': [
    '/organization/private-audit/:id',
    '/organization/private-audit/:id/sub'
  ],
  organization: ['/organization/:id', '/organization/:id/sub-org'],
  structure: [
    '/structure/:id',
    '/structure/:id/unit',
    '/structure/:id/position'
  ],
  'human-resources': ['/human-resources/:id', '/human-resources/:id/employee'],
  'permission-settings': [
    '/settings',
    '/settings/permissions',
    '/settings/users',
    '/settings/module'
  ]
}

const allMenuPaths = Object.values(moduleMenuPaths).flat()

export const menuRoutes = ProtectedRoute.filter((route) =>
  allMenuPaths.some((path) => matchPath(path, route.path))
)

export const getMenuRoutes = (pathname: string) => {
  if (pathname.startsWith('/organization/election/')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths['organization-election'].some((path) =>
        matchPath(path, route.path)
      )
    )
  }

  if (pathname.startsWith('/organization/national-audit/')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths['organization-national-audit'].some((path) =>
        matchPath(path, route.path)
      )
    )
  }
  if (pathname.startsWith('/organization/private-audit/')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths['organization-private-audit'].some((path) =>
        matchPath(path, route.path)
      )
    )
  }

  if (pathname.startsWith('/organization/')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths.organization.some((path) => matchPath(path, route.path))
    )
  }

  if (pathname.startsWith('/structure/')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths.structure.some((path) => matchPath(path, route.path))
    )
  }
  if (pathname.startsWith('/human-resources/')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths['human-resources'].some((path) =>
        matchPath(path, route.path)
      )
    )
  }

  if (pathname.startsWith('/settings')) {
    return ProtectedRoute.filter((route) =>
      moduleMenuPaths['permission-settings'].some((path) =>
        matchPath(path, route.path)
      )
    )
  }

  return []
}

export const getRouteMeta = (path: string) => {
  return pageRoutes.find((r) => matchPath(r.path, path))?.meta
}
