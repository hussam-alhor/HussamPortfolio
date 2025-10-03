import React, { forwardRef } from "react";
import { motion, useInView } from "motion/react";
import { awardVariants, imgData } from "./servicesData";

const Skils = forwardRef((props, ref) => {
  const isInView = ref ? useInView(ref,{margin:"-200px"}) : false
  return (
    <motion.div
      variants={awardVariants}
      initial= "initial"
      animate = "animate"
      className="iconService"
    >
      {imgData.map((item) => (
        <motion.div variants={awardVariants} className="iconList" key={item.id}>
          <motion.img variants={awardVariants} src={item.img1} alt="" />
          <motion.img variants={awardVariants} src={item.img2} alt="" />
          <motion.img variants={awardVariants} src={item.img3} alt="" />
          <motion.img variants={awardVariants} src={item.img4} alt="" />
          <motion.img variants={awardVariants} src={item.img5} alt="" />
        </motion.div>
      ))}
    </motion.div>
  );
});

export default Skils;
