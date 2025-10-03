import React from 'react'
import { motion, useInView } from "motion/react"
import Profile from './Profile'
import Skils from './Skils'


const RightService = ({ref , currentId , isActive}) => {
  const isInView = useInView(ref,{margin:"-200px"})
  return (
    <div className="sSection right">
        <div className="serviceContent">   
          {
            isActive && currentId == 1 ?
           <motion.img 
            src="/macbook.png" 
            alt="" 
            animate={isInView ? { y: [0, -20, 0] } : { y: [0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="macbookImg"
           /> : isActive && currentId == 2 ?
           <Profile currentId={currentId}/>
             : isActive && currentId == 3 ?
            <Skils ref={ref}/>
            : null
          }    
         
        </div>
      </div>
  )
}

export default RightService