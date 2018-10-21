import Jsonp from 'jsonp'
export default class Axios{
  static jsonp(options){
    return new Promise((resovle,reject) => {
      Jsonp(options.url,{
        param:'callback'
      },function(err,response){
        if(response.status == 'success'){
          resovle(response);
        }else{
          reject(response.message);
        }
      })
    })
  }
}