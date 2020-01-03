import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../components/HomePage/HomePage'
import Collection from '../components/Collection/Collection'
import Recherches from '../components/Recherches/Recherches'
import Inspiration from '../components/Inspiration/Inspiration'
import Imprimes from '../components/Imprimes/Imprimes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/' || '/Accueil',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Recherches',
      name: 'Recherches',
      component: Recherches
    },
    {
      path: '/Collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/Inspiration',
      name: 'Inspiration',
      component: Inspiration
    },
    {
      path: '/Imprimes',
      name: 'Imprimes',
      component: Imprimes
    }
  ]
})
