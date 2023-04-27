import  React,{useState} from 'react';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './style.css'

 const BasicSelect = ({days,handleChange,mkdt}) => {
  

  return (
    <div className="select-days">
     <p> {mkdt ? "Price Change in the last" : ""}</p>
        <Select
         sx={{
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
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value={7}> 7 Days</MenuItem>
          <MenuItem value={30} > 30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}> 90 Days</MenuItem>
        </Select>
      
    </div>
  );
}
export default BasicSelect