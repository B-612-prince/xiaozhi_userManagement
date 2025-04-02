import { defineStore } from "pinia";
import { getUserInfoAPI, userLogoutAPI } from "@/apis/user";
import {ref} from 'vue'

export const useLoginUserStore = defineStore('loginUser',()=>{
  const loginUser = ref({
    username:'未登录'
  })

  //远程获取用户信息
  async function fetchLoginUser(){
    const res =  await getUserInfoAPI();
    console.log(res)
    if(res.data.code===0 && res.data.data){
      loginUser.value = res.data.data;
    }
  }
  function setLoginUser(newLoginUser){
    loginUser.value = newLoginUser;
  }
  //用户退出登录
  async function userLogout(){
    const res =  await userLogoutAPI();
    console.log(res)
    if(res.data.code===0 && res.data.data){
      loginUser.value = {username:'未登录'};
    }
  }
  return{
    loginUser,
    fetchLoginUser,
    setLoginUser,
    userLogout
  }

})