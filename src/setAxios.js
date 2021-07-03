import axios from "axios"
import router from './router'
import store from './store'

//http 全局拦截
//token 要放在我们请求的header上面带回去给后端

export default function setAxios() {
  //请求拦截
  axios.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.state.token) {
      config.headers.token = store.state.token
    }
    return config;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });

  //每次请求返回的，都是先经过这个拦截器先
  axios.interceptors.response.use(response => {
    // Do something before response is sent
    if (response.status == 200) {
      const data = response.data
      //登录过期 重新登录
      if (data.code == -1) {
        //清空vuex Store 和 LocalStorage的token
        store.commit('setToken', '')
        localStorage.removeItem('token')
        //跳转到login页面
        router.replace({
          path: '/login'
        })
      }
      return data
    }
    return response;
  }, error => {
    // Do something with response error
    return Promise.reject(error);
  });
}