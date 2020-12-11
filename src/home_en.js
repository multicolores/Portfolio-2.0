import React, {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion,  useViewportScroll, useTransform } from "framer-motion";
import {useIntersection} from "react-use";
import gsap from "gsap";

import ma_tete from "./photos/ma_tete.jpg";
import architecture_home from "./photos/architecture_home.jpg";
import restaurant_home from "./photos/restaurant_home.jpg";
import sushi_darkmode_home from "./photos/sushi_darkmode_home.jpg";
import SpaceStar from "./photos/SpaceStar.JPG";
import Capsule from "./photos/capsule_header.jpg";
import Design from "./photos/crypto_design.JPG";



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

function Home_en(){
  //curseur
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
  const { x, y } = useMousePosition();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.2]);

  //! animation apparition on scroll
  const image = useRef(null);
  const image2 = useRef(null);
  const image3 = useRef(null);
  const image4 = useRef(null);

    const intersection = useIntersection(image, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    });
    const intersection2 = useIntersection(image2, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    });
    const intersection3 = useIntersection(image3, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    });
    const intersection4 = useIntersection(image4, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    });


  const fadeIn= element => {
    gsap.to(element, .8, {
      opacity: 1,
      x: 0,
      // filter: "blur(0px)",
      stragger: {
        amount: .3
      }
    });
  }; 
  const fadeOut= element => {
    gsap.to(element, .8, {
      opacity: 0,
      x: -60,
      // filter: "blur(4px)",
      ease: "power4.out",
    });
  };
  const fadeIn2= element => {
    gsap.to(element, .8, {
      opacity: 1,
      x: 0,
      // filter: "blur(0px)",
      stragger: {
        amount: .3
      }
    });
  }; 
  const fadeOut2= element => {
    gsap.to(element, .8, {
      opacity: 0,
      x: 60,
      // filter: "blur(4px)",
      ease: "power4.out",
    });
  };

    intersection && intersection.intersectionRatio < 0.3 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
    intersection2 && intersection2.intersectionRatio < 0.3 ? fadeOut2(".fadeIn2") : fadeIn2(".fadeIn2");
    intersection3 && intersection3.intersectionRatio < 0.3 ? fadeOut(".fadeIn3") : fadeIn(".fadeIn3");
    intersection4 && intersection4.intersectionRatio < 0.3 ? fadeOut2(".fadeIn4") : fadeIn2(".fadeIn4");

    return(
        <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="home"
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
          }}
          >Click</motion.span>
        </motion.div>

          <div className="langue">
          <Link to={"/"}>
          <span>fr</span> <span className="active_langue"> en</span>
          </Link>
          </div>
        {/* <div className="bg_div"></div> */}
      <header>
      <div className="container">
        <div className="nav_contain">
          <div>
            <span className="span-4">F</span>
            <span className="span-3">l</span>
            <span className="span-2">o</span>
            <span className="span-1">r</span>
            <span className="span-2">i</span>
            <span className="span-3">a</span>
            <span className="span-4">n</span>
            
          </div>
        </div>
        <div className="nav_contain">
          <div>
            <span className="span-4">T</span>
            <span className="span-3">e</span>
            <span className="span-2">l</span>
            <span className="span-1">l</span>
            <span className="span-2">i</span>
            <span className="span-3">e</span>
            <span className="span-4">r</span>

          </div>
        </div>
        <h1>Web Developer</h1>
      </div>
    </header>
    <section className="biographie">
      <div className="image"
      onMouseEnter={()=> setCursorHovered(true)}
      onMouseLeave={()=> setCursorHovered(false)}
      >
        <motion.img src={ma_tete} alt="" style={{scale: scale}}/>
      </div>
      <div className="paragraphe">
<p>Hello, I am Florian TELLIER an 18 years old junior web developer.
I have a mention well baccalaureate S and I am currently in higher education in Conception and Development of web and Mobile Application.</p>
  <p>I try to get on my sites an original touch in order to get a user experience they will remember.</p>
  <i className="fab fa-html5"></i> <i className="fab fa-css3-alt"></i> <i className="fab fa-js"></i> <i className="fab fa-sass"></i> <i className="fab fa-react"></i><i class="fab fa-figma"></i>
  
      </div>
    </section>
    <section className="portfolio">
      <h1>portfolio</h1>
      <div className="impair">
        <Link to={"/restaurant/en"}>
          <img ref={image} className="fadeIn" src={restaurant_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
          <h2>restaurant</h2>
        </Link>
      </div>
      <div className="pair">
        <Link to={"/architecture"}>
          <img ref={image2} className="fadeIn2" src={architecture_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
          <h2>Architecture</h2>
        </Link>
      </div>
      <div  className="impair">
      <Link to={"/sushi"}>
        <img ref={image3} className="fadeIn3" src={sushi_darkmode_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
        <h2>sushi</h2>
        </Link>
      </div>

      <div className="pair">
      <Link to={"/spacestar"}>

      <img ref={image4} className="fadeIn4" src={SpaceStar} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
      <h2>Space Star</h2>
      </Link>
      </div>

      <div className="impair">
      <Link to={"/capsule"}>

      <img src={Capsule} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
        <h2>Capsule</h2>
      </Link>
      </div>

      <div className="pair">
      <Link to={"/design"}>

      <img src={Design} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
      <h2>Desgin</h2>
      </Link>
      </div>

    </section>

    <section className="a_propos">
          <div>
            <p>I don't have accumulated a lot of experience yet even though I am passionate about creating websites for several years already. 
                I get involved in all the projects I do because I always want to improve and I am motivated to bring your brand the site it needs.
               </p>
               <p>I am alwayse looking for new project, don't be shy to contact me if you think we could create something great together.</p>
          </div>
    </section>
    <section className="contact">
      <div>
      <a href="mailto:florian.tellier02@gmail.com" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}><span>Email : </span><span> florian.tellier02@gmail.com</span></a>
      </div>
      <div>
      <a href="tel:01010101" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}><span>Phone : </span><span> 01 01 01 01 01</span></a>
      </div>
    </section>

    </motion.div>
        </>
    );
}

export default Home_en