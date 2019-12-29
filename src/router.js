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
      path: '/device-monitor',
      component: MainContent,
      children:[
        {
          path:'',
          name:'DeviceMonitorComp',
          component:() => import('./components/DeviceMonitor.vue')
        },
        {
          path:'/device-manage',
          name:'DeviceManageComp',
          component:() => import('./components/DeviceManage.vue')
        },
        {
          path:'/data-parse',
          component:() => import('./components/DataParse.vue')
        },
        {
          path:'/backend-manage',
          component: () => import('./components/BackendManage.vue')
        },
        {
          path:'/repair-center',
          component:() => import('./components/RepairCenter.vue')
        },
        {
          path:'/alarm-center',
          component:() => import('./components/AlarmCenter.vue')
        },
        {
          path:'/role-manage',
          component:() => import('./components/RoleManage.vue')
        },
        {
          path:'/account-manage',
          component:() => import('./components/AccountManage.vue')
        }
      ]
    }
  ]
})
