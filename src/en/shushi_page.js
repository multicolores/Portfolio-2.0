import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";
import NextProject from "./next_project";
import logo from "../photos/logo.png"

import sushi_dark from "../photos/sushi_darkmode_home.jpg";
import sushi_white from "../photos/shushi_white.JPG";
import suhsi_mobile_dark from "../photos/sushi_darkmode_mobile.jpg";
import suhsi_mobile_white from "../photos/suhsi_lightmode_mobile.jpg";
import suhsi_site_white from "../photos/sushi_site_white.jpg";
import suhsi_site_dark from "../photos/sushi_site_darkmode.jpg";

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




function Sushi(){

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
      gsap.to(element, 1, {
        opacity: 1,
        x: 0,
        scale: 1,
        stragger: {
          amount: .0
        }
      });
    }; 
    const fadeOut= element => {
      gsap.to(element, 1, {
        opacity: 0,
        scale: 0.95,
        x: -60,
        ease: "power4.out",
      });
    };
    const fadeIn2= element => {
      gsap.to(element, 1, {
        opacity: 1,
        x: 0,
        scale: 1,
        stragger: {
          amount: .3
        }
      });
    }; 
    const fadeOut2= element => {
      gsap.to(element, 1, {
        opacity: 0,
        x: 60,
        scale: 0.95,
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

                <Link to={"/en"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Home")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
                <span className="home">
                  <img src={logo} alt="logo"/>
                </span>
                </Link>
                <div onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Menu")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
               <Menu actualPage="sushi"/>
              </div>  
                
                <div className="name">
                {/* <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.9, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>S</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.8, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>u</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.7, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>s</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.6, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>h</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.5, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>i</motion.span> */}

                <span className="span-1">S</span>
                <span className="span-2">u</span>
                <span className="span-3">s</span>
                <span className="span-4">h</span>
                <span className="span-5">i</span>
                </div>

                
                <div className="image_container">
                <a href="https://sushi-site.netlify.app/.html" target="_blank"  dm_dont_rewrite_url="true" rel="noopener noreferrer">
                <img src={sushi_white} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>
                <p className="description">This is a simple sushi-themed site that I made for training my skills.
                <a className="visit_site" href="https://sushi-site.netlify.app/.html" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>visit the site</span></a>

                <a href="https://github.com/multicolores/Petit-site-html-css/tree/main/Sushi%20site" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>see the code</span></a>
                <i className="fab fa-html5"></i> <i className="fab fa-js"></i> <i className="fab fa-css3-alt"></i>
                </p>

                <div className="image_page page1 image1">
                <img ref={image} className="fadeIn" src={sushi_dark} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>
                <div className="mobile">
                <div className="image_page mobile1">
                    <img ref={image2} className="fadeIn2" src={suhsi_mobile_dark} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <div className="image_page mobile2">
                <img ref={image3} className="fadeIn3" src={suhsi_mobile_white} alt=""  onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>
                </div>

                <div className="image_page page1">
                <a href="https://sushi-site.netlify.app/sushi.html" target="_blank"  dm_dont_rewrite_url="true" rel="noopener noreferrer">
                <img ref={image4} className="fadeIn4" src={suhsi_site_white} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>

                <div className="image_page page2">
                  <a href="https://sushi-site.netlify.app/sushi_darkmode.html" target="_blank"  dm_dont_rewrite_url="true" rel="noopener noreferrer">
                <img ref={image5} className="fadeIn5" src={suhsi_site_dark} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>

                <Link to={"/en/spacestar"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Suivant")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
                  <NextProject project="Space Star" image="SpaceStar.JPG" />
                </Link>
                <ScrollToTop />

             </motion.section>
        </>
    );
}

export default Sushi