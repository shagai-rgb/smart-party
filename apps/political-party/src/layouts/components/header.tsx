import { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

import ProtectedRoute from '@/routes/protected.routes'

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean
  ref?: React.Ref<HTMLElement>
}

export function Header({ className, fixed, children, ...props }: HeaderProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setOffset(document.body.scrollTop || document.documentElement.scrollTop)
    }

    document.addEventListener('scroll', onScroll, { passive: true })

    return () => document.removeEventListener('scroll', onScroll)
  }, [])
  const location = useLocation()
  // const isHomePage = location.pathname === '/'
  const isAppLayout = ProtectedRoute.some((route) => {
    const pathPattern = route.path?.replace(/:\w+/g, '[^/]+') || ''
    const regex = new RegExp(`^${pathPattern}$`)
    return regex.test(location.pathname)
  })

  return (
    <header
      className={cn(
        'z-50 h-14',
        fixed && 'header-fixed peer/header sticky top-0 w-[inherit]',
        offset > 10 && fixed ? 'shadow' : 'shadow-none',
        'bg-background',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'relative flex h-full items-center gap-3 p-4 sm:gap-4',
          offset > 10 &&
            fixed &&
            'after:absolute after:inset-0 after:-z-10 after:bg-background/20 after:backdrop-blur-lg'
        )}
      >
        {isAppLayout && (
          <>
            <SidebarTrigger variant="outline" className="max-md:scale-125" />
            <Separator orientation="vertical" className="h-6" />
          </>
        )}

        {children}
      </div>
    </header>
  )
}
