import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";
import Page4 from "../views/Page4.vue";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { displayName: '首页' }
  },
  {
    path: '/page5',
    name: 'Page5',
    component: Page4,
    meta: { displayName: '标注' }
  },
  {
    path: '/page4',
    name: 'Page4',
    component: Page4,
    meta: { displayName: '标注' }
  },
  {
    path: '/page1',
    name: 'Page1',
    component: Page1,
    meta: { displayName: '微信WELM api' }
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
    meta: { displayName: '悟道EVA2.0' }
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3,
    meta: { displayName: '盘古2.6M' }
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { displayName: '关于我们' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { displayName: '登陆页面' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
