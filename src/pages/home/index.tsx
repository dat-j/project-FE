'use client'
import Box from "@/components/ThreeFiber/Box";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { motion, useCycle, useMotionValue } from "framer-motion";
import styled from "styled-components";
import FramerButton from "@/components/FramerButton/FramerButton";
import { FramerTick } from "@/components/FramerTick/FramerTick";

const index = () => {
  const dragArea = useRef(null);
  
  const x = useMotionValue(0)
  return (
    <Wrapper className="flex justify-center items-center" ref={dragArea}>
      {/* <motion.div
        className="h-60 w-60 bg-red-500 rounded-full"
        drag
        animate={{ x: [0, 1, 2, 1, 0] }}
        //transition={{ delay: 1, repeat: Infinity }}
        dragConstraints={dragArea}
        whileTap={{background:"#d433b1"}}
      ></motion.div> */}
      {/* <FramerTick/> */}
      <motion.svg>
        <motion.path initial={{pathLength:0}} animate={{pathLength:10}} color={"#000000ff"}/>
    </motion.svg>
    </Wrapper>
    
  );
};

export default index;
const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;
