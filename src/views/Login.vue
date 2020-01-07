<template>
    <div class="login-page-wrapper">
        <div style="background-color: #23c6c8;height: 50vh;text-align: center">
            <h1 style="color: #ffffff;display:inline-block;margin: 0 auto;padding-top: 50px">欢迎登录发动机远程健康监护系统</h1>
            <div>
                <img src="../assets/cqu-logo_nobg.jpg" alt="" style="width: 200px;height: 134px;padding-right: 20px">
                <img src="../assets/de_hongjiang_logo.png" alt="" style="width: 200px;height: 94px;padding-left: 20px">
            </div>
        </div>
        <div style="background-color: #f5f5f5;height: 50vh"></div>
        <div class="xu-login-container animated fadeInDown">
                <div class="xu-widget rounded">
                    <div style="text-align: center;padding-bottom: 20px">
                        <img src="../assets/login01.png" alt="" style="width: 70px;height:70px">
                    </div>
                    <hr>
                    <form style="padding: 5px 10px">
                        <div class="form-group">
                            <label for="username">请输入用户名：</label>
                            <input id="username" type="text" class="form-control" placeholder="用户名" v-model="username">
                        </div>
                        <div class="form-group">
                            <label for="password">请输入密码：</label>
                            <input id="password" type="password" class="form-control" placeholder="密码" v-model="password">
                        </div>
                        <button type="button" class="btn btn-block btn-info" @click="login">登录</button>
<!--                        <a href="#"><small>忘记密码？</small></a>-->
                    </form>
                </div>
            <hr>
            <div class="row">
                <div class="col-12 text-center">
                    <small class="text-muted">重庆大学微系统研究中心©2019</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {axiosInstLogin} from "@/service/login";
    import {XuAlert} from "@/components/CommonComponents/XuComponent/XuAlert/XuAlert";

    export default {
    name: "Login",
    data(){
      return {
        username:'',
        password:'',
        token:'',
        companyName:'',
      }
    },
    methods:{
      //1.点击登录按钮
      login:function () {
        if (this.username === '' || this.password === ''){
          XuAlert('账号或者密码不能为空','error');
        } else {
          axiosInstLogin.post('/login',{username:this.username,password:this.password})
            .then(res => {
              const {data:{code,message,data}} = res;
              // const {userInfo:{role,company}} = data;
              console.log(code,message,data);
              // console.log(role);
              if (code === 500){
                XuAlert('登录失败-'+message,'error')
              } else if (code === 200){
                const {userInfo:{role,company}} = data;
                // console.log(role);
                let menuList = [];
                role['menuList'].forEach(value => {
                  if (value['type']===1) {
                    menuList.push(value['name'])
                  }
                });
                this.$store.commit('addUsername',data['userInfo']['username']);
                this.$store.commit('addPassword',data['userInfo']['password']);
                this.$store.commit('addToken',data['token']);
                this.$store.commit('addRoleName',role['roleName']);
                this.$store.commit('addMenuList',menuList);
                this.$store.commit('addCompanyName',company['name']);
                this.$router.push('/device-monitor')
              }
            })
        }
      },

    }
  }
</script>

<style scoped>
    .login-page-wrapper {
        height: 100vh;
    }
    .xu-login-container{
        position: fixed;
        margin: 0 auto;
        padding: 20px;
        min-width: 350px;
        top: 25%;
        left: 38%;
        right: 38%;
    }

    .xu-widget{
        background-color: #ffffff;
        padding: 20px 20px;
    }
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translateY(-20px);
            -ms-transform: translateY(-20px);
            transform: translateY(-20px);
        }

        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    }

    .fadeInDown {
        -webkit-animation-name: fadeInDown;
        animation-name: fadeInDown;
    }

    .animated{
        animation-duration: 1s;
        animation-fill-mode: both;
    }

</style>