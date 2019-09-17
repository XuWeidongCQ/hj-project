<template>
    <div class="main-wrapper">
        <nav class="navbar-default navbar-static-side">
            <ul class="nav">
                <li class="nav-header">
                    <img src="../assets/hongjiang_logo.png" alt="" style="width: 100px;height: 100px;border-radius: 50%">
                </li>
                <li class="active"><router-link tag="a" to="/main"><span><span class="fa fa-bullseye"></span>实时监控</span></router-link></li>
                <li><router-link tag="a" to="/sbgl"><span><span class="fa fa-table"></span>设备管理</span></router-link></li>
                <li><router-link tag="a" to="/sjjx"><span><span class="fa fa-cogs"></span>数据解析</span></router-link></li>
                <li class="nav-footer"><router-link to="/"><span><span class="fa fa-sign-out"></span>退出</span></router-link></li>
            </ul>
        </nav>
        <div id="page-wrapper" class="gray-bg">
            <div class="login-duration-wrapper text-right">
                <span><span class="fa fa-clock-o"></span>  登录时间：2019-09-07 17:19</span>
                <span>时长：44秒</span>
                <span><span class="fa fa-user-circle-o"></span>  用户名</span>
            </div>
            <router-view></router-view>

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
    mounted(){
      this.menuStyle()
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
    .nav {
        list-style: none;
        display: block;
    }
    #page-wrapper{
        margin: 0 0 0 220px;
        padding: 0 15px;
        position: relative !important;
    }
    .gray-bg{
        background-color: #f3f3f4;
    }
    .main-footer{
        padding: 10px 20px;
        background-color: white;
        width: 100%;
    }
    .nav-header{
        padding: 33px 50px 33px 25px;
        text-align: center;
    }
    .nav>li{
        position: relative;
        display: block;
    }
    .nav>li>a{
        color:white;
        font-weight: 400;
        position: relative;
        display: block;
        padding: 14px 20px 14px 25px;
        text-decoration: none;
        font-size: 18px;
    }
    .nav>li>a:hover{
        background-color: black;
    }
    .nav>li>a span{
        margin-right: 10px;
    }
    .nav-footer{
        margin-top: 20px;
    }
    .login-duration-wrapper{
        margin-left: -15px;
        margin-right: -15px;
        background-color: #ededed;
        padding:10px 15px 10px 15px;
        font-size: 18px;
        font-weight: 100;
        border-bottom: 1px solid #D9DEE4;
    }
    .login-duration-wrapper>span {
        margin-left: 40px;
    }
    .active {
        background-color: black;
    }
</style>