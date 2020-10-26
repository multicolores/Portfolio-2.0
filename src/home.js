import React, {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";
import {useIntersection} from "react-use";
import gsap from "gsap";

import ma_tete from "./photos/ma_tete.png";
import architecture_home from "./photos/architecture_home.PNG";
import restaurant_home from "./photos/restaurant_home.PNG";
import sushi_darkmode_home from "./photos/sushi_darkmode_home.PNG";
import SpaceStar from "./photos/SpaceStar.JPG";


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

function Home(){
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
      <header>
      <div class="container">
        <div class="nav_contain">
          <div>
            <span>F</span>
            <span>l</span>
            <span>o</span>
            <span>r</span>
            <span>i</span>
            <span>a</span>
            <span>n</span>
          </div>
        </div>
        <div class="nav_contain">
          <div>
            <span>T</span>
            <span>e</span>
            <span>l</span>
            <span>l</span>
            <span>i</span>
            <span>e</span>
            <span>r</span>
          </div>
        </div>
        <h1>Développer web</h1>
      </div>
    </header>
    <section class="biographie">
      <div class="image"
      onMouseEnter={()=> setCursorHovered(true)}
      onMouseLeave={()=> setCursorHovered(false)}
      >
        <motion.img src={ma_tete} alt="" style={{scale: scale}}/>
      </div>
      <div class="paragraphe">
<p>Je suis Florian TELLIER, développeur web, 18 ans.
  Je possède un bac S mention bien et je suis actuellement en liscence en Conception et Développement d’Application Web et Mobile.</p>
  <p>J'essaie d'amener à mes sites une touche d'originalité permettant une expérience utilisateur caractéristique dont ils se souviendrons.</p>
      </div>
    </section>
    <section class="portfolio">
      <h1>portfolio</h1>
      <div class="impair">
        <Link to={"/restaurant"}>
          <img ref={image} className="fadeIn" src={restaurant_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
          <h2>restaurant</h2>
        </Link>
      </div>
      <div class="pair">
        <Link to={"/architecture"}>
          <img ref={image2} className="fadeIn2" src={architecture_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
          <h2>Architecture</h2>
        </Link>
      </div>
      <div  class="impair">
      <Link to={"/sushi"}>
        <img ref={image3} className="fadeIn3" src={sushi_darkmode_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
        <h2>sushi</h2>
        </Link>
      </div>
      <div class="pair">
      <img ref={image4} className="fadeIn4" src={SpaceStar} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
      </div>
      <div class="impair">
      <img src={sushi_darkmode_home} alt="" onMouseEnter={()=> setCursorHovered(true)} onMouseLeave={()=> setCursorHovered(false)}/>
        <h2>restaurant</h2>
      </div>
    </section>

    <section class="contact">
      <div>
      <span>Email : </span><span> florian.tellier02@gmail.com</span>

      </div>
      <div>
      <span>Telephone : </span><span> 01 01 01 01 01</span>

      </div>
    </section>
    </motion.div>
        </>
    );
}

export default Home