import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";
import NextProject from "./next_project";
import header from "../photos/capsule_header.jpg";
import carac from "../photos/capsule_page.jpg";



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




function Capsule(){

  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
  const { x, y } = useMousePosition();

  //! animation apparition on scroll
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);
  const image5 = useRef(null);


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
  const intersection3 = useIntersection(image3, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });
  const intersection4 = useIntersection(image4, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });
  const intersection5 = useIntersection(image5, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

    const fadeIn= element => {
      gsap.to(element, .8, {
        opacity: 1,
        x: 0,
        stragger: {
          amount: .0
        }
      });
    }; 
    const fadeOut= element => {
      gsap.to(element, .8, {
        opacity: 0.5,
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
        opacity: 0.5,
        x: 60,
        ease: "power4.out",
      });
    };
      intersection && intersection.intersectionRatio < 0.4 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
      intersection2 && intersection2.intersectionRatio < 0.2 ? fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2");
      intersection3 && intersection3.intersectionRatio < 0.2 ? fadeOut(".fadeIn3") : fadeIn(".fadeIn3");
      intersection4 && intersection4.intersectionRatio < 0.2 ? fadeOut(".fadeIn4") : fadeIn(".fadeIn4");
      intersection5 && intersection5.intersectionRatio < 0.2 ? fadeOut2(".fadeIn5") : fadeIn2(".fadeIn5");


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
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.9, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>C</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.8, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>a</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.7, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>p</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.6, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>s</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.5, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>u</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.4, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}}>l</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.3, duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9]}}>e</motion.span>


                </div>



                
                <div className="image_container">
                <a href="https://capsuletemporelle.netlify.app/" target="_blank"  dm_dont_rewrite_url="true">
                <img src={header} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>
                <p className="description">This is a simple site on the subject of email to send to ourselves in the future that I made to improve my design skills.
                <a href="https://github.com/multicolores/Petit-site-html-css/tree/main/capsule" target="_blank" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>See code</span></a>
                <i className="fab fa-html5"></i> <i className="fab fa-js"></i> <i className="fab fa-sass"></i>
                </p>

                <div className="image_page page1 image1">
                  <a href="https://capsuletemporelle.netlify.app/" target="_blank"  dm_dont_rewrite_url="true">
                     <img ref={image} className="fadeIn" src={carac} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                  </a>
                </div>


                <Link to={"/design/en"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}>
                  <NextProject project="Design" image="crypto_design.JPG" />
                </Link>
             </motion.section>
        </>
    );
}

export default Capsule