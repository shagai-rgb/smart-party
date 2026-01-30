import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'
import { create } from 'zustand'

import { getRouteMeta } from '@/shared/utils/router'
import type { TMeta } from '@/shared/utils/router'

type MetaStore = {
  meta: TMeta
  handlers: {
    set_meta: (meta: TMeta) => void
    reset: () => void
  }
}

const IMeta: TMeta = {
  title: import.meta.env.VITE_APP_TITLE
}

export const useMeta = create<MetaStore>()((set) => ({
  meta: IMeta,
  handlers: {
    set_meta: (meta) => set({ meta }),
    reset: () => set({ meta: IMeta })
  }
}))

export function Meta() {
  const { pathname } = useLocation()
  const meta = useMeta((s) => s.meta)
  const { set_meta, reset } = useMeta((s) => s.handlers)

  useEffect(() => {
    const meta = getRouteMeta(pathname)

    if (!meta) {
      reset()
      return
    }
    set_meta(meta)
  }, [pathname, set_meta, reset])

  return (
    <Fragment>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
    </Fragment>
  )
}
