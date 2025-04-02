import router from '@/router/index'
import { useLoginUserStore } from './stores/useLoginUserStore'
import { message } from 'ant-design-vue'

router.beforeEach(async (to, from, next) => {
  const loginUserStore = useLoginUserStore()
  const loginUser = loginUserStore.loginUser
  const toUrl = to.fullPath
  if(toUrl.startsWith('/admin')){
    if(!loginUser.id||loginUser.userRole!==1)
    {
      message.error('请检查是否登录或权限是否足够');
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
  }else
    next();
})