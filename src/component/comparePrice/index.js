import  React,{useState,useEffect} from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getCoins } from '../../functions/getCoinData';
// import { getCoins } from '../../functions/getCoinData';
import './style.css'

 const Compare = ({crypto1, crypto2 , handleChange,}) => {
  const[coinData , setCoinData] = useState([])
  useEffect(() => {
    getData()

 }, [])

const getData = async () => {
   
    const data = await getCoins()
    setCoinData(data)
}
  
const style = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  
      
  }
    return (
    
        <div className="select-flex">
        <p>Crypto 1</p>
        <Select
        className='select-coin'
          sx={style}
         value={crypto1}
          label="crypto"
          onChange={(e)=>handleChange(e,false)}
        >
          {coinData.map((item,i)=>{
            return(
              <MenuItem  key={i} value={item.id}>{item.name}</MenuItem>   
            )
          })}
          

        </Select>
        <p>crypto 2</p>
        <Select
          className='select-coin'
          sx={style}
          value={crypto2}
          label="crypto"
          onChange={(e)=>handleChange(e,true)}
        >
          {coinData.map((item,i)=>{
            return(
              <MenuItem key={i} value={item.id}>{item.name}</MenuItem>   
            )
          })}
          

        </Select>
      
    </div>
  )
}
export default Compare