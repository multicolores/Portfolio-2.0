import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import architecture_home from "./photos/Architecture2-home.jpg";
import restaurant_home from "./photos/restaurant_home.jpg";
import resto_gatsby_home from "./photos/Gatsby-restaurant-home.JPG"
import Blog from "./photos/Blog_home.jpg";
import sushi_darkmode_home from "./photos/sushi_darkmode_home.jpg";
import SpaceStar from "./photos/SpaceStar.JPG";
import Capsule from "./photos/capsule_header.jpg";
// import Design from "./photos/crypto_design.JPG";
import Portfolio from "./photos/portfolio_home.jpg";




function useMousePosition() {
  let [mousePosition, setMousePosition] = useState({x: -50, y: -50})

  useEffect(() => {
      function handlePosition(e){
          setMousePosition({ x: e.pageX, y:e.pageY })
      }

      window.addEventListener("mousemove", handlePosition)
      return () => window.removeEventListener("mousemove", handlePosition)
  }, [])

  return mousePosition
}

function Portfolio_projects_en(props){
  //curseur
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
  const { x, y } = useMousePosition();

  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.2]);


//text apparition
  const [revealText, setRevealText] = useState({
    show: false,
    show_resto: false,
    show_resto_gatsby: false,
    show_architecture: false,
    show_blog: false,
    show_sushi: false,
    show_SpaceStar: false,
    show_Capsule: false,
    show_portfolio: false,

    class: "r",
  });

    return(
        <>
        <motion.div 
        animate={{
          x: x-25,
          y: y-25,
          scale: cursorHovered || props.cursor ? 2.2 : 1,
        }}
        className="cursor"
        >
          <motion.span
          animate={{
            opacity: cursorHovered_clickable || props.cursorText ? 1 : 0,
          }}
          >Click</motion.span>
        </motion.div>
          <div className="portfolio_projects">

            <motion.section className="description"                    
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
              <h1>Portfolio</h1>
              <AnimatePresence>
                {revealText.show_resto && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
                                  <p>This site is largely inspired by an existing site design but the design of this site represented an interesting challenge for me
                                <br></br>Therefore I coded this site my way in React.j </p>
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_resto_gatsby && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
                                  <p>
                                  This project having for theme the a restorant was made with gatsby.js which allows to increase the site's performance for loading images for exemple.
                                       </p>
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_architecture && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
                <p>
                This project having for theme the portfolio of an architect was made with gatsby.js which allows to increase the site's performance for loading images for exemple.
                </p>
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_blog && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
                <p>
                This blog was made with Gatsby and Netlify CMS, it has an environment allowing to add new articles without making any code.
                </p>
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_sushi && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
              <p>This is a simple sushi-themed site that I made for training my skills.</p>
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_SpaceStar && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
              <p>This is a simple car-themed site that I made for training my skills.</p>

                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_Capsule && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
              <p> 
              This is a site that I made for training my skills.
              </p>
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealText.show_portfolio && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealText.class}
                  >
              <p>This is the site you are currently on, it is one of my projects that i am the most proud.
                  <br></br>  I hope this site shows you not only my technical skills but also the passion with which I create this sites.
                  </p>
                </motion.div>
                )}
              </AnimatePresence>

            </motion.section>

            <motion.div className="projects_container"
              exit={{ opacity: 0, x:"50%" }}
              transition={{ duration: 1 }}
            >
              <motion.div
              onHoverStart={()=>
              setRevealText({
                show_resto: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_show_resto: false,
                  class: "r",
                })}
              >
              <Link to={"/en/restaurant"}>
                <img src={restaurant_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>restaurant</h2>
              </Link>
              </motion.div>

              <motion.div
              onHoverStart={()=>
              setRevealText({
                show_resto_gatsby: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_show_resto: false,
                  class: "r",
                })}
              >
              <Link to={"/en/restaurant_gatsby"}>
                <img src={resto_gatsby_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>restaurant 2.0</h2>
              </Link>
              </motion.div>

              <motion.div
              onHoverStart={()=>
              setRevealText({
                show_architecture: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_architecture: false,
                  class: "r",
                })}
              >
              <Link to={"/en/architecture"}>
                <img src={architecture_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Architecture</h2>
              </Link>
              </motion.div>

              <motion.div
              onHoverStart={()=>
              setRevealText({
                show_blog: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_blog: false,
                  class: "r",
                })}
              >
              <Link to={"/en/blog"}>
                <img src={Blog} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Blog</h2>
              </Link>
              </motion.div>

            <motion.div
              onHoverStart={()=>
              setRevealText({
                show_sushi: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_sushi: false,
                  class: "r",
                })}
              >
              <Link to={"/en/sushi"}>
                <img src={sushi_darkmode_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>sushi</h2>
              </Link>
              </motion.div>

             <motion.div
              onHoverStart={()=>
              setRevealText({
                show_SpaceStar: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_SpaceStar: false,
                  class: "r",
                })}
              >
              <Link to={"/en/spacestar"}>
                <img  src={SpaceStar} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Space Star</h2>
              </Link>
              </motion.div>

            <motion.div
              onHoverStart={()=>
              setRevealText({
                show_Capsule: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_Capsule: false,
                  class: "r",
                })}
              >
              <Link to={"/en/capsule"}>
                <img src={Capsule} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Capsule</h2>
              </Link>
              </motion.div>
              
            <motion.div
              onHoverStart={()=>
              setRevealText({
                show_portfolio: true,
                class: "animated",
              })}
              onHoverEnd={()=>
                setRevealText({
                  show_portfolio: false,
                  class: "r",
                })}
              >
              <Link to={"/en/portfolio"}>
                <img src={Portfolio} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Portfolio</h2>
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </>
    );
}

export default Portfolio_projects_en