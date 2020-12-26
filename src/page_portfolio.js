import React, {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {useIntersection} from "react-use";
import gsap from "gsap";

import NextProject from "./next_project";
import logo from "./photos/logo.png"

import portfolio_home from "./photos/portfolio_home.jpg";
import portfolio_img1 from "./photos/portfolio_img1.png";
import portfolio_footer from "./photos/portfolio_footer.png";

import ScrollToTop from "./scrollToTop";




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

  



// const title = {
//   initial: {
//     y: 0,
//   },
//   animate: {
//     y: 0,
//     transition: {
//       delayChildren: 0.6,
//       staggerChildren: 0.04,
//       staggerDirection: -1,
//     },
//   },
// };


// const letter = {
//     initial: {
//       y: 400,
//     },
//     animate: {
//       y: 0,
//       transition: { duration: 3, ...transition },
//     },
//   };

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
  
function Portfolio(){

    const [cursorHovered, setCursorHovered] = useState(false);
    const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
    const { x, y } = useMousePosition();

    // const { scrollYProgress } = useViewportScroll();
    // const scale = useTransform(scrollYProgress, [0, 0.001], [1.02, 2.2]);
  //! animation apparition on scroll
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);

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


const fadeIn= element => {
  gsap.to(element, .8, {
    opacity: 1,
    x: 0,
    // stragger: {
    //   amount: .3
    // }
  });
}; 
const fadeOut= element => {
  gsap.to(element, .8, {
    opacity: 0,
    //x: -60,
    ease: "Power1.easeIn",
    });
};
const fadeIn2= element => {
  gsap.to(element, .8, {
    opacity: 1,
    x: 0,
    // stragger: {
    //   amount: .3
    // }
  });
}; 
const fadeOut2= element => {
  gsap.to(element, .8, {
    opacity: 0,
    // x: 60,
    ease: "Power1.easeIn",
  });
};

  intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
  intersection2 && intersection2.intersectionRatio < 0.2 ? fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2");
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
                className="page_restaurant"
                >

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
                <span className="home">
                  <img src={logo} alt="logo"/>
                </span>
                </Link>
                
                <div className="name">
                  {/* <motion.h2 initial={{y: 200}} animate={{y: 0}} transition={{delay: 0.5, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>Restaurant</motion.h2> */}
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.4, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>P</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.3, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>o</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.2, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>r</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.1, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>t</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>f</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .9, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}}>o</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .8, duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9]}}>l</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .7, duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9]}}>i</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .6, duration: 1.1, ease: [0.6, 0.01, -0.05, 0.9]}}>o</motion.span>
               
                </div>

                
                <div className="image_container">
                <a href="https://react-florian-restaurant.netlify.app/" target="_blank" rel="noopener noreferrer"  dm_dont_rewrite_url="true">
                <img src={portfolio_home} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)} className="pagePortoflio" />
                </a>
                </div>
                <p className="description">Voici le site sur lequel vous êtes actuellement, il est l'un de mes projets donc je suis le plus fière.
                                <br></br> J'espère que ce site vous montre non seulement mes capacitées techniques mais aussi la passion avec laquel je crée mes sites.
                    <a href="https://github.com/multicolores/Portfolio-2.0" target="_blank" rel="noopener noreferrer" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}> <span>voir le code</span></a>
                    <i className="fab fa-html5"></i> <i className="fab fa-sass"></i> <i className="fab fa-react"></i>
                    </p>

                <div className="image_page page1">
                    <img ref={image} className="fadeIn pagePortoflio" src={portfolio_img1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <div  className="image_page page2">
                <img ref={image2} className="fadeIn2 pagePortoflio" src={portfolio_footer} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div>

                <Link to={"/restaurant"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}>
                  <NextProject project="Restaurant" image="restaurant_home.jpg" />
                </Link>
                <ScrollToTop />

             </motion.section>
        </>
    );
}

export default Portfolio