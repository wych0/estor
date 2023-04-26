export const isFormValid = err => {
    if (Object.keys(err).length > 0) return false
    return true
  }