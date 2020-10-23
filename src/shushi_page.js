import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {motion} from 'framer-motion';
import NextProject from "./next_project";
import sushi_dark from "./photos/sushi_darkmode_home.PNG";
import sushi_white from "./photos/shushi_white.JPG";
import suhsi_mobile_dark from "./photos/sushi_darkmode_mobile.png";
import suhsi_mobile_white from "./photos/suhsi_lightmode_mobile.png";



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

  



function Sushi(){


    return(
        <>
            <motion.section       
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                class="page_restaurant">
        
                <div class="name">
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.9, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>S</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.8, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>u</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.7, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>s</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.6, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>h</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 0.5, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>i</motion.span>

                </div>

                
                <div class="image_container">
                <img src={sushi_white} alt=""/>
                </div>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at dolore a temporibus voluptates!<br></br> Sint est laboriosam impedit quibusdam recusandae alias excepturi quam, omnis consectetur architecto vitae maiores dolore eius.</p>

                <div class="image_page page1 image1">
                <img src={sushi_dark} alt=""/>
                </div>
                <div className="mobile">
                <div class="image_page mobile1">
                    <img src={suhsi_mobile_dark} alt=""/>
                </div>

                <div class="image_page mobile2">
                <img src={suhsi_mobile_white} alt=""/>
                </div>
                </div>


                <Link to={"/restaurant"}>
                  <NextProject project="Restaurant" />
                </Link>
             </motion.section>
        </>
    );
}

export default Sushi