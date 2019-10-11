import { login as userLogin, signup as userSignup } from 'Utils/api/user'

export const logout = () => {
  delete window.localStorage.token
  delete window.sessionStorage.token
}

export const isLoggedIn = () => {
  return window.localStorage.token || window.sessionStorage.token
}

export const login = ({ email, password }, permanent) => {
  // userLogin(email, password)
  const token = 'hola'
  const prefferedBrain = { true: 'localStorage', false: 'sessionStorage' }[permanent]
  window[prefferedBrain].token = token
}

export const signup = ({ email, password }) => {
  // userSignup(email, password)
}

export const requireAuth = (to, _from, next) => {
  if (isLoggedIn()) return next()
  next({
    path: '/login'
  })
}
