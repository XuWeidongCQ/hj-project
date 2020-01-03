
import axios from 'axios'

//登录请求,这个接口不需要token
let axiosInstLogin = axios.create({
  baseURL:'http://172.20.29.59:8080/beidou',
});

export {axiosInstLogin}


