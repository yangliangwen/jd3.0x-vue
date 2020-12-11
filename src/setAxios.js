import axios from 'axios'
import store from './store'
import router from './router'
//http 全局拦截 一系列操作
//token要放在我们请求的headers上面带回去给后端

export default function setAxios(){
  axios.interceptors.request.use(
      config=>{
          if(store.state.token){
            config.headers.token = encodeURIComponent(store.state.token)
          }
          return config
      }
  )
  //每次有返回数据的请求  都会进过这个响应拦截器
  axios.interceptors.response.use(
    response=>{
       if(response.status==200){
           const data = response.data
           if(data.code==-1){
               //1 .登陆过期  需要重新登陆
               //2. 清空vuex的token,清空localStorage
             store.commit('setToken','')
             localStorage.removeItem('token')
             //跳转到login页面
             router.replace({
                 path:'/login'
             })
           }
           return data
       }
       return response
     
    }
)
}