export const normalize_array = (value: unknown) => {
  return value && Array.isArray(value) ? value : []
}
