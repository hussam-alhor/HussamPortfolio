import React from 'react'
import {motion} from 'motion/react'

const variants = {
    initial: {
        x: -100,
        opacity:0
    },
    animate: {
        x:0,
        opacity:1,
        transition:{
            duration:2
        }
    }
}

const Text = () => {
  return (
    <section 
      style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
    >
        <motion.div 
        // initial={{x:0, y: 0, opacity:0}}
        animate={{x:[0, 100], y: [0,-200], opacity:[0,1]}}
        transition={{
            duration:2,
            delay:4,
            ease: "easeInOut",
            repeat:Infinity
        }}
        style={{width:300,height:300,background:"red"}}></motion.div>
    </section>
  )
}

export default Text