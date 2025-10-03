import React from 'react'
import { motion, useInView } from "motion/react"
import Counter from './Counter'
import { services } from './servicesData'

const textVariants = {
    initial : {
      x: -100,
      y: -100,
      opacity : 0
    },
    animate : {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  
  }
  const listVariants = {
    initial : {
      x: -100,
      opacity : 0
    },
    animate : {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      }
    }
  
  }
  

const LeftServiceMobile = ({ref ,setCurrentId,currentId}) => {
     // Ensure ref is defined before using useInView to avoid runtime errors
        const isInView = useInView(ref ,{margin:"-200px"})
  return (
    <div className="sSection left smobile">
              <motion.h1 
                className="sTitle"
                variants={textVariants}
                animate={isInView ? "animate" : "initial"}
              >
                  How do I help?
              </motion.h1>
              <motion.div 
               className="serviceList"
               variants={listVariants}
               initial="initial"
               animate={isInView ? "animate" : "initial"}
              >
                {services.map((service)=> 
                  (
                    <React.Fragment key={service.id}>
                    <motion.div 
                      className="service" 
                      variants={listVariants}
                      onClick={()=> {
                        setCurrentId(service.id)
                      }}
                    >
                      <div className="serviceIcon">
                        <img src={service.img} alt="" />
                      </div>
                     <div className="serviceInfo">
                      <h2>{service.title}</h2>
                      <h3>{service.counter}</h3>
                     </div>
                    </motion.div>
                    {currentId === service.id  && service.component ? service.component : null}
                    </React.Fragment>
                  )
                )}
              </motion.div>
              <div className="counterList">
                <Counter from={0} to={104} text="Projects Completed" />
                <Counter from={0} to={72} text="Happy Clients" />
              </div>
      </div>
  )
}

export default LeftServiceMobile