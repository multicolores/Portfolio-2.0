import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";

import NextProject from "./next_project";
import architecture_home from "./photos/architecture_home.PNG";
import architecture_about from "./photos/architecture_about.png";
import architecture_kujten from "./photos/architecture_kujten.png";




const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  const pageTransition = {
    duration: 1,
    ease: "anticipate",
  };

  
  function useMousePosition() {
    let [mousePosition, setMousePosition] = useState({x: null, y: null})
  
    useEffect(() => {
        function handlePosition(e){
            setMousePosition({ x: e.pageX, y:e.pageY })
        }
  
        window.addEventListener("mousemove", handlePosition)
        return () => window.removeEventListener("mousemove", handlePosition)
    }, [])
  
    return mousePosition
  }


function Architecture(){

  const [cursorHovered, setCursorHovered] = useState(false);
  const { x, y } = useMousePosition();

    //! animation apparition on scroll
    const image = useRef(null);
    const image2 = useRef(null);
  
    const intersection = useIntersection(image, {
      root: null,
      rootMargin: "0px",
      threshold: 0.4
    });
    const intersection2 = useIntersection(image2, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2
    });

  
  const fadeIn= element => {
    gsap.to(element, .8, {
      opacity: 1,
      x: 0,
      stragger: {
        amount: .3
      }
    });
  }; 
  const fadeOut= element => {
    gsap.to(element, .8, {
      opacity: 0,
      x: -60,
      ease: "power4.out",
    });
  };
  const fadeIn2= element => {
    gsap.to(element, .8, {
      opacity: 1,
      x: 0,
      stragger: {
        amount: .3
      }
    });
  }; 
  const fadeOut2= element => {
    gsap.to(element, .8, {
      opacity: 0,
      x: 60,
      ease: "power4.out",
    });
  };
    intersection && intersection.intersectionRatio < 0.4 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
    intersection2 && intersection2.intersectionRatio < 0.2 ? fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2");

  
    return(
        <>
            <motion.section       
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                class="page_restaurant">
        
                <motion.div 
                  animate={{
                    x: x-25,
                    y: y-25,
                    scale: cursorHovered ? 2.2 : 1,
                  }}
                  className="cursor"
                ></motion.div>

                <div class="name">
                  {/* <motion.h2 initial={{y: 200}} animate={{y: 0}} transition={{delay: 0.5, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>Restaurant</motion.h2> */}
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.4, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>A</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.3, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>r</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.2, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>c</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.1, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>h</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>i</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .9, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}}>t</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .8, duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9]}}>e</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .7, duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9]}}>c</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .6, duration: 1.1, ease: [0.6, 0.01, -0.05, 0.9]}}>t</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .5, duration: 1, ease: [0.6, 0.01, -0.05, 0.9]}}>u</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .4, duration: 0.9, ease: [0.6, 0.01, -0.05, 0.9]}}>r</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .3, duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9]}}>e</motion.span>
               
                </div>

                
                <div class="image_container">
                <img src={architecture_home} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at dolore a temporibus voluptates!<br></br> Sint est laboriosam impedit quibusdam recusandae alias excepturi quam, omnis consectetur architecto vitae maiores dolore eius.</p>

                <div class="image_page page1 image1">
                <img ref={image} className="fadeIn" src={architecture_about} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <div class="image_page page2 image2">
                <img ref={image2} className="fadeIn2" src={architecture_kujten} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>
                <Link to={"/sushi"} onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}>
                  <NextProject project="Sushi" />
                </Link>
             </motion.section>
        </>
    );
}

export default Architecture