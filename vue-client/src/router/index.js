import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      {
        path: 'items',
        name: 'ItemListView',
        component: () => import(/* webpackChunkName: "about" */ '../views/ItemListView.vue')
      },
      {
        path: 'items/:itemId',
        name: 'ItemDetailView',
        component: () => import(/* webpackChunkName: "about" */ '../views/ItemDetailView.vue'),
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
