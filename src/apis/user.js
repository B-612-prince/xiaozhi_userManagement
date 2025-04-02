import myAxios from "@/utils/myAxios";

//用户注册
export const userRegisterAPI = async(params)=>{
  return await myAxios.request({
    url:'/api/user/register',
    method:'POST',
    data:params
  })
}

//用户登录
export const userLoginAPI = async(params)=>{
  return await myAxios.request({
    url:'/api/user/login',
    method:"POST",
    data:params
  })
}

//用户注销
export const userLogoutAPI = async(params)=>{
  return await myAxios.request({
    url:'/api/user/logout',
    method:"POST",
    data:params
  })
}

//获取用户信息

export const getUserInfoAPI = async()=>{
  return await myAxios.request({
    url:'/api/user/current',
    method:"GET"
  })
}

//根据用户名称搜索用户
export const searchUserAPI = async(username)=>{
  return await myAxios.request({
    url:'/api/user/search',
    method:"GET",
    params:{
      username
    }
  })
}

export const deleteUserAPI = async(id)=>{
  return await myAxios.request({
    url:'/api/user/delete',
    method:"POST",
    data:id,
    headers:{
      "Content-Type":'application/json',
    }
  })
}

