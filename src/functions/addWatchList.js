// import { json } from "react-router-dom"

import { toast } from "react-toastify"
export const addWatchList = (id) =>{
    let list
  const watchList = localStorage.getItem('watchlist')
    if(watchList == null){
        list=[]
    }else{
        list=JSON.parse(watchList)
    }
    list.push(id)
    localStorage.setItem('watchlist',JSON.stringify(list))
//    setAdded(true)
// console.log(id)
toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} - Added To The Watchlist!`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

}