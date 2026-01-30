import { TSidebarData } from '@/data/types'
import { LayoutDashboard, MessageSquare, Scale, Settings } from 'lucide-react'

export const sidebarData: TSidebarData = {
  navGroups: [
    {
      title: 'Үндсэн цэс',
      items: [
        {
          title: 'Дашбоард',
          icon: LayoutDashboard,
          items: [
            { title: 'Үндсэн нүүр', url: '/' },
            { title: 'Дашбоард', url: '/dashboard/main' },
            { title: 'Төлөвлөгөө', url: '/dashboard/plan' },
            { title: 'Тайлан', url: '/dashboard/report' },
            { title: 'Үнэлгээ', url: '/dashboard/evaluation' },
            { title: 'Мэргэшлийн түвшин', url: '/dashboard/level' }
          ]
        },
        {
          title: 'Эрх зүйн орчин',
          icon: Scale,
          items: [
            { title: 'Хууль', url: '/legal/law' },
            { title: 'Журам', url: '/legal/regulation' },
            { title: 'Аргачлал', url: '/legal/methodology' }
          ]
        },
        {
          title: 'Экспертийн зөвлөгөө',
          icon: MessageSquare,
          items: [
            {
              title: 'Мэргэжил, арга зүйн зөвлөгөө',
              url: '/expert/consultation'
            },
            { title: 'Байгууллага', url: '/expert/organization' },
            { title: 'Зохион байгуулалтын нэгж', url: '/expert/unit' },
            { title: 'Төрийн албан хаагч', url: '/expert/employee' },
            { title: 'Мэргэшлийн түвшин', url: '/expert/level' }
          ]
        },
        {
          title: 'Системийн тохиргоо',
          icon: Settings,
          items: [
            { title: 'Тохиргоо №1.', url: '/settings/config-1' },
            { title: 'Тохиргоо №2.', url: '/settings/config-2' },
            { title: 'Тохиргоо №3.', url: '/settings/config-3' },
            { title: 'Тохиргоо №4.', url: '/settings/config-4' }
          ]
        }
      ]
    }
  ]
}
