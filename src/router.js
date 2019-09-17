import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import MainContent from "@/views/MainContent";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      component: MainContent,
      children:[
        {
          path:'',
          name:'SSJK',
          component:function () {
            return import('./components/SSJK.vue')
          }
        },
        {
          path:'/sbgl',
          name:'SBGL',
          component:function () {
            return import('./components/SBGL.vue')
          }
        },
        {
          path:'/sjjx',
          component:function () {
            return import('./components/SJJX.vue')
          }
        }
      ]
    }
  ]
})
