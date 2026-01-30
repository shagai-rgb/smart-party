import React, { createContext, useContext, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

export type TModule =
  | 'registration'
  | 'activity-report'
  | 'financial-report'
  | 'state-funding'
  | 'indirect-support'
  | 'membership-fee'
  | 'election-participation'
  | 'donation'
  | 'gender-equality'

export const modulePaths: Record<TModule, string[]> = {
  registration: ['/registration'],
  'activity-report': ['/activity-report'],
  'financial-report': ['/financial-report'],
  'state-funding': ['/state-funding'],
  'indirect-support': ['/indirect-support'],
  'membership-fee': ['/membership-fee'],
  'election-participation': ['/election-participation'],
  donation: ['/donation'],
  'gender-equality': ['/gender-equality']
}

export const MODULE_COLORS: Record<TModule, string> = {
  registration: '#4b0196',
  'activity-report': '#4b0196',
  'financial-report': '#d90073',
  'state-funding': '#007773',
  'indirect-support': '#007773',
  'membership-fee': '#007773',
  'election-participation': '#d90073',
  donation: '#4b0196',
  'gender-equality': '#4b0196'
}

const detectModuleFromPath = (pathname: string): TModule => {
  const sortedModules = (Object.keys(modulePaths) as TModule[]).sort((a, b) => {
    const maxLengthA = Math.max(...modulePaths[a].map((p) => p.length))
    const maxLengthB = Math.max(...modulePaths[b].map((p) => p.length))
    return maxLengthB - maxLengthA
  })

  return (
    sortedModules.find((key) =>
      modulePaths[key].some((p) => pathname.startsWith(p))
    ) ?? 'registration'
  )
}

const ModuleContext = createContext<{
  module: TModule
  setModule: (m: TModule) => void
} | null>(null)

export const ModuleProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [module, setModule] = useState<TModule>(() =>
    detectModuleFromPath(location.pathname)
  )

  useEffect(() => {
    setModule(detectModuleFromPath(location.pathname))
  }, [location.pathname])

  return (
    <ModuleContext.Provider value={{ module, setModule }}>
      {children}
    </ModuleContext.Provider>
  )
}

export const useModule = () => {
  const context = useContext(ModuleContext)
  if (!context) {
    throw new Error('useModule must be used within ModuleProvider')
  }
  return context
}
