import Vue from 'vue'

/* SSR */
export const isServer = Vue.prototype.$isServer

export const inBrowser = typeof window !== 'undefined'

/* system */
export const isAndorid = () => (isServer ? false : /android/.test(navigator.userAgent.toLowerCase()))
export const isIOS = () => (isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()))
