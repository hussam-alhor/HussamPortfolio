
import { Suspense ,lazy, useRef, useState } from "react";
import Counter from "./Counter"
import "./services.css"
import { motion, useInView } from "motion/react"


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
const services = [
  {
    id :1,
    img: "/service1.png",
    title: "web Development",
    counter: 35
  },
  {
    id :2,
    img: "/service2.png",
    title: "Product Design",
    counter: 23
  },
  {
    id :3,
    img: "/service3.png",
    title: "Branding",
    counter: 46
  }
]

const Services = () => {
  const [currentId, setCourrentId]= useState(1)
  const ref = useRef()
  const isInView = useInView(ref,{margin:"-200px"})
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
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
          {services.map((services)=> 
            (
              <motion.div 
                className="service" 
                key={services.id}  
                variants={listVariants}
                onClick={()=> setCourrentId(services.id) }
              >
                <div className="serviceIcon">
                  <img src={services.img} alt="" />
                </div>
               <div className="serviceInfo">
                <h2>{services.title}</h2>
                <h3>{services.counter}</h3>
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
      <div className="sSection right">
        <div className="macbook">   
          {
            currentId == 1 ?  <motion.img 
            src="/macbook.png" 
            alt="" 
            animate={isInView ? { y: [0, -20, 0] } : { y: [0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="macbookImg"
          /> : currentId == 2 ?
           <p>
            A dedicated and detail-oriented full-stack developer with
            2 years of professional experience in creating responsive
            and easy-to-use web applications. With a strong background
            in translating design models into high-performance websites
            and applications. Master the work with Figma designs.
            Former team leader in training at Focal X,
            good at working in a team and have a passion for commitment
          </p>
             :
             <p>Hi</p>
          }    
         
        </div>
      </div>
    </div>
  )
}

export default Services