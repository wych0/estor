export const isFormValid = err => {
  if (Object.keys(err).length > 0) return false
  return true
}

export function findInputErrors(errors, name) {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}