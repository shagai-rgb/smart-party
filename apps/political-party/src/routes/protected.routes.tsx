import {
  ClipboardList,
  FileText,
  Gift,
  Landmark,
  LayoutDashboardIcon,
  NetworkIcon,
  Scale,
  Users,
  Vote,
  Wallet
} from 'lucide-react'

import { TRouteObject } from '@/shared/utils/router'

const ProtectedRoute = [
  {
    path: '/',
    lazy: async () => {
      const { default: Component } = await import('@/pages/home/home-page')
      return {
        Component
      }
    },

    meta: {
      title: 'УТНТХХ',
      description: 'Desc',
      icon: LayoutDashboardIcon
    }
  },
  {
    path: '/registration',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/registration/registration.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Улс төрийн намын бүртгэл',
      icon: FileText,
      module: 'registration'
    }
  },
  {
    path: '/financial-report',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/financial-report/financial-report.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Улс төрийн намын санхүүгийн тайлан',
      icon: Wallet,
      module: 'financial-report'
    }
  },
  {
    path: '/activity-report',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/activity-report/activity-report.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Улс төрийн намын үйл ажиллагааны товч тайлан',
      icon: ClipboardList,
      module: 'activity-report'
    }
  },
  {
    path: '/state-funding',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/state-funding/state-funding.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Төрийн санхүүжилт',
      icon: Landmark,
      module: 'state-funding'
    }
  },
  {
    path: '/indirect-support',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/indirect-support/indirect-support.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Төрөөс үзүүлэх шууд бус дэмжлэг',
      icon: NetworkIcon,
      module: 'indirect-support'
    }
  },
  {
    path: '/membership-fee',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/membership-fee/membership-fee.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Намын гишүүний татвар',
      icon: Users,
      module: 'membership-fee'
    }
  },
  {
    path: '/donation',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/donation/donation.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Намын хандив',
      icon: Gift,
      module: 'donation'
    }
  },
  {
    path: '/gender-equality',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/gender-equality/gender-equality.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Жендэрийн эрх тэгш байдлын тайлан',
      icon: Scale,
      module: 'gender-equality'
    }
  },
  {
    path: '/election-participation',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/election-participation/election-participation.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Сонгуулийн оролцоо',
      icon: Vote,
      module: 'election-participation'
    }
  }
] satisfies TRouteObject[]

export default ProtectedRoute
