import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage/HomePage.vue'
import Collection from '../components/Collection/Collection.vue'
import Recherches from '../components/Recherches/Recherches.vue'
import Inspiration from '../components/Inspiration/Inspiration.vue'
import Imprimes from '../components/Imprimes/Imprimes.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      components: HomePage
    }, 
    {
      path: '/Recherches',
      name: 'Recherches',
      components: Recherches
    }, 
    {
      path: '/Collection',
      name: 'Collection',
      components: Collection
    }, 
    {
      path: '/Inspiration',
      name: 'Inspiration',
      components: Inspiration
    }, 
    {
      path: '/Imprimes',
      name: 'Imprimes',
      components: Imprimes
    }
  ]
})
