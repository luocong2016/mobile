import Cookies from 'js-cookie'
import settings from '@/settings'

export const TokenKey = settings.tokenKey
export const getToken = () => Cookies.get(TokenKey)
export const setToken = (token = null) => Cookies.set(TokenKey, token)
export const removeToken = () => Cookies.remove(TokenKey)
