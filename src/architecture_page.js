import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";

import NextProject from "./next_project";
import logo from "./photos/logo.png";
import gatsby_logo from "./photos/Gatsby_logo.png";
import architecture_home from "./photos/Architecture2-home.jpg";
import architecture_about from "./photos/Architecture2-project_page.jpg";
import architecture_kujten from "./photos/Architecture2-apropos.jpg";

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


function Architecture(){

  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
    const [cursorText, setcursorText] = useState("");
    const { x, y } = useMousePosition();

  //! animation apparition on scroll
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);

  const intersection = useIntersection(image, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });
  const intersection2 = useIntersection(image2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
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


  const fadeIn= element => {
    gsap.to(element, .6, {
      opacity: 1,
      x: 0,
      scale: 1,
      // stragger: {
      //   amount: .3
      // }
      // ease: "Circ.easeIn",
    });
  }; 
  const fadeOut= element => {
    gsap.to(element, .6, {
      opacity: 0,
      scale: 0.95,
      // x: -60,
      // ease: "Circ.easeIn",
    });
  };
  const fadeIn2= element => {
    gsap.to(element, .6, {
      opacity: 1,
      x: 0,
      scale: 1,
      // stragger: {
      //   amount: .3
      // }
     // ease: "Circ.easeIn",
    });
  }; 
  const fadeOut2= element => {
    gsap.to(element, .6, {
      opacity: 0,
      scale: 0.95,
      // x: 60,
      // ease: "Circ.easeIn",
    });
  };
  intersection && intersection.intersectionRatio < 0.1 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
  intersection2 && intersection2.intersectionRatio < 0.1 ? fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2");
  intersection3 && intersection3.intersectionRatio < 0.2 ? fadeOut(".fadeIn3") : fadeIn(".fadeIn3");
  intersection4 && intersection4.intersectionRatio < 0.2 ? fadeOut2(".fadeIn4") : fadeIn2(".fadeIn4");


  
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

                <Link to={"/"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Home")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
                <span className="home">
                  <img src={logo} alt="logo"/>
                </span>
                </Link>
                
                <div onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Menu")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
               <Menu actualPage="architecture"/>
              </div>  
                
                <div className="name">
                  {/* <motion.h2 initial={{y: 200}} animate={{y: 0}} transition={{delay: 0.5, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>Restaurant</motion.h2> */}
                {/* <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.4, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>A</motion.span>
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
                */}

                <span className="span-1">A</span>
                <span className="span-2">r</span>
                <span className="span-3">c</span>
                <span className="span-4">h</span>
                <span className="span-5">i</span>
                <span className="span-6">t</span>
                <span className="span-7">e</span>
                <span className="span-8">c</span>
                <span className="span-9">t</span>
                <span className="span-10">u</span>
                <span className="span-11">r</span>
                <span className="span-12">e</span>
                </div>

                
                <div className="image_container">
                <a href="https://gatsby-architecture.netlify.app/" target="_blank"  dm_dont_rewrite_url="true" rel="noopener noreferrer">
                <img src={architecture_home} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>
                <p className="description">
                Ce projet ayant pour thème le portfolio d'un architecte quelconque a été réalisé avec gatsby.js qui permet de donner au site des performences accrue pour le chargement des images notamment.
                  <a className="visit_site" href="https://gatsby-architecture.netlify.app/" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>visiter le site</span></a>

                  <a href="https://github.com/multicolores/Architecture-2.0" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>voir le code</span></a>
                  <i className="fab fa-html5"></i> <i className="fab fa-sass"></i> <i className="fab fa-react"></i> <i className="i-logo_image">
                      <img src={gatsby_logo} alt="logo gatsby"/>
                    </i>                  </p>

                <div className="image_page page1">
                <img ref={image} className="fadeIn" src={architecture_about} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <div className="image_page page2 ">
                <img ref={image2} className="fadeIn2" src={architecture_kujten} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>
                <Link to={"/blog"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true); setcursorText("Suivant")}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false); setcursorText("")}}>
                  <NextProject project="Blog" image="Blog_home.jpg"/>
                </Link>
                <ScrollToTop />
             </motion.section>
        </>
    );
}

export default Architecture