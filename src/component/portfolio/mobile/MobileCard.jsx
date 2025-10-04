import React, { useRef } from 'react'
import { motion,  useInView  , useScroll, useTransform } from 'motion/react';

const MobileCard = ({ item, index }) => {
    const ref = useRef();
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    // تحديد الخلفية بناءً على الفهرس للحفاظ على الهوية البصرية
    const getBackgroundColor = (index) => {
        const colors = [
            "linear-gradient(to right, #12071f, #210b3a)",
            "linear-gradient(to right, #210b3a, #27084a)", 
            "linear-gradient(to right, #27084a, #220345)",
            "linear-gradient(to right, #220345, #2a0159)",
            "linear-gradient(to right, #2a0159, #12071f)"
        ];
        return colors[index % colors.length];
    };

    return (
        <motion.div 
            className="mobile-card"
            ref={ref}
            style={{ background: getBackgroundColor(index) }}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
            transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.2
            }}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
        >
            <motion.div 
                className="mobile-card-img-container"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
                <img src={item.img} alt={item.title} />
            </motion.div>
            
            <motion.div 
                className="mobile-card-text-container"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            >
                <h1>{item.title}</h1>
                <p className="type">{item.type}</p>
                <p className="desc">{item.desc}</p>
            </motion.div>
        </motion.div>
    );
};

export default MobileCard