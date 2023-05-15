export const abcd = (item)=>{
    const watchList = localStorage.getItem('watchlist')
    if(watchList){
        let arr = new Array(JSON.parse(watchList))
        if(arr.includes(item)){
            return true
        }else{
            return false
        }
    }
    return false
}