import App from '@/App'
import type { RouteObject } from 'react-router-dom'

import AppLayout from '@/layouts/app.layout'
import HydrateFallback from '@/layouts/fallback.layout'
import PlainLayout from '@/layouts/plain.laylout'

import PlainRoute from './plain.routes'
// import ProtectedLayout from '@/layouts/protected.layout'

import ProtectedRoute from './protected.routes'
// Routes
import PublicRoute from './public.routes'

export const APP_ROUTES: RouteObject[] = [
  {
    element: <App />,
    HydrateFallback,
    children: [
      {
        children: [
          {
            element: <PlainLayout />,
            children: PlainRoute
          }
        ]
      },
      {
        children: [
          {
            element: <AppLayout />,
            children: ProtectedRoute
          }
        ]
      },
      {
        children: PublicRoute
      }
    ]
  }
]
