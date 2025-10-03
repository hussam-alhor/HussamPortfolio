import React from 'react'
import { motion } from "motion/react";
import { awardVariants } from './servicesData';


const Profile = () => {
  return (
    <motion.div 
      className= 'serviceProfile' 
      variants={awardVariants}
      initial= "initial"
      animate = "animate"  
    >
        <motion.p>
          A dedicated and precise full-stack developer with two years of professional experience in creating responsive and user-friendly web applications.
          I have a strong background in transforming design prototypes into high-performance websites and applications.
          I am skilled in working with Figma designs. A team leader in Homs.
          </motion.p>
    </motion.div>
  )
}

export default Profile