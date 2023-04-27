import React, { useEffect, useState } from 'react'
// import { addWatchList } from '../functions/addWatchList'
import { getCoins } from '../functions/getCoinData'
import { FilterData } from '../functions/filtesData'
import Grid from '../component/Dashboard/Grid'
import { CircularProgress } from "@mui/material";
import Header from '../component/common/header';
const WatchList = () => {
    const [data, setData] = useState([])
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
   
       const getData = async () => {
        
        const myCoin = await getCoins()
        if (myCoin) {
            setData(myCoin)
            setLoading(false)
        }
    }
    let list = localStorage.getItem('watchlist')
    list = JSON.parse(list)

    
        useEffect(() => {
        
        let watchData = FilterData(data, list)
        setItem(watchData)
        getData()
        
        }, [])
    console.log(item)
   
    console.log(loading)
    //  console.log(watchData)

    return (

        <div>
            <Header />
            {loading ? <CircularProgress />
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