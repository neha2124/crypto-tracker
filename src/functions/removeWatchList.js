import { toast } from "react-toastify"
export const removeList = (id)=>{
    if (window.confirm('Are you sure you want to remove this Coin ')){
        let watch = localStorage.getItem('watchlist')
        let arr =JSON.parse(watch)
        localStorage.setItem('watchlist',
        JSON.stringify(arr.filter((item)=> item != id))
        
        )
        toast.success(`${id.slice(0, 1).toUpperCase() + id.slice(1)} - Remove from The Watchlist!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
             
    
    }else{
        toast.error(`couldn't Remove from The Watchlist!`, {
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
}