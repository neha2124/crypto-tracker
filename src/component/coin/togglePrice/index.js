import  React,{useState} from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './style.css'
export default function ToggleButtons({priceType, handlePriceType}) {
 

  return (
    <ToggleButtonGroup
      className='toggle-group'
      value={priceType}
      exclusive
      onChange={handlePriceType}
      sx={{
        "& .Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "var(--blue)",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue)",
        },
      }}
     
    >
      <ToggleButton value="prices"  className='toggle-button'>
        Price
      </ToggleButton>
      <ToggleButton value="market_caps"  className='toggle-button'>
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes"  className='toggle-button'>
        Total Volume
      </ToggleButton>
     
     
    </ToggleButtonGroup>
  );
}