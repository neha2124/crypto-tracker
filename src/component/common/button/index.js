import React from 'react'
// import { Button } from '@mui/material'
import './style.css'

const Button = ({text ,outLined}) => {
  return (
   <div className={outLined ? "outLined-btn" : "btn"}>{text}</div>
  )
}

export default Button