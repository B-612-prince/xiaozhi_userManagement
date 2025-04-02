import axios from 'axios';

const myAxios = axios.create({
  baseURL:'http://localhost:8080',
  timeout:10000,
  withCredentials:true,
});
myAxios.interceptors.request.use(
  function(config){
    return config;
  }
)

myAxios.interceptors.response.use(
  function(response){
    const {data} = response
    // console.log(response)
    // console.log(data)
    //如果用户未登录
    if(data.code===40100){
      if(
        !response.request.responseURL.includes("user/current")&&
        !window.location.pathname.includes("user/login")){
          window.location.href = `/user/login?redirect=${window.location.href}`
        }
    }
    return response;
  },function(err){
    return Promise.reject(err);
  }
)
export default myAxios;