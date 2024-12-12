import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CommmonUtilities from '@/views/CommmonUtilities.vue'
import InputSearch from '@/views/InputSearch.vue'
// import LoginIn from '@/views/Login/LoginIn.vue'
// import SignUp from '@/views/Login/SignUp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      
      children: [
      {
        path: 'utils', // 这里不需要前导斜杠，因为是子路由
        component:CommmonUtilities,    
      },
      {
        path: 'input',
        component: InputSearch,
      },
      // {
      //     path: 'signup',
      //     components: {
      //       default: CommmonUtilities, // 如果需要可以保持 CommonUtilities
      //       LoginIn: SignUp, // 在 LoginIn 命名视图中显示 SignUp
      //     },
      //   },
      
    ],
    },
    
  ]
})

export default router
