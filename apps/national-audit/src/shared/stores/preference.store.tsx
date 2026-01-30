import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type PreferenceStore = {
  layouts: {
    sidebar_open: boolean
    sidebar_collapsed: boolean
  }
  organization_tab: string
  handlers: {
    sidebar_toggle: () => void
    sidebar_collapse_toggle: () => void
    set_organization_tab: (tab: string) => void
  }
}

export const usePreference = create<PreferenceStore>()(
  persist(
    immer((set) => ({
      layouts: {
        sidebar_open: true,
        sidebar_collapsed: false
      },
      organization_tab: 'political-party',
      handlers: {
        sidebar_toggle: () => {
          set((state) => {
            state.layouts.sidebar_open = !state.layouts.sidebar_open
          })
        },
        sidebar_collapse_toggle: () => {
          set((state) => {
            state.layouts.sidebar_collapsed = !state.layouts.sidebar_collapsed
          })
        },
        set_organization_tab: (tab: string) => {
          set((state) => {
            state.organization_tab = tab
          })
        }
      }
    })),
    {
      name: 'preference',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['handlers'].includes(key))
        ),
      version: 0
    }
  )
)
