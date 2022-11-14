import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import formCreate from '@form-create/element-ui'
import FcDesigner from '@form-create/designer'
import axios from 'axios'
 

// axios.defaults.baseURL = 'http://127.0.0.1:5001/';
// window.axios = axios
// Vue.prototype.$axios=axios //定义为全局
const app=createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(formCreate)
app.use(FcDesigner)
app.mount('#app')
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && store.state.username === '') next({ name: 'Login' })
  else next()
})
