import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/Landing.vue'
import HomePage from '@/views/Accueil.vue'
import ParcoursPage from '@/views/Parcours.vue'
import ProjectsPage from '@/views/Projects.vue'
import AdminPage from '@/views/Admin.vue'

const routes = [
  {
    path : '/',
    name : 'Welcome',
    component : LandingPage,
  },
  {
    path: '/Présentation',
    name: 'Présentation',
    component: HomePage,
  },
  {
    path: '/Parcours',
    name: 'Parcours',
    component: ParcoursPage,
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: AdminPage,
  },
  {
    path: '/Projets',
    name: 'Projets',
    component: ProjectsPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;