<template>
  <div id="user-login-page">
    <h2 class="title">用户登录</h2>
    <a-form
      style="max-width: 480px;margin:0 auto;"
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      label-align="left"
      autocomplete="off"
      @finish="handleSubmit"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="账号："
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号', trigger:'blur'}]"
      >
        <a-input v-model:value="formState.userAccount" placeholder="请先输入账号"/>
      </a-form-item>

      <a-form-item
        label="密码："
        name="userPassword"
        :rules="[{ required: true, message: '请输入密码', trigger:'blur'},{min:6, message:'密码长度不能少于6位'}]"
      >
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码"/>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>

import { reactive } from 'vue';
import {userLoginAPI} from '@/apis/user'
import {useLoginUserStore} from '@/stores/useLoginUserStore.js'
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const userLoginStore = useLoginUserStore()
const router = useRouter()
const formState = reactive({
  userAccount: '',
  userPassword: '',
});


const handleSubmit = async (values) => {
  console.log(values)
  const res = await userLoginAPI(values)
  console.log('点击登录后',res)
  if(res.data.code===0 && res.data.data){//用户登录成功
    //将当前用户登录信息保存useLoginUserStore中
    userLoginStore.fetchLoginUser()
    //提示信息
    message.success('登陆成功')
    //跳转至首页
    router.push({
      path:'/',
      replace:true//阻止页面回退
    })
  }
};
const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};
</script>
<style lang="scss" scoped>
#user-login-page {
  .title{
    font-weight:bold ;
    text-align: center;
    margin-bottom:16px;
  }
}
</style>