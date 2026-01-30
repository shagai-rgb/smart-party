import { LayoutDashboardIcon } from 'lucide-react'

import { TRouteObject } from '@/shared/utils/router'

const PlainRoute = [
  // {
  //   path: '/',
  //   lazy: async () => {
  //     const { default: Component } = await import('@/pages/home/home-page')
  //     return {
  //       Component
  //     }
  //   },
  //   meta: {
  //     title: 'УТНБ',
  //     description: 'Desc',
  //     icon: LayoutDashboardIcon
  //   }
  // }
] satisfies TRouteObject[]

export default PlainRoute
