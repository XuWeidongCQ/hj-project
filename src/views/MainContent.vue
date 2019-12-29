<template>
    <div class="main-wrapper">
        <nav class="navbar-default navbar-static-side">
            <ul class="x-nav">
                <li class="nav-header">
                    <img src="../assets/hongjiang_logo.png" alt="" style="width: 150px">
                </li>
                <li>
                    <router-link tag="a" to="/device-monitor" active-class="active" exact>
                        <span><span class="fa fa-bullseye"/>实时监控</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/device-manage" active-class="active" exact>
                        <span><span class="fa fa-table"/>设备管理</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/repair-center" active-class="active" exact>
                        <span><span class="fa fa-briefcase"/>维修中心</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/alarm-center" active-class="active" exact>
                        <span><span class="fa fa-bell"/>报警中心</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/data-parse" active-class="active" exact>
                        <span><span class="fa fa-cogs"/>数据解析</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/backend-manage" active-class="active" exact>
                        <span><span class="fa fa-address-book-o"/>客户管理</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/role-manage" active-class="active" exact>
                        <span><span class="fa fa-users"/>角色管理</span>
                    </router-link>
                </li>
                <li>
                    <router-link tag="a" to="/account-manage" active-class="active" exact>
                        <span><span class="fa fa-id-card"/>账号管理</span>
                    </router-link>
                </li>
                <li class="nav-footer"><router-link to="/"><span><span class="fa fa-sign-out"/>退出</span></router-link></li>
            </ul>
        </nav>
        <div id="page-wrapper" class="gray-bg">
            <div class="login-duration-wrapper text-right">
                <span><span class="fa fa-clock-o"/> 登录时间：{{ loginTime }}</span>
                <span><span class="fa fa-user-circle-o"/> 用户名</span>
            </div>

            <!--不同菜单栏的入口-->
            <router-view/>

            <div class="row">
                <div class="main-footer">
                    <small class="text-muted">重庆大学微系统研究中心©2019</small>
                    <small class="float-right text-muted">Version 1.0</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "MainContent",
    methods:{
      menuStyle:function () {
        let li = document.getElementsByTagName('li');
        let len = li.length;
        for (let i=1;i<len-1;i++){
          li[i].onclick = function () {
            for (let j=1;j<len-1;j++){
              li[j].removeAttribute('class')
            }
            li[i].className = 'active';
          }
        }
      }
    },
    data:function(){
      return {
        loginTime:this.extendJS.getDate().YYYYMMDDHHMMSS
      }
    },
    mounted(){
      // this.menuStyle()
    }
  }
</script>

<style scoped>
    .main-wrapper {
        background-color: #2f4050;
        width: 100%;
        overflow-x: hidden;
    }
    .navbar-default{
        background-color: transparent;
        border-color: #2f4050;
    }
    .navbar-static-side{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 220px;
        z-index: 10;
    }
    .x-nav {
        list-style: none;
        display: block;
    }
    #page-wrapper{
        margin: 0 0 0 220px;
        padding: 0 15px 35px 15px;
        position: relative !important;
        outline: 1px solid red;
        min-height: 100vh;
    }
    .gray-bg{
        background-color: #e9e9e9;
    }
    .main-footer{
        padding: 10px 20px;
        background-color: white;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .nav-header{
        padding: 33px 0;
        text-align: center;
    }
    .x-nav>li{
        position: relative;
        display: block;
    }
    .x-nav>li>a{
        color:white;
        font-weight: 400;
        position: relative;
        display: block;
        padding: 10px 20px;
        text-decoration: none;
        font-size: 18px;
    }
    .x-nav>li>a:hover{
        background-color: black;
    }
    .x-nav>li>a span{
        margin-right: 10px;
    }
    .nav-footer{
        margin-top: 20px;
    }
    .login-duration-wrapper{
        margin-left: -15px;
        margin-right: -15px;
        background-color: #ffffff;
        padding: 5px 15px;
        font-size: 14px;
        font-weight: 100;
        outline: 1px solid red;
    }
    .login-duration-wrapper>span {
        margin-left: 40px;
    }
    .active {
        background-color: black;
    }
</style>