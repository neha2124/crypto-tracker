import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// import Comapre from '../../../pages/comapre';
// import Home from '../../../pages/home';
// import WatchList from '../../../pages/watchList';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {

    const [open, setOpen] = useState(false)


    return (
        <div>
            <IconButton onClick={() => setOpen(true)}>
                <MenuOutlinedIcon className='link-btn' />
            </IconButton>
            <Drawer anchor={'right'} open={open} onClose={() => setOpen(false)}>
                <div className="drawer-div">
                    <Link to={'/'}>
                        <li className='link'>Home</li>
                    </Link>
                    <Link to={'/compare'}>
                        <li className='link'>Compare</li>
                    </Link>
                    <Link to={'/watchlist'}>
                        <li className='link'>Watchlist</li>
                    </Link>
                    <Link to={'/dashboard'}>
                        <li className='link'>
                            DashBoard
                        </li>
                    </Link>

                </div>
            </Drawer>
        </div>
    );
}