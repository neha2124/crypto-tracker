import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Button from '../button';
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
                    <Link>
                        <li className='link'>Home</li>
                    </Link>
                    <Link>
                        <li className='link'>Compare</li>
                    </Link>
                    <Link>
                        <li className='link'>Watchlist</li>
                    </Link>
                    <Link to={'./dashboard'}>
                        <li className='link'>
                            <Button text={"Dashboard"}></Button>
                        </li>
                    </Link>

                </div>
            </Drawer>
        </div>
    );
}