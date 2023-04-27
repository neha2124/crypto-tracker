import React from 'react'
// import Style from 'component/common/style'
import Drawer from './drawer'
import  './style.css'
import Button from '../button'

import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div className='navbar'>
        <h1 className='logo'>
                CryptoTracker
        </h1>
        <div className="links">
            <Link to='/' className='path'>
            <li className='link'>Home</li>
            </Link>
            <Link to='/compare'>
            <li className='link'>Compare</li>
            </Link>
            <Link to='/watchList'>
            <li className='link'>Watchlist</li>
            </Link>
           <Link to='/dashboard'>
            <li className='link'>
                <Button text={"Dashboard"}></Button>
            </li>
            </Link>
            
        </div>
        <div className='mobile-nav'><Drawer /></div>
    </div>
    {/* <Landing/> */}
    </>
  )
}

export default Header