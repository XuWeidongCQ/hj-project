import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import MainContent from "@/views/MainContent";

Vue.use(Router);

const routes = [
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
];
//添加导航守卫
routes[1]['children'].forEach(ele => {
  ele['beforeEnter'] = (to,from,next) => {
    if (sessionStorage.getItem('token') === null){
      //未登录情况，session中没有token
      console.log('没有token');
      // console.log(sessionStorage.getItem('token'));
      next('/')
    } else {
      // console.log('有token');
      // console.log(sessionStorage.getItem('token'));
      //session中有token
      next()
    }
  }
});

const router = new Router({
  routes: routes
});

export default router