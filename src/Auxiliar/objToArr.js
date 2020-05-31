
export default   function objToArray (obj){
    let resultArr = []
    Object.keys(obj).forEach(key=>{
      let element = {...obj[key],id:key}
      resultArr=[...resultArr,element]
    })
    return resultArr
  }
