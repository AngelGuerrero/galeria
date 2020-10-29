import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Access from '../views/Access.vue'

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
  },
  {
    path: '/ingresar',
    name: 'Ingresar',
    component: Access,
    props: { view: 'login' }
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Access,
    props: { view: 'sign-up' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
