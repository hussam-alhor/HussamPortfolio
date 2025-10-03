import React from 'react'
import { motion, useInView } from "motion/react"
import Counter from './Counter'
import { services } from './servicesData'
import Profile from './Profile'

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
  
const LeftService = ({ref , setCurrentId , currentId}) => {
     // Ensure ref is defined before using useInView to avoid runtime errors
    const isInView = useInView(ref ,{margin:"-200px"})
// console.log(currentId)

const currentService = services.find(service => service.id === currentId)
  return (
    <>
      <div className="sSection left sWeb">
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
                  
                    <motion.div 
                      key={service?.id}  
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
                    
                  )
                )}
              </motion.div>
              <div className="counterList">
                <Counter from={0} to={104} text="Projects Completed" />
                <Counter from={0} to={72} text="Happy Clients" />
              </div>
      </div>
    </>
  
  )
}

export default LeftService
