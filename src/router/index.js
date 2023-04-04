import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/StarshipsList.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.state.logged) {
        store.commit('toggleLoginModal')
      } else {
        next()
      }
    }
  },
  {
    path: '/starships/:id',
    name: 'starship',
    component: () => import('../views/StarshipDetail.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
