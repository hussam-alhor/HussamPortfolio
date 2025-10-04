// import { useEffect, useRef, useState } from "react"
// import "./portfolio.css"
// import { motion, useInView, useScroll, useTransform } from "motion/react"
// const items = [
//   {
//     id: 1,
//     img: "/Pencil.png",
//     title: "Pencil Blog",
//     type:"(Full-Sack App)",
//     desc: "The pencil blog allows the user to browse articles and customize browsing based on a specific category and also enables him to admire, comment, delete and modify the comment in addition to publishing and browsing his personal file and amending his personal information This application was built with MERN Stack technologies",
//     link: "/"
//   },
//   {
//     id: 2,
//      img: "/delevAPP.png",
//     title: "delivery APP",
//     type:"(Full-Sack App)",
//     desc: "The delivery app is a complete system provided to the app owner, the user, and the driver.In the driver app, the user can log in as a driver to see available orders. He can accept the order so that the customer can track the driver's location on a map in real time. The driver also receives notifications of new orders.The user creates the order and specifies its location on the map in real time. The user receives a notification when their order is accepted and when the driver approaches the location.",
//     link: "/"
    
//   },
//   {
//     id: 3,
//     img: "/hope.png",
//     title: "Hope",
//     type:"(Full-Sack App)",
//     desc:"The Hope Project is a charitable organization that addresses numerous humanitarian issues, including water, famine, and disease. Users can browse and donate to these issues through an electronic wallet I created for the project. Users submit a wallet recharge request to the administrator, and when the administrator approves the request, the wallet is recharged. There is also a section for articles to keep up with world events. A dedicated control panel has been created for the administrator, giving them full control over issues, articles, and user wallet recharge requests.",
//     link: "/"
//   },
//   {
//     id: 4,
//     img: "/machin.png",
//     title: "Rig Ranch",
//     type:"(Front end App)",
//     desc: "The Machine House is a platform where you can buy and sell various types of machines (cars, agricultural machinery, excavation equipment, etc.).Users can post a machine for sale, reserve a machine, view reserved machines, cancel a reservation, and view their own posted machines in their profile. They can also view details of who has reserved a machine.I developed the project interfaces and linked them to Django's Endpoint API.",
//     link: "/"
//   },
//   {
//     id: 5,
//     img: "/theBlog.png",
//     title: "The Blog",
//     type:"(Front end App)",
//     desc: "The blog is a front-end application for displaying articles. I developed it to rely on technologies like Redux Toolkit and the ability to use night and light modes as well.",
//     link: "/"
//   },
  
// ]
// const imgVariants = {
//   initial: {
//     x: -500,
//     y: -500,
//     opacity: 0
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut"
//     }
//   }
// }
// const textVariants = {
//   initial: {
//     x: 500,
//     y: 500,
//     opacity: 0
//   },
//   animate: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeInOut",
//       staggerChildren: 0.05,
//     }
//   }
// }
// const ListItems = ({ item }) => {
//   const ref = useRef();
//   const isInView = useInView(ref, { margin: "-100px" })
//   return (
//     <div className="pItem" ref={ref}>
//       <motion.div
//         variants={imgVariants}
//         animate={isInView ? "animate" : "initial"}
//         className="pImg"
//       >
//         <img src={item.img} alt="" />
//       </motion.div>
//       <motion.div
//         variants={textVariants}
//         animate={isInView ? "animate" : "initial"}
//         className="pText"
//       >
//         <motion.h1 variants={textVariants}>{item.title}</motion.h1>
//         <motion.p variants={textVariants} >{item.type}</motion.p>
//         <motion.p variants={textVariants} >{item.desc}</motion.p>
//         {/* <motion.a variants={textVariants} href={item.link}>
//           <button>View Project</button>
//         </motion.a> */}
//       </motion.div>

//     </div>
//   )
// }

// const Portfolio = () => {
//   const [containerDestance, setContainerDestance] = useState(0)
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
//   console.log(isMobile)
//   const ref = useRef()

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect()
//       setContainerDestance(rect.left)
//     }
//   }, [])

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024)
//     }
//     window.addEventListener('resize', handleResize)
//     return () => window.removeEventListener('resize', handleResize)
//   }, [])

//   const { scrollYProgress } = useScroll({ target: ref })
//   const xTranslate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -window.innerWidth * items.length]
//   )
//   const yTranslate = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, -window.innerHeight * (items.length - 1)]
//   )
//   return (
//     <div className="portfolio" ref={ref}>
//       <motion.div className="pList" style={isMobile ? {} : { x: xTranslate }}>
//         {!isMobile && (
//           <div
//             className="empty"
//             style={{ width: window.innerWidth - containerDestance }}
//           />
//         )}
//         {
//           items.map(item => (
//             <ListItems item={item} key={item.id} />
//           ))
//         }
//       </motion.div>
//       {!isMobile && (
//         <>
//           <section />
//           <section />
//           <section />
//           <section />
//           <section />
//           <div className="pProgress">
//         <svg width="100%" height="100%" viewBox="0 0 80 80">
//           <circle
//             cx="40"
//             cy="40"
//             r="35"
//             fill="none"
//             stroke="#ddd"
//             strokeWidth="10"
//           />
//           <motion.circle
//             cx="40"
//             cy="40"
//             r="35"
//             fill="none"
//             stroke="#dd4c62"
//             strokeWidth="10"
//             strokeDasharray="219.911"
//             style={{ strokeDashoffset: useTransform(scrollYProgress, [0, 1], [219.911, 0]) }}
//             transform="rotate(-90 40 40)"
//           />
//         </svg>
//       </div>
//         </>
//       )}
      
//     </div>
//   )
// }

// export default Portfolio

import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

const items = [
    { id: 1, img: "/Pencil.png", title: "Pencil Blog", type: "(Full-Sack App)", desc: "The pencil blog allows the user to browse articles and customize browsing based on a specific category and also enables him to admire, comment, delete and modify the comment in addition to publishing and browsing his personal file and amending his personal information This application was built with MERN Stack technologies", link: "/" },
    { id: 2, img: "/delevAPP.png", title: "delivery APP", type: "(Full-Sack App)", desc: "The delivery app is a complete system provided to the app owner, the user, and the driver.In the driver app, the user can log in as a driver to see available orders. He can accept the order so that the customer can track the driver's location on a map in real time. The driver also receives notifications of new orders.The user creates the order and specifies its location on the map in real time. The user receives a notification when their order is accepted and when the driver approaches the location.", link: "/" },
    { id: 3, img: "/hope.png", title: "Hope", type: "(Full-Sack App)", desc: "The Hope Project is a charitable organization that addresses numerous humanitarian issues, including water, famine, and disease. Users can browse and donate to these issues through an electronic wallet I created for the project. Users submit a wallet recharge request to the administrator, and when the administrator approves the request, the wallet is recharged. There is also a section for articles to keep up with world events. A dedicated control panel has been created for the administrator, giving them full control over issues, articles, and user wallet recharge requests.", link: "/" },
    { id: 4, img: "/machin.png", title: "Rig Ranch", type: "(Front end App)", desc: "The Machine House is a platform where you can buy and sell various types of machines (cars, agricultural machinery, excavation equipment, etc.).Users can post a machine for sale, reserve a machine, view reserved machines, cancel a reservation, and view their own posted machines in their profile. They can also view details of who has reserved a machine.I developed the project interfaces and linked them to Django's Endpoint API.", link: "/" },
    { id: 5, img: "/theBlog.png", title: "The Blog", type: "(Front end App)", desc: "The blog is a front-end application for displaying articles. I developed it to rely on technologies like Redux Toolkit and the ability to use night and light modes as well.", link: "/" },
];

// Hook مخصص للتحقق من حجم الشاشة
const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);
    return isMobile;
};

// ====================================================================
// ١. مكون الموبايل الجديد (السلايدر)
// ====================================================================
// const MobilePortfolio = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const trackRef = useRef(null); // Ref للحصول على عرض الحاوية

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % items.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//     };

//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <div className="mobile-portfolio">
//             <div className="mobile-slider-viewport" ref={trackRef}>
//                 <motion.div
//                     className="mobile-slider-track"
//                     // 1. تفعيل السحب أفقياً
//                     drag="x"
//                     // 2. تحديد قيود السحب
//                     dragConstraints={{
//                         // لا تسمح بالسحب أبعد من الشريحة الأولى
//                         right: 0,
//                         // لا تسمح بالسحب أبعد من الشريحة الأخيرة
//                         left: -(trackRef.current ? trackRef.current.offsetWidth * (items.length - 1) : 0),
//                     }}
//                     // 3. عند انتهاء السحب، حدد الشريحة الجديدة
//                     onDragEnd={(event, info) => {
//                         // info.offset.x يعطينا مقدار السحب بالبيكسل
//                         const slideWidth = trackRef.current.offsetWidth;
//                         // إذا سحب المستخدم لليسار بقوة كافية (أكثر من 20% من عرض الشريحة)
//                         if (info.offset.x < -slideWidth * 0.2) {
//                             handleNext();
//                         }
//                         // إذا سحب المستخدم لليمين بقوة كافية
//                         else if (info.offset.x > slideWidth * 0.2) {
//                             handlePrev();
//                         }
//                     }}
//                     // تحريك الحاوية بناءً على الشريحة الحالية
//                     animate={{ x: `-${currentIndex * 100}%` }}
//                     transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
//                 >
//                     {items.map((item) => (
//                         <div className="mobile-slide" key={item.id}>
//                             <div className="mobile-img-container">
//                                 <img src={item.img} alt={item.title} />
//                             </div>
//                             <div className="mobile-text-container">
//                                 <h1>{item.title}</h1>
//                                 <p className="type">{item.type}</p>
//                                 <p className="desc">{item.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>

//             <div className="mobile-nav">
//                 <button onClick={handlePrev}>‹</button>
//                 <div className="mobile-dots">
//                     {items.map((_, index) => (
//                         <span
//                             key={index}
//                             className={`dot ${currentIndex === index ? 'active' : ''}`}
//                             onClick={() => goToSlide(index)}
//                         />
//                     ))}
//                 </div>
//                 <button onClick={handleNext}>›</button>
//             </div>
//         </div>
//     );
// };
// const MobilePortfolio = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prev) => (prev + 1) % items.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//     };

//     // دالة للانتقال عند الضغط على النقاط
//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };

//     return (
//         <div className="mobile-portfolio">
//             {/* حاوية رئيسية لإخفاء الشرائح الزائدة */}
//             <div className="mobile-slider-viewport">
//                 {/* الحاوية المتحركة التي تحتوي على جميع الشرائح */}
//                 <motion.div
//                     className="mobile-slider-track"
//                     // تحريك الحاوية بأكملها بناءً على الشريحة الحالية
//                     animate={{ x: `-${currentIndex * 100}%` }}
//                     transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
//                 >
//                     {/* عرض جميع الشرائح مرة واحدة */}
//                     {items.map((item) => (
//                         <div className="mobile-slide" key={item.id}>
//                             <div className="mobile-img-container">
//                                 <img src={item.img} alt={item.title} />
//                             </div>
//                             <div className="mobile-text-container">
//                                 <h1>{item.title}</h1>
//                                 <p className="type">{item.type}</p>
//                                 <p className="desc">{item.desc}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>

//             {/* أزرار التنقل والنقاط */}
//             <div className="mobile-nav">
//                 <button onClick={handlePrev}>‹</button>
//                 <div className="mobile-dots">
//                     {items.map((_, index) => (
//                         <span
//                             key={index}
//                             className={`dot ${currentIndex === index ? 'active' : ''}`}
//                             onClick={() => goToSlide(index)}
//                         />
//                     ))}
//                 </div>
//                 <button onClick={handleNext}>›</button>
//             </div>
//         </div>
//     );
// };
const MobilePortfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null); // Ref للحصول على عرض الحاوية

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="mobile-portfolio">
            <div className="mobile-slider-viewport" ref={trackRef}>
                <motion.div
                    className="mobile-slider-track"
                    // 1. تفعيل السحب أفقياً
                    drag="x"
                    // 2. تحديد قيود السحب
                    dragConstraints={{
                        // لا تسمح بالسحب أبعد من الشريحة الأولى
                        right: 0,
                        // لا تسمح بالسحب أبعد من الشريحة الأخيرة
                        left: -(trackRef.current ? trackRef.current.offsetWidth * (items.length - 1) : 0),
                    }}
                    // 3. عند انتهاء السحب، حدد الشريحة الجديدة
                    onDragEnd={(event, info) => {
                        // info.offset.x يعطينا مقدار السحب بالبيكسل
                        const slideWidth = trackRef.current.offsetWidth;
                        // إذا سحب المستخدم لليسار بقوة كافية (أكثر من 20% من عرض الشريحة)
                        if (info.offset.x < -slideWidth * 0.2) {
                            handleNext();
                        }
                        // إذا سحب المستخدم لليمين بقوة كافية
                        else if (info.offset.x > slideWidth * 0.2) {
                            handlePrev();
                        }
                    }}
                    // تحريك الحاوية بناءً على الشريحة الحالية
                    animate={{ x: `-${currentIndex * 100}%` }}
                    transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                >
                    {items.map((item) => (
                        <div className="mobile-slide" key={item.id}>
                            <div className="mobile-img-container">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="mobile-text-container">
                                <h1>{item.title}</h1>
                                <p className="type">{item.type}</p>
                                <p className="desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="mobile-nav">
                {/* <button onClick={handlePrev}>‹</button> */}
                <div className="mobile-dots">
                    {items.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
                {/* <button onClick={handleNext}>›</button> */}
            </div>
        </div>
    );
};

// ====================================================================
// ٢. مكون سطح المكتب (نسخة طبق الأصل من الكود الأصلي الخاص بك)
// ====================================================================
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

// ====================================================================
// ٣. المكون الرئيسي (المُبدّل)
// ====================================================================
const Portfolio = () => {
    const isMobile = useIsMobile();
    return isMobile ? <MobilePortfolio /> : <DesktopPortfolio />;
};

export default Portfolio;
