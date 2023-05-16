import React, { useState } from 'react'
import './style.css'

const CoinInfo = ({heading, desc}) => {

  const [flag, setFlag] = useState(false)
    var shortDesc = desc.slice(0,250)+"<p style = 'color:var(--grey)'>Read More...</p>" ;
   var longDesc = desc+"<p style = 'color:var(--grey)'>Read Less...</p>"

    return (
      <>
    <div>
        <h1>{heading}</h1>
        </div>
       {desc.length > 350 ? (
        <div>
        <p
        onClick={ () => setFlag(!flag)}
        className='coin-info'
        dangerouslySetInnerHTML = {{ __html : !flag ? shortDesc : longDesc}} ></p>
    </div>
       ):(
        <p dangerouslySetInnerHTML={{_html : desc}}>
          
       </p>
       
    )}
    </>
  )
}

export default CoinInfo

