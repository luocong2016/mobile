/* vuex 插件 */
/// https://vuex.vuejs.org/zh/guide/plugins.html

const NAMESPACE = '@@loading'

function shouldEffect({type}, includes, excludes) {
  if (includes.length === 0 && excludes.length === 0) {
    return true
  }
  if (includes.length > 0) {
    return includes.indexOf(type) > -1
  }
  return excludes.length > 0 && excludes.indexOf(type) === -1
}

const createLoadingPlugin = ({namespace = NAMESPACE, includes = [], excludes = [], ...options} = {}) => store => {
  if (store.state[namespace]) {
    throw new Error(`createLoadingPlugin: ${namespace} exited in current store`)
  }

  /* 注册一个动态模块 */
  /// https://vuex.vuejs.org/zh/api/#registermodule
  store.registerModule(
    namespace,
    {
      namespaced: true,
      state: {
        global: false,
        effects: {}
      },
      mutations: {
        SHOW(state, {payload}) {
          state.global = true
          state.effects = {...state.effects, [payload]: true}
        },
        HIDE(state, {payload}) {
          state.global = false
          state.effects = {...state.effects, [payload]: false}
        }
      }
    },
    options
  )

  /* 订阅 store 的 action */
  /// https://vuex.vuejs.org/zh/api/#subscribeaction
  store.subscribeAction({
    /* vuex 3.1.0 */
    before: action => {
      console.log(`before action ${action.type}`)
      if (shouldEffect(action, includes, excludes)) {
        store.commit({type: namespace + '/SHOW', payload: action.type})
      }
    },
    after: action => {
      console.log(`after action ${action.type}`)
      if (shouldEffect(action, includes, excludes)) {
        store.commit({type: namespace + '/HIDE', payload: action.type})
      }
    }
  })
}

export default createLoadingPlugin
