import { capitalize_first_letter } from './string'

export const FILESIZE_UNITS = ['B', 'KB', 'MB', 'GB', 'TB'] as const
export type TUnit = (typeof FILESIZE_UNITS)[number]
export const UNIT_SIZE_MAP = {
  B: 1,
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
  TB: 1024 * 1024 * 1024 * 1024
} as Record<TUnit, number>

export const byte_to_MB = (bytes: number, raw: boolean = false) => {
  const MB = bytes / UNIT_SIZE_MAP['MB']
  return raw ? MB : `${MB.toFixed(2)} MB`
}

export const to_bytes = (size: number, unit: TUnit) =>
  size * UNIT_SIZE_MAP[unit]

export const to_readable_filesize = (size: number, decimal = 2) => {
  const k = 1024
  const i = Math.floor(Math.log(size) / Math.log(k))

  return `${parseFloat((size / Math.pow(k, i)).toFixed(decimal))} ${FILESIZE_UNITS[i]}`
}

export const get_file_key = (file: File) =>
  `${file.name}_${file.size}_${file.lastModified}`

export const to_readable_extensions = (
  accept: {
    [key: string]: readonly string[]
  },
  options: {
    display?: 'long' | 'short' | 'auto'
    type_separator?: string
    extension_separator?: string
  } = {}
): string => {
  const {
    display = 'auto',
    type_separator = ', ',
    extension_separator = ' '
  } = options
  const entries = Object.entries(accept)

  const short = entries
    .map(
      ([type, extensions]) =>
        `${capitalize_first_letter(type.replace('/*', ''))} up to ${extensions.length}`
    )
    .join(type_separator)
    .concat(' formats')

  const long = entries
    .map(([type, extensions]) => {
      return `${capitalize_first_letter(type.replace('/*', ''))} ${extensions.join(extension_separator)}`
    })
    .join(type_separator)

  if (display === 'long') return long
  if (display === 'short') return short

  return entries.length > 1 ||
    entries.some(([, extentions]) => extentions.length > 3)
    ? short
    : long
}
