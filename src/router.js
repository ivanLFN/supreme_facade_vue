// vue router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import WhoWeArePage from './views/WhoWeArePage.vue'
import WhatWeDoPage from './views/WhatWeDoPage.vue'
import PortfolioPage from './views/PortfolioPage.vue'
import ContactPage from './views/ContactPage.vue'
import ServicesPage from './views/ServicesPage.vue'
import PrivacyPolicyPage from './views/PrivacyPolicyPage.vue'
import ConditionsPage from './views/ConditionsPage.vue'
import LoginPage from './views/LoginPage.vue'
import AdminPage from './views/AdminPage.vue'
import ResetPasswordPage from './views/ResetPasswordPage.vue'
import CRUDPage from './views/CRUDPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/who_we_are',
    name: 'WhoWeArePage',
    component: WhoWeArePage
  },
  {
    path: '/what_we_do/:showComponent?',
    name: 'WhatWeDoPage',
    component: WhatWeDoPage
  },
  {
    path: '/portfolio',
    name: 'PortfolioPage',
    component: PortfolioPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/privacy_policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
  {
    path: '/services/:showComponent?',
    name: 'ServicesPage',
    component: ServicesPage
  },
  {
    path: '/conditions',
    name: 'ConditionsPage',
    component: ConditionsPage
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordPage',
    component: ResetPasswordPage
  },
  {
    path: '/admin-crud',
    name: 'CRUDPage',
    component: CRUDPage,
    meta: {
      requiresAuth: true
    }
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const expirationTime = localStorage.getItem('expirationTime')
  const currentTime = new Date().getTime()

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && (!currentUser || currentTime > expirationTime)) {
    next('/login')
  } else {
    next()
  }
})

export default router
