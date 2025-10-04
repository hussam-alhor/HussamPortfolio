import React, { useRef } from 'react'
import { lazy , Suspense } from 'react'
// import MobileCard from './MobileCard';
import { motion, useScroll, useTransform } from 'motion/react';
import { items } from '../data';
import "./MobileCard.css"
import LoadingFallback from '../../LoadingFallback';
const MobileCard = lazy(()=> import("./MobileCard"))

const MobilePortfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    return (
        <div>
            {items.map((item, index) => (
                <section key={item.id} className="mobile-portfolio-section">
                     <Suspense fallback={<LoadingFallback />}>
                         <MobileCard item={item} index={index} />
                     </Suspense>
                </section>
            ))}
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

export default MobilePortfolio