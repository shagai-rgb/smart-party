import React, { createContext, useContext, useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

export type TModule =
  | 'organization'
  | 'permission-settings'
  | 'structure'
  | 'human-resources'
  | 'user-management'

export const modulePaths: Record<TModule, string[]> = {
  organization: ['/organization'],
  structure: ['/structure'],
  'human-resources': ['/human-resources'],
  'user-management': ['/user-management'],
  'permission-settings': ['/settings']
}

export const MODULE_COLORS: Record<TModule, string> = {
  organization: '#4b0196',
  structure: '#4b0196',
  'human-resources': '#d90073',
  'user-management': '#007773',
  'permission-settings': '#007773'
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
    ) ?? 'organization'
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
