import Jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
export default class Axios{

  static jsonp(options){
    return new Promise((resovle,reject) => {
      Jsonp(options.url,{
        param:'callback'
      },function(err,response){
        if(response.status === 'success'){
          resovle(response);
        }else{
          reject(response.message);
        }
      })
    })
  }

  //封装ajax请求，统一错误拦截
  static ajax(options){
    let loading;
    if(options.data && options.data.isShowLoading !== false){
      loading = document.getElementById("Loading");
      loading.style.display='block';
    }
    let baseApi = 'https://www.easy-mock.com/mock/5bd41a41d55d2a78f7e22dfe/example';
    return new Promise((resovle,reject) => {
      axios({
        url:options.url,
        method:'get',
        baseURL:baseApi,
        timeout:5000,
        params:(options.data && options.data.params) || ''
      }).then((response) => {
          if(options.data && options.data.isShowLoading !== false){
            loading = document.getElementById("Loading");
            loading.style.display='none';
          }
          if(response.status == '200'){
              if(response.data.success){
                resovle(response.data)
              }else{
                Modal.info({
                  title:'提示',
                  content:response.data.msg
                })
              }
          }else{
            reject(response.data)
          }
      })
    })
  }
  
}