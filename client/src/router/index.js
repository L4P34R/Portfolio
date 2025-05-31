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
    path: '/presentation',
    name: 'Présentation',
    component: HomePage,
  },
  {
    path: '/parcours',
    name: 'Parcours',
    component: ParcoursPage,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage,
  },
  {
    path: '/projets',
    name: 'Projets',
    component: ProjectsPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;