import React from "react";
import { motion } from "framer-motion";
import Cursor_menu from "./photos/Curseur/Menu.svg";
import Cursor_Click from "./photos/Curseur/Click.svg";
import Cursor_Visit from "./photos/Curseur/Visit.svg";
import Cursor_Suivant from "./photos/Curseur/Suivant.svg";
import Cursor_Home from "./photos/Curseur/Home.svg";
function Cursor(props){
  //curseur
let image = Cursor_Click;
  if(props.text ==="Menu"){
    image = Cursor_menu;
  } else if(props.text ==="Home"){
    image = Cursor_Home;
  } else if(props.text ==="Visiter"){
    image = Cursor_Visit;
  } else if(props.text ==="Suivant"){
    image = Cursor_Suivant;
  }
  //  else{
  //   image = Cursor_Click;
  // }

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
          {/* <motion.span
          animate={{
            opacity: props.hovered ? 1 : 0,
            color: "white",
        }}
          >{props.text}</motion.span> */}

                  <motion.img 
                  animate={{
                    opacity: props.hovered ? 1 : 0,
                    color: "white",
                  }}
                  transition={{ease: "easeOut", duration: 0.5 }}
                  src={image} alt="curseur"/>
                </motion.div>


          
        </>
    );
}

export default Cursor