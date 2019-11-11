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
          name:'DeviceMonitor',
          component:function () {
            return import('./components/DeviceMonitor.vue')
          }
        },
        {
          path:'/sbgl',
          name:'DeviceManage',
          component:function () {
            return import('./components/DeviceManage.vue')
          }
        },
        {
          path:'/sjjx',
          component:function () {
            return import('./components/DataParse.vue')
          }
        }
      ]
    }
  ]
})
