import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenderView from '../views/GenderView.vue'
import AdviceView from '../views/AdviceView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gender',
    name: 'gender',
    component: GenderView
  },
  {
    path: '/advice',
    name: 'advice',
    component: AdviceView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
