<template>
  <div id="user-manage-page">
    <a-input-search
      style="width: 400px;margin-bottom:10px;"
      v-model:value="searchValue"
      placeholder="请输入要搜索的用户信息"
      enter-button
      @search="onSearch"
    />
    <a-table :columns="columns" :data-source="data">
      <template #bodyCell="{ column, record }">
        <template v-if="column.dataIndex === 'avatarUrl'">
          <img :src="record.avatarUrl" alt="avatar" width="50" height="50" />
        </template>
        <template v-else-if="column.dataIndex === 'userRole'">
          <span v-if="record.userRole === 1">管理员</span>
          <span v-else>普通用户</span>
        </template>
        <template v-else-if="column.dataIndex === 'createTime'">
          {{ dayjs(record.createTime).format('YYYY-MM-DD HH:mm:ss') }}
        </template>
        <template v-else-if="column.dataIndex === 'action'">
          <div v-if="record.userRole===0">
            <a-button  danger :size="size" @click = 'deleteUser(record.id)'>删除用户</a-button>
            <a-button :size="size" style="margin-left: 8px;">设为管理员</a-button>
          </div>
          <div v-else>
            <a-button  danger :size="size" @click="deleteUser(record.id)">删除管理员</a-button>
          </div>
          
        </template>
      </template>
    </a-table>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import {searchUserAPI,deleteUserAPI} from '@/apis/user'
import { message } from 'ant-design-vue'
import dayjs from 'dayjs'
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: '账号',
    dataIndex: 'userAccount',
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
  },
  {
    title: '性别',
    dataIndex: 'gender',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '用户角色',
    dataIndex: 'userRole',
  },
  {
    title: '操作',
    dataIndex: 'action',
  },
]
const data = ref([])
const fetchUsers= async (username='')=>{
  const res = await searchUserAPI(username)
  if(res.data.data){
    data.value = res.data.data
  }else{
    message.error('获取数据失败')
  }
}
fetchUsers()

const searchValue = ref('')
const onSearch = ()=>{
  fetchUsers(searchValue.value)
}
const deleteUser = async (id)=>{
  const res = await deleteUserAPI(id)
  if(res.data.code === 0){
    message.success('删除成功')
    fetchUsers()
  }else{
    message.error('删除失败')
  }
}
</script>