import React,{useState} from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import './style.css'
const Search = ({search, onHandleChange}) => {
   
    console.log(search)
  return (
    <div className='search-flex'>
        <SearchRoundedIcon />
        <input type="text"
             value={search}
             onChange={(e) => onHandleChange(e) }
             placeholder='Search'
        />
    </div>
  )
}

export default Search