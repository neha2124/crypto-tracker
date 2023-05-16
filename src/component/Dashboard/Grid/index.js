import React,{useState} from 'react'
import './Style.css'
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from 'react-router-dom';
import StarsIcon from '@mui/icons-material/Stars';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import { addWatchList } from '../../../functions/addWatchList'
import { hasBeenAdded } from '../../../functions/hasBeenAdded';
import { removeList } from '../../../functions/removeWatchList';
const Grid = ({ coin }) => {
    const [added, setAdded] = useState(hasBeenAdded(coin.id))
    // console.log(data)

    return (
        <Link to={`/coin/${coin.id}`}>
        <div className={`grid-container ${coin.price_change_percentage_24h < 0 && 'grid-com'}`}>
            <div className="info-text">
                <img src={coin.image} alt="" className='coin-logo' />
                <div className="name-col">
                    <p className='symbol'>{coin.symbol}</p>

                    <p className='name'>{coin.name}</p>
                </div>
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
                      className={`icon-chip ${coin.price_change_percentage_24h < 0 && 'chip-red'}`}
                    />
                : <StarsOutlinedIcon
                className={`icon-chip ${coin.price_change_percentage_24h < 0 && 'chip-red'}`}
                 
                 />
                }
                </button>
            </div>
            {coin.price_change_percentage_24h > 0 ?
                <div className="chip-flex">

                    <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="icon-chip">
                        <TrendingUpRoundedIcon />
                    </div>
                </div>
                : <div className="chip-flex">

                    <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className="icon-chip chip-red">
                        <TrendingDownRoundedIcon />
                        
                    </div>
                </div>
            }
              <div className="info-container">
                <h3 className='current-price' 
                style={{color: coin.price_change_percentage_24h > 0? 'var(--green)': 'var(--red)'}}
                >
                    ${coin.current_price.toLocaleString()}
                </h3>
                <p className='total-volume'>
                 <span> Total Volume : $</span> {coin.total_volume.toLocaleString()}
                </p>
                <p className='total-volume'>
                  <span>Total Volume : $</span> {coin.market_cap.toLocaleString()}
                </p>

              </div>

        </div>
        </Link>
    )
}

export default Grid
