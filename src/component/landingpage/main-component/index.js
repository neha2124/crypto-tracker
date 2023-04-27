import React from 'react'
import Button from '../../common/button'
import '../style.css'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
const Landing = () => {
    return (
        <div className='flex'>
            <div className="flex-1">
                <motion.div
                 className="Crypto-tracker-heading"
                initial={{opacity:0 , y:50}}
                animate={{opacity:1 ,y:0 }}
                transition={{duration:0.5}}
               >
                    track crypto</motion.div>
                <motion.div 
                className="real-time-heading"
                initial={{opacity:0 , y:50}}
                animate={{opacity:1 ,y:0 }}
                transition={{duration:0.5,delay:0.5}}
                
                
                >real time
                </motion.div>
                <motion.p 
                className='description'
                initial={{opacity:0 , y:50}}
                animate={{opacity:1 ,y:0 }}
                transition={{duration:0.5,delay:1}}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div 
                 initial={{opacity:0 , x:50}}
                 animate={{opacity:1 ,x:0 }}
                 transition={{duration:0.5,delay:1.5}}
                className="btn-comp">
                    <Link to={'/dashboard'}>
                    <Button text={"Dashboard"}></Button>
                    </Link>
                    <Button text={"Share"} outLined={true}></Button>
                </motion.div>
            </div>
            
            <div className="phone">
           
                <motion.img className='iphone'
                 src={iphone}
                 initial={{ y:-10}}
                 animate={{y:0 }}
                 transition={{duration:2,type:"smooth",repeatType:"mirror",repeat:Infinity}}
                 alt="" />
                <img className='gradient' src={gradient} alt="" />
            </div>


        </div>
    )
}

export default Landing