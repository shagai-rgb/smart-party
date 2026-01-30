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

const PlainRoute = [
  {
    path: '/organization',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/organization-list.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'БАЙГУУЛЛАГА :: Жагсаалт',
      icon: Building2Icon,
      module: 'organization'
    }
  },

  {
    path: '/organization/:id/sub-org',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/political-party/political-sub.page.tsx'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'САЛБАР БАЙГУУЛЛАГА',
      icon: Layers2Icon,
      module: 'organization'
    }
  },
  {
    path: '/organization/election/:id',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/election/election.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'БАЙГУУЛЛАГА',
      icon: LayoutDashboardIcon,
      module: 'organization'
    }
  },
  {
    path: '/organization/election/:id/sub',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/election/election-sub-page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'САЛБАР БАЙГУУЛЛАГА',
      icon: NetworkIcon,
      module: 'organization'
    }
  },
  {
    path: '/organization/national-audit/:id',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/national-audit/natiolnal-audit.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'БАЙГУУЛЛАГА',
      icon: LayoutDashboardIcon,
      module: 'organization'
    }
  },
  {
    path: '/organization/national-audit/:id/sub',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/national-audit/national-audit-sub.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'САЛБАР БАЙГУУЛЛАГА',
      icon: NetworkIcon,
      module: 'organization'
    }
  },
  {
    path: '/organization/private-audit/:id',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/organization/private-audit/private-audit.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'БАЙГУУЛЛАГА',
      icon: LayoutDashboardIcon,
      module: 'organization'
    }
  },
  {
    path: '/structure',

    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/structure/structure-org-list.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'БҮТЭЦ, ЗОХИОН БАЙГУУЛАЛТ',
      icon: NetworkIcon,
      module: 'structure'
    }
  },
  {
    path: '/structure/:id',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/structure/structure-org-detail.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Бүтцийн өөрчлөлт',
      icon: NetworkIcon,
      module: 'structure'
    }
  },
  {
    path: '/structure/:id/change/:structureId',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/structure/structure-detail.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'БАЙГУУЛЛАГА :: Бүтцийн өөрчлөлт',
      icon: NetworkIcon,
      module: 'structure'
    }
  },
  {
    path: '/structure/:id/unit',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/structure/unit/structure-unit.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Бүтцийн нэгж',
      icon: LayersIcon,
      module: 'structure'
    }
  },
  {
    path: '/structure/:id/position',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/structure/position/structure-position.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Албан тушаал',
      icon: BriefcaseBusinessIcon,
      module: 'structure'
    }
  },
  {
    path: '/human-resources',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/human-resources/human-resources.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'ХҮНИЙ НӨӨЦ',

      icon: UsersIcon,
      module: 'human-resources'
    }
  },
  {
    path: '/human-resources/:id',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/human-resources/hr-org-detail.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Бүтцийн өөрчлөлт',
      icon: UsersIcon,
      module: 'human-resources'
    }
  },
  {
    path: '/human-resources/:id/employee',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/human-resources/hr-employee-list/hr-employee.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'Албан хаагчдын жагсаалт',
      icon: UsersIcon,
      module: 'human-resources'
    }
  },
  {
    path: '/human-resources/:id/structure/:structureId',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/human-resources/hr-structure/hr-org-structure-detail.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'БАЙГУУЛЛАГА :: Бүтцийн өөрчлөлт ',
      icon: UsersIcon,
      module: 'structure'
    }
  },
  {
    path: '/human-resources/:id/structure/:structureId/position/:positionId',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/human-resources/hr-position/hr-position-detail.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'БАЙГУУЛЛАГА :: Бүтцийн өөрчлөлт :: Албан тушаал',
      icon: UsersIcon,
      module: 'structure'
    }
  },

  {
    path: '/user-management',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/user-management/user-management.page'
      )
      return {
        Component
      }
    },
    meta: {
      title: 'ХЭРЭГЛЭГЧИЙН УДИРДЛАГА',
      icon: UserCogIcon,
      module: 'user-management'
    }
  },

  {
    path: '/settings',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/permission-settings/groups.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'Бүлэг',

      icon: UsersIcon,
      module: 'permission-settings'
    }
  },
  {
    path: '/settings/permissions',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/permission-settings/permission.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'Зөвшөөрөл',
      icon: ShieldCheckIcon,
      module: 'permission-settings'
    }
  },
  {
    path: '/settings/users',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/permission-settings/users.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'Хэрэглэгчид',
      icon: UserCogIcon,
      module: 'permission-settings'
    }
  },
  {
    path: '/settings/module',
    lazy: async () => {
      const { default: Component } = await import(
        '@/pages/permission-settings/module.page'
      )
      return {
        Component
      }
    },

    meta: {
      title: 'Modules',
      icon: BoxesIcon,
      module: 'permission-settings'
    }
  }
] satisfies TRouteObject[]

export default PlainRoute
