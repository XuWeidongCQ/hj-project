import Vue from 'vue'
import router from './router'
import App from './App.vue'

//第三方插件
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import VueToastr from "vue-toastr";

//自己写的插件
import '@/plugins/XuCSS.css'
import XuCSS from "@/plugins/XuCSS"
import '@/plugins/shareCSS.css'
import commonJS from "@/plugins/commonJS"
import Http from "@/service/Http";







Vue.config.productionTip = false;
Vue.prototype.extendJS = commonJS;
Vue.prototype.$Http = Http;
// Vue.use(VueToastr,{});


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
