import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";

import NextProject from "./next_project";
import architecture_home from "../photos/architecture_home.jpg";
import architecture_about from "../photos/architecture_about.jpg";
import architecture_kujten from "../photos/architecture_kujten.jpg";



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
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
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
                className="page_restaurant">
        
                <motion.div 
                  animate={{
                    x: x-25,
                    y: y-25,
                    scale: cursorHovered ? 2.2 : 1,
                  }}
                  className="cursor"
                >
                  <motion.span
                    animate={{
                      opacity: cursorHovered_clickable ? 1 : 0,
                      color: "white",
                    }}
                    >Click</motion.span>
                </motion.div>

                <Link to={"/"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}>
                <span className="home">Home</span>
                </Link>
                
                <div className="name">
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

                
                <div className="image_container">
                <a href="https://simonpesin.netlify.app/" target="_blank"  dm_dont_rewrite_url="true">
                <img src={architecture_home} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>
                <p className="description">
                This site was created in early 2020, it was for me a great source of learning as someone gave me
                   constraints and I had to adapt the creation of this site accordingly.
                  <br></br>
                  It has been a colossal source of enrichment for me, I discovered what it was to design a site at the request of another person.
                  <a href="https://github.com/multicolores/architecture-site" target="_blank" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>See code</span></a>
                  <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className="fab fa-js"></i>
                  </p>

                <div className="image_page page1 image1">
                <img ref={image} className="fadeIn" src={architecture_about} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <div className="image_page page2 image2">
                <img ref={image2} className="fadeIn2" src={architecture_kujten} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>
                <Link to={"/sushi/en"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}>
                  <NextProject project="Sushi" image="sushi_darkmode_home.jpg"/>
                </Link>
             </motion.section>
        </>
    );
}

export default Architecture