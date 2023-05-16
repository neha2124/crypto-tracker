import React, { useState } from 'react'
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from '@mui/material';
import './style.css'
import { ConvertNumber } from '../../../functions/convertNumber';
import StarsIcon from '@mui/icons-material/Stars'
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined'
import { addWatchList } from '../../../functions/addWatchList';
import { hasBeenAdded } from '../../../functions/hasBeenAdded';
import { removeList } from '../../../functions/removeWatchList';
import { Link } from 'react-router-dom';
const List = ({coin}) => {
  const [added , setAdded] = useState(hasBeenAdded(coin.id))
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='coin-list'>
        <Tooltip title='logo'>
         <td className='td-img list-img'>
                <img src={coin.image} alt="" className='coin-logo' />
                </td>
                </Tooltip>
                <Tooltip title='Name'>
                <td className="name-col">
                    <p className='symbol responsive'>{coin.symbol}</p>

                    <p className='name responsive'>{coin.name}</p>
                </td>
                </Tooltip>
            {coin.price_change_percentage_24h > 0 ?
                <td className="chip-flex chip">

                    <div className="price-chip responsive">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="icon-chip td-icon">
                        <TrendingUpRoundedIcon />
                    </div>
                </td>
                : <td className="chip-flex chip">

                    <div className="price-chip chip-red responsive">${coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="icon-chip chip-red td-icon">
                        <TrendingDownRoundedIcon />
                    </div>
                </td>
            }
              <td className="info-container chip ">
                
                
                <h3 className='current-price center responsive' 
                style={{color: coin.price_change_percentage_24h > 0? 'var(--green)': 'var(--red)'}}
                >
                    ${coin.current_price.toLocaleString()}
                </h3>
                </td>
                <td className='mobile'>
                <p className='list-volume right-align '>
                  {coin.total_volume.toLocaleString()}
               
                </p>
                </td>
                <td  className='desktop-td'>
                <p className='list-volume right-align responsive'>
                   {coin.market_cap.toLocaleString()}
                </p>
                </td>
                <td  className='mobile-td'>
                <p className='list-volume right-align responsive'>
                   {ConvertNumber(coin.market_cap.toLocaleString())}
                </p>
                </td>
                <td className='add-list'>
                <button
               onClick={(e)=> {
                e.preventDefault()
                if(added){
                    removeList(coin.id)
                    setAdded(false)
                }else{
               addWatchList(coin.id)
               setAdded(true)
                }}}
                >{added? 
                    <StarsIcon
                      className={` icon-chip ${coin.price_change_percentage_24h < 0 && 'chip-red'}`}
                    />
                : <StarsOutlinedIcon
                className={`icon-chip ${coin.price_change_percentage_24h < 0 && 'chip-red'}`}
                 
                 />
                }
                </button>
                </td>


    </tr>
    </Link>
  )
}

export default List