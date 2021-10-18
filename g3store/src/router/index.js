import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  },
  {
    path: '/gestion-transporte',
    name: 'GestionTransporte',
    component: () => import(/* webpackChunkName: "GestionTransporte" */ '../views/GestionTransporte.vue')
  },
  {
    path: '/gestion-peajes',
    name: 'GestionPeajes',
    component: () => import(/* webpackChunkName: "GestionPeajes" */ '../views/GestionPeajes.vue')
  },
  {
    path: '/software-factory',
    name: 'SoftwareFactory',
    component: () => import(/* webpackChunkName: "SoftwareFactory" */ '../views/SoftwareFactory.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  // {
  //   path: '/:category',
  //   component: () => import(/* webpackChunkName: "Category" */ '../views/Category.vue')
  // },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "NoPageFound" */ '@/pages/NoPageFound'),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;