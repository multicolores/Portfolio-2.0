import React, {useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import {useIntersection} from "react-use";
import gsap from "gsap";

import ma_tete from "./photos/ma_tete_2.jpg";
import architecture_home from "./photos/architecture_home.jpg";
import restaurant_home from "./photos/restaurant_home.jpg";
import sushi_darkmode_home from "./photos/sushi_darkmode_home.jpg";
import SpaceStar from "./photos/SpaceStar.JPG";
import Capsule from "./photos/capsule_header.jpg";
// import Design from "./photos/crypto_design.JPG";
import Portfolio from "./photos/portfolio_home.jpg";




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

function Portfolio_projects(){
  //curseur
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorHovered_clickable, setcursorHovered_clickable] = useState(false);
  const { x, y } = useMousePosition();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1.02, 1.2]);

//text apparition
  const [revealText, setRevealText] = useState({
    show: false,
    show_resto: false,
    show_architecture: false,
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
                                  <p>Ce site s'inspire grandement d'un design de site existant mais la conception de ce site 
                                      representait pour moi un chalenge interessant
                                <br></br> J'ai alors codé ce site a ma manière en React.j </p>
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
                Ce site a été réalisé en début 2020, il a été pour moi une très grande source d'apprentissage dans la mesure où une personne m'a donner des 
                  contraintes et j'ai du adapter la création de ce site en fonction. 
                  <br></br>
                  Cela a été pour moi une source d'enrichissement colossale, j'ai découvert ce qu'était la conception d'un site sur demande d'une autre personne. 
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
              <p>Ceci est un simple site sur le thème des sushi que j'ai réalisé dans le but de m'entrainer.</p>
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
              <p>Ceci est un simple site sur le thème de la voiture de Mitsubishi que j'ai réalisé pour m'entrainer.</p>

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
                Ceci est un simple site sur le thème de mail envoyer a nous même dans le future que j'ai réalisé pour m'améliorer en design.
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
              <p>Voici le site sur lequel vous êtes actuellement, il est l'un de mes projets donc je suis le plus fière.
                  <br></br> J'espère que ce site vous montre non seulement mes capacitées techniques mais aussi la passion avec laquel je crée mes sites.
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
              <Link to={"/restaurant"}>
                <img src={restaurant_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>restaurant</h2>
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
              <Link to={"/architecture"}>
                <img src={architecture_home} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Architecture</h2>
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
              <Link to={"/sushi"}>
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
              <Link to={"/spacestar"}>
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
              <Link to={"/capsule"}>
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
              <Link to={"/portfolio"}>
                <img src={Portfolio} alt="" onMouseEnter={()=> {setCursorHovered(true); setcursorHovered_clickable(true)}} onMouseLeave={()=> {setCursorHovered(false); setcursorHovered_clickable(false)}}/>
                <h2>Portfolio</h2>
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </>
    );
}

export default Portfolio_projects