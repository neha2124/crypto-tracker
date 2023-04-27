// import { json } from "react-router-dom"

export const addWatchList = (id) =>{
    let list = []
  const watchList = localStorage.getItem('watchlist')
    if(watchList == null){
        list=[]
    }else{
        list=JSON.parse(watchList)
    }
    list.push(id)
    localStorage.setItem('watchlist',JSON.stringify(list))
   console.log(list)
    return list

}