import React, { useState, useEffect } from 'react'
import Tab from '../component/Dashboard/Tab'
import Header from '../component/common/header'
import { getCoins } from '../functions/getCoinData'
import Search from '../component/Dashboard/search'
import Pagination from '../component/Dashboard/pagination'
// import { useEffect } from 'react'
// import axios from 'axios'


const Dashboard = () => {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState("")
  const [pagination ,setPagination] = useState([])
  console.log(pagination)
  useEffect(() => {
    getData()
  }, [])

  const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
      setPage(value);
      var preIndex = (value -1) *10
      setPagination(coin.slice(preIndex, preIndex+10))
    };
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
    

      var filterCoin = coin.filter(
        (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
      
    )
    const getData = async () => {
      const myCoin = await getCoins()
      if (myCoin) {
        
        setCoin(myCoin)
        setPagination(myCoin.slice(0,10))
  
      }
    }
   
  return (
    <div>
      <Header />
      <Search search={search}  onHandleChange={handleChange}/>
      <Tab coin= {search ? filterCoin : pagination }/>
      <Pagination page ={page} handleChange ={handlePageChange}/>
    </div>

  )
}

export default Dashboard
