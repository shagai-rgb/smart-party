import { Suspense, lazy } from 'react'

import { LazyMotion } from 'motion/react'
import { Outlet, useLocation } from 'react-router-dom'

import { SidebarProvider } from './components/ui/sidebar'
import { cn } from './lib/utils'
import { DirectionProvider } from './shared/contexts/direction-provider'
import { LayoutProvider } from './shared/contexts/layout-provider'
import { ModuleProvider } from './shared/contexts/module.context'
import { ThemeProvider } from './shared/contexts/theme.context'
import { getCookie } from './shared/lib/cookies'

const loadFeatures = () =>
  import('@/shared/constants/motion').then((m) => m.default)

const TooltipProvider = lazy(() =>
  import('@/components/ui/tooltip').then(({ TooltipProvider }) => ({
    default: TooltipProvider
  }))
)

const Toaster = lazy(() =>
  import('@/components/ui/sonner').then(({ Toaster }) => ({ default: Toaster }))
)

const Meta = lazy(() =>
  import('@/shared/stores/meta.store').then(({ Meta }) => ({ default: Meta }))
)

export default function App() {
  const defaultOpen = getCookie('sidebar_state') !== 'false'
  const location = useLocation()

  // Home page байвал px-2 үзүүлэхгүй
  const isHome = location.pathname === '/'

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <LayoutProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <DirectionProvider>
            <ModuleProvider>
              <Suspense fallback={<div>Loading...</div>}>
                <TooltipProvider delayDuration={300}>
                  <LazyMotion features={loadFeatures}>
                    <div className={cn('h-screen w-screen', !isHome && 'px-2')}>
                      <Outlet />
                    </div>
                  </LazyMotion>
                </TooltipProvider>
              </Suspense>

              <Suspense>
                <Toaster richColors />
              </Suspense>

              <Suspense>
                <Meta />
              </Suspense>
            </ModuleProvider>
          </DirectionProvider>
        </SidebarProvider>
      </LayoutProvider>
    </ThemeProvider>
  )
}
