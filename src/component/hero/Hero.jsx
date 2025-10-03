import React, { Suspense } from "react";
import "./hero.css";
import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";
import Left from "./Left";
import Right from "./Right";


const Hero = React.memo(() => {
  return (
    <div className="hero">
      <Left/>
      <Right/>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
           <Shape/>
          </Suspense>
        </Canvas>
        <div className="hImg">
           <img src="/hero.webp" alt="" />
        </div>
      </div>
    </div>
  );
});

export default Hero;
