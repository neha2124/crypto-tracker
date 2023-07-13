import React from 'react'
// import { Button } from '@mui/material'
import './style.css'

const Button = ({text ,outLined,shareFunc}) => {
  return (
   <div className={outLined ? "outLined-btn" : "btn"} onClick={()=>shareFunc()}>{text}</div>
  )
}

export default Button