import { createRouter, createWebHistory } from 'vue-router'
function path(path,name,component){
  return {
    path,name,component: () => import('@/views/'+component)
  }
}

const routes = [
    path('/','Home','HomeView.vue'),
    path('/about','about','AboutView.vue'),
    path('/profile','profile','ProfileView.vue'),
    path('/login','login','login/login.vue'),
    path('/register','register','login/register.vue'),
    
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
