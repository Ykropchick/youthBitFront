import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: true,
    token: '',
    serverUrl: 'https://youth-bit-back-i33qb480p-ykropchick.vercel.app',
    IsHr: true,
    firstname : '',
    lastname: '',
  },
  getters: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
        state.IsHr = localStorage.getItem('IsHr')
        state.firstname = localStorage.getItem('firstname')
        state.lastname = localStorage.getItem('lastname')
      } else {
        state.token = ''
        state.isAuthenticated = false
        state.IsHr = ''
        state.firstname = ''
        state.lastname = ''
      }
    },
    setToken(state, token, ) {
      state.token = token
      state.isAuthenticated = true
    },
    setUser(state, IsHr, firstname, lastname){
      state.IsHr = IsHr
      state.firstname = firstname
      state.lastname = lastname
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
