import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../views/DefaultView.vue'
import MovieSearch from '../views/MovieSearch.vue'
import MovieInfo from '../views/MovieInfo.vue'
import WatchMovie from '../views/WatchMovie.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import ToS from '../views/ToS.vue'
import ErrorPage from '../views/ErrorPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultView
    },
    {
      path: '/search',
      name: 'search',
      component: MovieSearch
    },
    {
      path: '/info',
      name: 'info',
      component: MovieInfo
    },
    {
      path: '/watch',
      name: 'watch',
      component: WatchMovie
    },
    {
      path: '/policy',
      name: 'privacy policy',
      component: PrivacyPolicy
    },
    {
      path: '/tos',
      name: 'tos',
      component: ToS
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    }
  ]
})

export default router
