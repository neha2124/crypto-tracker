import React, { useState, useEffect } from 'react'
import Header from '../component/common/header'
import Compare from '../component/comparePrice'
// import { getCoins } from '../functions/getCoinData'
import BasicSelect from '../component/coin/selectPrice'
import { getCoinData } from '../functions/getCoin'
import List from '../component/Dashboard/List'
import { getPrice } from '../functions/getPrice'
import { coinObject } from '../functions/coonvertObject'
import Loader from '../component/common/loader'
import CoinInfo from '../component/coin/coinInfo'
import { settingChartData } from '../functions/settingChartData'
import LineChart from '../component/coin/LineChart'
import ToggleButtons from '../component/coin/togglePrice'

const Comapre = () => {
    const [crypto1, setCrypto1] = useState("bitcoin")
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState([])
    const [crypto2Data, setCrypto2Data] = useState([])
    const [days, setDays] = useState(30)
    const [loading, setLoading] = useState(true)
    const [priceType, setPriceType] = useState('prices')
    const [chartData, setChartData] = useState ({})

    const handleDaysChange = async (event) => {
        setLoading(true)
        setDays(event.target.value)
        const price1 = await getPrice(crypto1, event.target.value, priceType)
        const price2 = await getPrice(crypto2, event.target.value, priceType)
        // console.log(price1)
       settingChartData( setChartData ,price1, price2)
        setLoading(false)
    }
    const handlePriceType = async (event, newType) => {
        setLoading(true)
        setPriceType(newType)

        const price1 = await getPrice(crypto1, days, newType)
        const price2 = await getPrice(crypto2, days, newType)
        settingChartData( setChartData ,price1 , price2) 
        setLoading(false)

        // if (price) {
        //     settingChartData(setChartData,price)
        //     setLoading(false)
        // }


    };
    const handleCoinChanges = async (event, isCoin2) => {
        setLoading(true)
        if (isCoin2) {
            setCrypto2(event.target.value)
            const myData = await getCoinData(event.target.value)
            coinObject(setCrypto2Data, myData)
            const price1 = await getPrice(crypto1, days, priceType)
            const price2 = await getPrice(crypto2, days, priceType)
            // settingChartData(setChartData ,price1, price2)
            if (price1 && price2) {
                // console.log("BOTH PRICES FETCHED", price1, price2);
                setLoading(false)
            }


        } else {
            setCrypto1(event.target.value)
            const data = await getCoinData(event.target.value);
            coinObject(setCrypto1Data, data);
            setLoading(false)
        }

    }
    useEffect(() => {
        getData()
    }, [])


    async function getData() {
        setLoading(true)
        const data1 = await getCoinData(crypto1)
        if (data1) {
            coinObject(setCrypto1Data, data1)
            const data2 = await getCoinData(crypto2)

            if (data2) {
                coinObject(setCrypto2Data, data2)
                const price1 = await getPrice(crypto1, days, priceType)
                const price2 = await getPrice(crypto2, days, priceType)
               settingChartData(setChartData, price1, price2)
                // console.log(price1, price2)
                setLoading(false)
            }
        }
    }





    return (
        <div>
            <Header />
            {loading ? <Loader /> :
                <div >
                    <div className="select-flex">
                        <Compare crypto1={crypto1} 
                        crypto2={crypto2}
                         handleChange={handleCoinChanges} />
                        <BasicSelect days={days} 
                        handleChange={handleDaysChange} 
                        mkdt={false} />
                    </div>

                    <div className='wrapper'>
                        <List coin={crypto1Data} />
                    </div>
                    <div className='wrapper'>
                        <List coin={crypto2Data} />
                    </div>
                    <div className="wrapper">
                        <ToggleButtons priceType={priceType} handlePriceType={handlePriceType}/>
                        <LineChart
                         chartData={chartData}
                          priceType={priceType}
                           multiAxis={true}/>
                    </div>
                    <div className="wrapper">
                        <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />

                    </div>

                    <div className="wrapper">
                        <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
                    </div>
                </div>

            }
        </div>
    )
}

export default Comapre
