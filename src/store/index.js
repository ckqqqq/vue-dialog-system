import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    global_message:'你好w'
  },
  live_2d:{
    global_message:'你好a'
  },
  mutations: {
    login(state, value){
      state.username = value
    },
    logoff(state){
      state.username = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
