import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import {useIntersection} from "react-use";
import gsap from "gsap";
import NextProject from "./next_project";
import header from "../photos/crypto_design.JPG";
import image1 from "../photos/productivity.JPG";
import image_2 from "../photos/code_job.JPG";
import image_3 from "../photos/toilet.JPG";
import image_4 from "../photos/dog.JPG"
import logo from "../photos/logo.png"



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




function Design(){

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
    //   intersection && intersection.intersectionRatio < 0.4 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
    //   intersection2 && intersection2.intersectionRatio < 0.2 ? fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2");
    //   intersection3 && intersection3.intersectionRatio < 0.2 ? fadeOut(".fadeIn3") : fadeIn(".fadeIn3");
    //   intersection4 && intersection4.intersectionRatio < 0.2 ? fadeOut(".fadeIn4") : fadeIn(".fadeIn4");
    //   intersection5 && intersection5.intersectionRatio < 0.2 ? fadeOut2(".fadeIn5") : fadeIn2(".fadeIn5");


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
                <span className="home"> <img src={logo} alt=""/> </span>
                </Link>
                
                <div className="name">
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.9, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>D</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.8, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>e</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.7, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>s</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.6, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>i</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.5, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>g</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.4, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}}>n</motion.span>


                </div>



                
                <div className="image_container">
                <a href="https://mitsubishi-spacestar.netlify.app/" target="_blank"  dm_dont_rewrite_url="true">
                <img src={header} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div>
                <p className="description">Here are different website header designs that I made during a challenge that I gave myself which
                 consist of the creation in 1 hour, every day, of a home page of a site on a random theme.
                <p> Challenge which made me progress in web page design even if it is not my main domain.</p> 

                <i class="fab fa-figma"></i>
                </p>

                {/* <div className="image_page page1 image1">
                <img ref={image} className="fadeIn" src={carac} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </div> */}

                {/* <div className="image_page page2">
                  <a href="https://mitsubishi-spacestar.netlify.app/" target="_blank"  dm_dont_rewrite_url="true">
                <img ref={image5} className="fadeIn5" src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                </a>
                </div> */}

                <section className="gallery">
                    <div className="image_container">
                        <img src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={header} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image_2} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image_3} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image_4} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                    <div className="image_container">
                        <img src={image1} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
                    </div>
                </section>

                <Link to={"/restaurant/en"} onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}>
                  <NextProject project="Restaurant" image="restaurant_home.jpg" />
                </Link>
             </motion.section>
        </>
    );
}

export default Design