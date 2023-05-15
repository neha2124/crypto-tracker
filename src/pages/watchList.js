import React, { useEffect, useState } from 'react'
// import { addWatchList } from '../functions/addWatchList'
import { getCoins } from '../functions/getCoinData'
import { filterData } from '../functions/filtesData'
import Grid from '../component/Dashboard/Grid'
import Loader from '../component/common/loader'
import Header from '../component/common/header';
const WatchList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const coins = JSON.parse(localStorage.getItem('watchList'))
       
       const getData = async () => {
        setLoading(true)
        const myCoin = await getCoins()
        if (coins) {
            setData(myCoin.filter((item) => coins.includes(item.id)))
            
        }
        setLoading(false)
    }
    // console.log(watchListData)
                

       

    
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

                    {data.map((item) => {
                        return (<Grid coin={item} />)
                    })
                    }

                </div>

            }


        </div>
    )
}

export default WatchList