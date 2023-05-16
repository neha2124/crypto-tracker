
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { coinObject } from '../functions/coonvertObject'
import Header from '../component/common/header'
import { getCoinData } from '../functions/getCoin'
import List from '../component/Dashboard/List'
import CoinInfo from '../component/coin/coinInfo'
import Loader from '../component/common/loader'
import { getPrice } from '../functions/getPrice'
import LineChart from '../component/coin/LineChart'
// import {convertDate} from '../functions/converDate'
import BasicSelect from '../component/coin/selectPrice'
import { settingChartData } from '../functions/settingChartData'
import ToggleButtons from '../component/coin/togglePrice'
// import axios from 'axios'

const Coinpage = () => {
    const { id } = useParams()
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    const [days, setDays] = useState(30)
    const [chartData, setChartData] = useState({})
    const [priceType, setPriceType] = useState('prices');

   
    // const [days, setDays] = useState('30');

  
    // console.log(data.name)

    useEffect(() => {
        if (id) {
            getData()
        }
    }, [id])
    const getData = async () => {
        const myData = await getCoinData(id)
        //   console.log(myData)
        if (myData) {
            coinObject(setData, myData);
            const price = await getPrice(id, days,priceType)
            
            if (price) {
                settingChartData(setChartData,price)
                setLoading(false)
            }

            
        }

    }
    const handleDaysChange = async (event) => {
        setLoading(true)
        setDays(event.target.value);
        const price = await getPrice(id, event.target.value,priceType)
            
            if (price) {
                settingChartData(setChartData,price)
                setLoading(false)
            }
            

      };
      const handlePriceType = async (event, newType) => {
        setLoading(true)
        setPriceType(newType)
        
         const price = await getPrice(id, days ,newType)
           
            if (price) {
                settingChartData(setChartData,price)
                setLoading(false)
            }
            

      };
      

    return (
        <div>
            <Header />

            {loading ? (
                <Loader />
            ) : (
                <>
                <div className="wrapper">
                    <List coin={data} />
                </div>
                    <div className='wrapper'>
                       <BasicSelect days={days} handleChange={handleDaysChange} mkdt={true}/>
                       <ToggleButtons priceType={priceType} handlePriceType={handlePriceType} />
                        <LineChart chartData={chartData} price1={priceType} />
                    </div>
                    <div className="wrapper">
                        <CoinInfo heading={data.name} desc={data.desc} />
                    </div>
                    </>
            )}
        </div>
    )
}

export default Coinpage