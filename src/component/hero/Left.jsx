import React from 'react'
import { motion } from "motion/react";
import { awardVariants } from '../services/servicesData';


const Left = () => {
  return (
    <div className="hSection left">
            {/* title */}
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="hTitle"
            >
              Hey There,
              <br />
              <span>I’m Hussam</span>
            </motion.h1>
            {/* awards */}
            <motion.div
             variants={awardVariants}
             initial='initial'
             animate='animate'
             className="awards">
              <motion.h2  variants={awardVariants}>MERN Stack Developer</motion.h2>
              <motion.p  variants={awardVariants}>Award-winning designer with a passion for creating impactful digital experiences.</motion.p>
              <motion.div  variants={awardVariants} className="awardList">
                <motion.img  variants={awardVariants} src="/mongo.png" alt="" />
                <motion.img  variants={awardVariants} src="/express.png" alt="" />
                <motion.img  variants={awardVariants} src="/node.png" alt="" />
                <motion.img  variants={awardVariants} src="/react.png" alt="" />
                <motion.img  variants={awardVariants} src="/typescript.png" alt="" />
              </motion.div>
            </motion.div>
            {/* SCROLL SERVICES */}
            <motion.a 
              animate= {{y:[0,5], opacity:[0,1,0]}}
              transition={{
                repeat:Infinity,
                duration:4,
                ease: 'easeInOut'
              }}
              href="#services" className="scroll">
              <svg
                width="50px"
                height="5px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                  stroke="white"
                  strokeWidth="1"
                />
                <motion.path
                 animate={{y:[0,5]}}
                 transition={{
                  repeat:Infinity,
                  duration:4,
                  ease: 'easeInOut'
                 }}
                  d="M12 5V8"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </motion.a>
          </div>
  )
}

export default Left