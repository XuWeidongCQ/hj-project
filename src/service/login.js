
import axios from 'axios'

//登录请求,这个接口不需要token
//旧的IP http://47.92.211.37:8080/beidou
let axiosInstLogin = axios.create({
  baseURL:'http://106.13.207.231:8080/beidou',
});

export {axiosInstLogin}


