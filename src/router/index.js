import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import Home from '@/Layout/Layout.vue';
import Login from '@/views/Login/Login.vue';

const routes = [
    {
        name: "home",
        path: '/',
        component: Home,
        meta: {
            title: "Asosiy sahifa",
        }
    },
    {
        name: "login",
        path: '/login',
        component: Login,
        meta: {
            title: "Kirish sahifa",
        }
    },

];



const router = createRouter({
    history: createWebHistory(),
    routes,
  });



  export default router;