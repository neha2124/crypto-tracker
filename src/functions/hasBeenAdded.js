export const hasBeenAdded = (item)=>{
    const watchList = localStorage.getItem('watchlist')
    if(watchList){
        let arr = JSON.parse(watchList)
        if(arr.includes(item)){
            return true
        }else{
            return false
        }
    }
    return false
}