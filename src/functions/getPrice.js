import axios from "axios";

export const getPrice = ((id,days,priceType) =>{
    const price = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`,{crossDomain:true})
    .then((res) =>{
        return res.data[priceType]
    }).catch((error) =>{
        console.log(error)
    })
      return price
})