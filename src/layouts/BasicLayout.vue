<template>
  <div id="basic-layout">
    <a-layout>
      <!-- 头部导航栏 -->
      <a-layout-header class = 'header'>
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class = 'content'>
        <!-- 路由出口 -->
         <router-view />
      </a-layout-content>
      <a-layout-footer class = 'footer'>
        <a href="#">
          小知用户管理中心   by   小知小知
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style lang="scss" scoped>
#basic-layout {
  .header{
    background-color: #fff;
    margin-bottom: 16px;
    color: unset;
    padding-inline:20px;
  }
  .content{
    padding:20px;
    margin-bottom:20px
  }
  .footer{
    background-color: #efefef;
    text-align: center;
    position:fixed;
    bottom:0;
    left:0;
    right: 0;
  }
  
  
} 
</style>