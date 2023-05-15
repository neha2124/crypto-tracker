export const removeList = (id)=>{
    if (window.confirm('Are you sure you want to remove this Coin ')){
        let watch = localStorage.getItem('watchList')
        let arr = new Array (JSON.parse(watch))
        localStorage.setItem('watchlist',
        JSON.stringify(arr.filter((item)=> item != id))
        
        )
                 
    
    }
}