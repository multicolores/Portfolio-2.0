import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";
import NextProject from "./next_project";
import logo from "../photos/logo.png"
import gatsby_logo from "../photos/Gatsby_logo.png";

import header from "../photos/Blog_home.jpg";
import carac from "../photos/Blog_page1.jpg";
import admin from "../photos/Blog_admin.JPG";

import Cursor from "./cursor";
import ScrollToTop from "./scrollToTop";
import Menu from "./Menu";


// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

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
    duration: 1.4,
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




function Blog(){

  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
    const [cursorText, setcursorText] = useState("");
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
    threshold: 0.2
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
        scale: 1,
        stragger: {
          amount: .0
        }
      });
    }; 
    const fadeOut= element => {
      gsap.to(element, .8, {
        opacity: 0,
        scale: 0.95,
      //  x: -60,
        ease: "power4.out",
      });
    };
    const fadeIn2= element => {
      gsap.to(element, .8, {
        opacity: 1,
        x: 0,
        scale: 1,
        stragger: {
          amount: .3
        }
      });
    }; 
    const fadeOut2= element => {
      gsap.to(element, .8, {
        opacity: 0,
        scale: 0.95,
       // x: 60,
        ease: "power4.out",
      });
    };
      intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
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

                  <Cursor hovered={cursorHovered} x={x} y={y} text={cursorText}/>
                {/* <motion.div 
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
                </motion.div> */}

                <Link to={"/en"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Home")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("Home")}}>
                <span className="home">
                  <img src={logo} alt="logo"/>
                </span>
               </Link>
               <div onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Menu")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
               <Menu actualPage="Capsule"/>
              </div>  
                
                <div className="name">
                {/* <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.9, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>C</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.8, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>a</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.7, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>p</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.6, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>s</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.5, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>u</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.4, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}}>l</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.3, duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9]}}>e</motion.span> */}
                <span className="span-1">B</span>
                <span className="span-2">l</span>
                <span className="span-3">o</span>
                <span className="span-4">g</span>

                </div>



                
                <div className="image_container">
                <a href="https://blog-1-gatsby.netlify.app/" target="_blank"  dm_dont_rewrite_url="true" rel="noopener noreferrer">
                <img src={header} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>
                <p className="description">This blog was made with Gatsby and Netlify CMS, it has an environment allowing to add new articles without making any code.
                <a className="visit_site" href="https://blog-1-gatsby.netlify.app/" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>visit the site</span></a>
                <a href="https://github.com/multicolores/Blog-1.0" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>see the code</span></a>
                <i className="fab fa-html5"></i> <i className="fab fa-sass"></i> <i className="fab fa-react"></i> <i className="i-logo_image">
                      <img src={gatsby_logo} alt="logo gatsby"/>
                    </i>
                </p>

                <div className="image_page page1 image1">
                  <a href="https://blog-1-gatsby.netlify.app/" target="_blank"  dm_dont_rewrite_url="true" rel="noopener noreferrer">
                     <img ref={image} className="fadeIn" src={carac} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                  </a>
                </div>

                <div  className="image_page page2">
                <img ref={image2} className="fadeIn2" src={admin} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <Link to={"/en/sushi"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Suivant")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
                  <NextProject project="Sushi" image="sushi_darkmode_home.jpg"/>
                </Link>
                <ScrollToTop />

             </motion.section>
        </>
    );
}

export default Blog