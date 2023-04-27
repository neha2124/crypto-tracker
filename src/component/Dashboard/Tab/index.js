import React, {useState} from 'react';
// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import { createTheme, ThemeProvider } from "@mui/material";
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import List from '../List';
import './style.css';

export default function Tabs({coin}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style={
    color:'var(--white)',
    width:'50vw',
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
      <ThemeProvider theme={theme}>
      <TabContext value={value} >
        
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="1" sx={style} />
            <Tab label="List" value="2" sx={style} />
           
          </TabList>
    
        <TabPanel value="1">
        <div className='grid-flex'>
          {coin.map((item,i)=>{
            return(
              
                <Grid coin={item} key={i}/>
             

            )
          })}
           </div>
        </TabPanel>
        <TabPanel value="2">
          <table className='list'>
            {coin.map((item,i)=>{
              return(
                  <List coin={item} key={i}></List>
              )
            })}
          </table>
        </TabPanel>
       
      </TabContext>
      </ThemeProvider>
    
  );
}