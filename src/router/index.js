import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import UserLoginPage from '@/pages/user/userLoginPage.vue'
import UserRegisterPage from '@/pages/user/userRegisterPage.vue'
import UserManagePage from '@/pages/admin/userManagePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/user/login',
      name: 'userLogin',
      component:UserLoginPage,
    },
    {
      path: '/user/register',
      name: 'userRegister',
      component:UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: 'adminUserManage',
      component:UserManagePage,
    },
  ],
})

export default router
