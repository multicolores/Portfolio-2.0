import React, {useState, useEffect } from "react";
import { motion } from "framer-motion";

function Cursor(props){
  //curseur



    return(
        <>
        <motion.div 
        animate={{
          x: props.x-25,
          y: props.y-25,
          scale: props.hovered ? 2.2 : 1,
        }}
        className="cursor test"
        >
          <motion.span
          animate={{
            opacity: props.hovered ? 1 : 0,
            color: "white",
        }}
          >{props.text}</motion.span>
        </motion.div>
          
        </>
    );
}

export default Cursor