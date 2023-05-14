import React, { useEffect, useState } from 'react'
// import { addWatchList } from '../functions/addWatchList'
import { getCoins } from '../functions/getCoinData'
import { FilterData } from '../functions/filtesData'
import Grid from '../component/Dashboard/Grid'
import Loader from '../component/common/loader'
import Header from '../component/common/header';
const WatchList = () => {
    const [data, setData] = useState([])
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
       
       const getData = async () => {
        const myCoin = await getCoins()
        if (myCoin) {
            setData(myCoin)
            // setLoading(false)
        }
    }
    let list = localStorage.getItem('watchlist')
    list = JSON.parse(list)
    let watchListData = new Array(list)
    console.log(watchListData)
                
    const ac = async() =>{
        setLoading(true)
        let watchData = FilterData(data, list)
        if(watchData){
            setItem(watchData) 
            setLoading(false)
        }
  
    }

       
      useEffect(()=>{
        ac()
      },[watchListData])

    
        useEffect(() => {
           getData()
           },[])
    //  console.log(watchData)
    // console.log(item)
    // console.log(loading)

    return (

        <div>
            <Header />
            {loading ? "OOPS! no coin in your watchlist"
                :
                <div className='grid-flex'>

                    {item.map((it) => {
                        return (<Grid coin={it} />)
                    })
                    }

                </div>

            }


        </div>
    )
}

export default WatchList