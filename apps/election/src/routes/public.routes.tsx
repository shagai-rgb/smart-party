import { BoxesIcon } from 'lucide-react'

import { TRouteObject } from '@/shared/utils/router'

const PublicRoute = [
  {
    path: '/login',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/auth/login/login-page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Login'
    }
  },
  {
    path: '*',
    lazy: async () => {
      const { default: Component } = await import('@/pages/404')
      return {
        Component
      }
    },
    meta: {
      title: 'Not found'
    }
  }
] satisfies TRouteObject[]

export default PublicRoute
