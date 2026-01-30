import type { CSSProperties } from 'react'

export interface DataTableMetaOptions {
  isLoading?: boolean
  hideToolbar?: boolean
}

export type TFilterVariant = 'select' | 'multiselect' | 'text'

export const getWidth = (
  width: number,
  style?: CSSProperties
): CSSProperties => ({
  width: `${width}px`,
  ...style
})

export const pageSizes = [10, 20, 30, 40, 50]
