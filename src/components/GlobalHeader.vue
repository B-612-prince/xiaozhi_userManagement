<template>
  <div id="global-header">
    <a-row :wrap = 'false'>
    <a-col flex="200px">
      <div class="title-bar">
        <img class='logo' src="@/assets/logo.svg" alt="logo" />
        <div class = 'title'>小知用户中心</div>
      </div>
    </a-col>
    <a-col flex="auto">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items"  @click = 'switchPage'/>
    </a-col>
    <a-col flex="200px">
      <div class="user-loginStatus">
        <div v-if="loginUserStore.loginUser.id">
          <span>{{ loginUserStore.loginUser.username ?? '无名' }}</span>
          <a-popconfirm
            title="请确认是否退出?"
            ok-text="是"
            cancel-text="否"
            @confirm="confirm"
            @cancel="cancel"
            
          >
            <a href="#" style="margin: 0 10px;">退出登录</a>
          </a-popconfirm>
        </div>
        <div v-else>
          <a-button type="primary" href="/user/login">登录</a-button>
          <a-button type="primary" href="/user/register" style = 'margin-left: 10px;'>注册</a-button>
        </div>
      </div>
    </a-col>
  </a-row>
    
    
    
  </div>
</template>
<script setup>
import { h, ref } from 'vue';
import { HomeOutlined, CrownOutlined } from '@ant-design/icons-vue';
import {useRouter} from 'vue-router';
import {getUserInfoAPI,userLogoutAPI} from '@/apis/user'
import {useLoginUserStore} from '@/stores/useLoginUserStore'
const router = useRouter();
const loginUserStore = useLoginUserStore()
const current = ref([]);
router.afterEach((to,from,failure)=>{
  current.value = [to.path]
})

/**
 * key:唯一标识（必填）
 * icon:图标
 * label:菜单栏标题
 * title:设置收缩时展示的悬浮标题
 * h:用于生成虚拟的dom节点
*/
const items = ref([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    //icon: () => h(AppstoreOutlined),
    label: '用户登录',
    title: '用户登录',
  },
  {
    key:'/user/register',
    label:'用户注册',
    title:'用户注册',
  },
  {
    key:'/admin/userManage',
    icon:()=>h(CrownOutlined),
    label:'用户管理',
    title:'用户管理',
  },
  {
    key:'/others',
    label: h(
      "a",
      {href:"https://github.com/B-612-prince",target:"_blank"},
      '小知'
    ),
    title:'小知不知道',
  }
]);

const switchPage=({key})=>{
  router.push({
    path:key,
  
  })
}
const confirm =()=>{
  loginUserStore.userLogout()
  router.push({
    path:'/'
  })
}
</script>

<style lang="scss" scoped>

.title-bar{
  display: flex;
  align-items: center;
  .logo{
    height:48px;
  }
  .title{
    color:balck;
    font-size: 18px;
    margin-left: 16px;
    font-weight: bold;
  }
}

</style>

