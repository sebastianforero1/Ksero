import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Plans from './views/Plans.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/planes',
      name: 'Plans',
      component: Plans
    },
    {
      path: '/contacto',
      name: 'Contact',
      component: Contact
    }
  ]
})

export default router