import React, { useEffect, useState } from 'react'
import { getCoins } from '../functions/getCoinData'
import Grid from '../component/Dashboard/Grid'
import Header from '../component/common/header';
import Loader from '../component/common/loader';
import Button from '../component/common/button';
import Dashboard from './dashboard';
const WatchList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const coins = JSON.parse(localStorage.getItem('watchlist'))

    const getData = async () => {
        setLoading(true)
        const myCoin = await getCoins()
        if (coins) {
            setData(myCoin.filter((item) => coins.includes(item.id)))
        }
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (

        <div>
            <Header />
            {loading || !coins ? (
                <Loader />
            ):(
            <div style={{minHeight:'90vh'}}>
             {data ?.length ==0 || !coins ? (
                <div>
                  
                  <h1 style={{textAlign:'center' ,marginBottom : '2rem'}}>
                    No item in watchList
                  </h1>
                   <div style={{display: 'flex' , justifyContent:"center"}}>
                    <a href="/dashboard">
                    <Button text={"Dashboard"}></Button>
                    </a>
                   </div>
                </div>

             ):(
                <div className='grid-flex'>
                   {
                    data.map((item)=>{
                        return (
                            <Grid coin={item}/>
                        )
                    })
                   }
                </div>
             )
             }

            </div>
                 
                

        
                 
            )}


        </div>
    )
}

export default WatchList