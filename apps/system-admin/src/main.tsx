import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'
import { APP_ROUTES } from './routes/app.routes'
import { errorHandler } from './shared/utils/fetch'

const router = createBrowserRouter(APP_ROUTES, {
  basename: '/system-admin/'
})

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError: errorHandler
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
