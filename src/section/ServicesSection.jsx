import React, {  useRef, useState } from 'react'
import "../component/services/services.css"
import { useInView } from 'motion/react'
import LeftService from '../component/services/LeftService'
import RightService from '../component/services/RightService'
import LeftServiceMobile from '../component/services/LeftServiceMobile'

const ServicesSection = () => {
     const [currentId, setCurrentId]= useState(1)
     const [isActive , setIsActive] = useState(true)
    //  console.log(isActive)
      const ref = useRef()
      const isInView = useInView(ref,{margin:"-200px"})
  return (
    <div className="services" ref={ref}>
      <LeftServiceMobile ref={ref} setCurrentId={setCurrentId} currentId={currentId} />
       <LeftService ref={ref} setCurrentId={setCurrentId} currentId={currentId}/>
       <RightService ref={ref} currentId={currentId} isActive={isActive}/>
    </div>
  )
}

export default ServicesSection
