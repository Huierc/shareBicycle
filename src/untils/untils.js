export default {
  formateDate(time){
    let date = new Date(time);
    let Month,Day;
    if(date.getMonth() < 9){
      Month = '0'+(date.getMonth()+1)
    }else{
      Month = date.getMonth()+1
    }
    if(date.getDate() < 10){
      Day = '0'+date.getDate()
    }else{
      Day = date.getDate()
      
    }
    return date.getFullYear()+'-'+Month+'-'+Day+'  '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
  }
}