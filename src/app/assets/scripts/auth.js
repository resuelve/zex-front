import Auth from '@resuelve/auth'
const auth = new Auth()

export const decode = token => {
  if (!token) return false
  return auth.parseToken(token)
}

export const logout = () => {
  delete window.localStorage.token
  delete window.sessionStorage.token
}

export const isLoggedIn = () => {
  return window.localStorage.token || window.sessionStorage.token
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
