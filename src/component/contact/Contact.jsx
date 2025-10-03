import { useRef, useState } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import { motion, useInView} from "motion/react"
import ContactSvg from './ContactSvg';

const listVariant = {
  initial: {
    x:100,
    opacity: 0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.2
    }
  }
}


const Contact = () => {
  const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
  const form = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID ,
          form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true)
           setError(false)
        },
        (error) => {
         setError(true)
         setSuccess(false)
        },
      );
  };

  const isInView = useInView(form , {margin:"-200px"})

  return (
    <div className='contact'>
      <div className="cSection">
        <motion.form 
          variants={listVariant} 
          animate={isInView? "animate":"initial"}
           ref={form} 
           onSubmit={sendEmail}
         >
          <motion.h1 variants={listVariant} className="cTitle">Les's keep in touch</motion.h1>
          <motion.div variants={listVariant} className="formItem">
            <label>Name</label>
            <input type="text" name='user-name' placeholder='Your Name' />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Email</label>
            <input type="email" name='user-email' placeholder='Your Email' />
          </motion.div>
          <motion.div variants={listVariant} className="formItem">
            <label>Message</label>
            <textarea rows={10} name='message' placeholder='Write Your Message...' ></textarea>
          </motion.div>
          <motion.button variants={listVariant} className='formButton'>Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error&& <span>something went wrong!</span>}
        </motion.form>
      </div>
      <div className="cSection">
        <ContactSvg/>
      </div>
    </div>
  )
}

export default Contact