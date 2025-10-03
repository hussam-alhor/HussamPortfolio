import { motion, useInView } from "motion/react";
import Speech from "./Speech";
import { useRef } from "react";

const followVariants = {
  initial:{
    y: -100,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }
  }
}
const Right = () => {
  const ref = useRef()
  const isInView = useInView(ref,)
  return (
    <div className="hSection right">
        {/* FOLLOW */}
        <motion.div 
        ref={ref}
        variants={followVariants}
        // initial='initial'
        animate={isInView ? "animate" : "initial"}
        // animate='animate'
        className="follow">
          <motion.a  variants={followVariants} href="https://www.instagram.com/hussam_alhor_?igsh=dWthMHVqNzg4YjIz">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a  variants={followVariants} href="https://www.facebook.com/hussam.alhor.33?mibextid=ZbWKwL">
            <img src="/facebook.webp" alt="" />
          </motion.a>
          <motion.a  variants={followVariants} href="https://www.linkedin.com/in/hosam-alhor-56b417225">
            <img src="/linked.png" alt="" />
          </motion.a>
          <motion.div  variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* Bubble speech */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div 
         animate={{opacity:[0,1]}}
         transition={{duration:1}}
         className="certificate">
          <img src="/certificate.jpg" alt="" />
          FOCAL X CERTIFICED
          <br />
          PROFESSIONAL
          <br />
          FULL STACK DEVELOPER
        </motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
         animate={{
          x: [200,0],
          opacity:[0,1]
         }}
         transition={{
          duration:2
         }}
          href="/#contact"
          className="contactLink"
        >
          <motion.div 
           className="contactButton"
           animate={{
            rotate:[0,360]
           }}
           transition={{
            duration:10,
            repeat: Infinity,
            ease: "linear"
           }}
           >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hiring  Now .</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me .
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
  )
}

export default Right