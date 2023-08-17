import { createRouter, createWebHistory } from 'vue-router'

function path(path,name,component){
  return {
    path,name,component: () => import('@/views/'+component)
  }
}

const routes = [
    path('/','Home','HomeView.vue'),
    path('/about','about','AboutView.vue'),
    path('/login','login','login/login.vue'),
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
