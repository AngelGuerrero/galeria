import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acerca',
    name: 'Acerca',
    component: About
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    component: () => import('../views/NewImageForm.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
