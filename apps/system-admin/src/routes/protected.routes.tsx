import {
  BoxesIcon,
  BriefcaseBusinessIcon,
  Building2Icon,
  Layers2Icon,
  LayersIcon,
  LayoutDashboardIcon,
  NetworkIcon,
  ShieldCheckIcon,
  UserCogIcon,
  UsersIcon
} from 'lucide-react'

import { TRouteObject } from '@/shared/utils/router'

const ProtectedRoute = [
  {
    path: '/organization/:id',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/political-party/political-party.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'БАЙГУУЛЛАГА ',
      navTitle: '',
      icon: Building2Icon,
      module: 'organization'
    }
  }
] satisfies TRouteObject[]

export default ProtectedRoute
