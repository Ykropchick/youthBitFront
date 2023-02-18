import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: true,
    token: '',
    serverUrl: '',
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.phone = localStorage.getItem('phone')
        state.isAuthenticated = true
      } else {
        state.token = ''
        state.phone = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token, phone) {
      state.token = token
      state.isAuthenticated = true
    },
    removeToken(state) {
      state.token = ''
      state.isAuthenticated = false
    },
  },
  actions: {
  },
  modules: {
  }
})
