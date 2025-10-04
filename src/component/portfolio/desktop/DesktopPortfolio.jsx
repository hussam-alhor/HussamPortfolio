import { motion,useInView, useScroll, useTransform } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react'
import { items } from '../data';
import "./DesktopPortfolio.css"

const imgVariants = {
    initial: { x: -500, y: -500, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
};
const textVariants = {
    initial: { x: 500, y: 500, opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.05 } }
};

const ListItems = ({ item }) => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });
    return (
        <div className="pItem" ref={ref}>
            <motion.div variants={imgVariants} animate={isInView ? "animate" : "initial"} className="pImg">
                <img src={item.img} alt="" />
            </motion.div>
            <motion.div variants={textVariants} animate={isInView ? "animate" : "initial"} className="pText">
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants}>{item.type}</motion.p>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
            </motion.div>
        </div>
    );
};

const DesktopPortfolio = () => {
    const [containerDestance, setContainerDestance] = useState(0);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setContainerDestance(rect.left);
        }
    }, []);

    const { scrollYProgress } = useScroll({ target: ref });
    const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -window.innerWidth * items.length]);

    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div className="empty" style={{ width: window.innerWidth - containerDestance }} />
                {items.map(item => (<ListItems item={item} key={item.id} />))}
            </motion.div>
            <>
                <section /><section /><section /><section /><section />
            </>
            <div className="pProgress">
                <svg width="100%" height="100%" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#ddd" strokeWidth="10" />
                    <motion.circle
                        cx="40" cy="40" r="35" fill="none" stroke="#dd4c62" strokeWidth="10"
                        strokeDasharray="219.911"
                        style={{ strokeDashoffset: useTransform(scrollYProgress, [0, 1], [219.911, 0]) }}
                        transform="rotate(-90 40 40)"
                    />
                </svg>
            </div>
        </div>
    );
};


export default DesktopPortfolio