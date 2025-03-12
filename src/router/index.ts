import { createRouter, createWebHistory } from 'vue-router'

import GeneratorView from '@/views/GeneratorView.vue'
import PreviewView from '@/views/PreviewView.vue'
// import TemplateView from "@/views/TemplateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GeneratorView,
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewView,
    },
    // {
    //   path: '/tmp',
    //   name: 'template',
    //   component: TemplateView,
    // },
  ],
})

export default router
