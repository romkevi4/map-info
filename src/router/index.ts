import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TableView from '../views/TableView.vue'
import MapView from '../views/MapView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'table',
    component: TableView
  },
  {
    path: '/:id',
    name: 'mapId',
    component: MapView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
