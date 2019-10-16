export const logout = () => {
  delete window.localStorage.token
  delete window.sessionStorage.token
}

export const isLoggedIn = () => {
  return window.localStorage.token || window.sessionStorage.token
}

export const decode = token => {
  if (!token) return false
  const data = token.split('.')[0]
  const decoded = decodeURIComponent(
    Array.prototype.map
      .call(
        window.atob(data.replace(/_/g, '/').replace(/-/g, '+')),
        c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      )
      .join('')
  )
  return JSON.parse(decoded)
}

export const login = (token, permanent) => {
  const prefferedBrain = { true: 'localStorage', false: 'sessionStorage' }[permanent]
  window[prefferedBrain].token = token
  return decode(token)
}

export const requireAuth = (_to, _from, next) => {
  if (isLoggedIn()) return next()
  next({
    path: '/login'
  })
}
