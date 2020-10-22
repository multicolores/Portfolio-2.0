import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import {motion} from 'framer-motion';
import restaurant_home_drink from "./photos/restaurant_home_drink.png";
import restaurant_eat from "./photos/restaurant_eat.png";
import restaurant_drink from "./photos/restaurant_drink.png";


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

  



const title = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};


const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 3, ...transition },
    },
  };

function Restaurant(){
    // let title = useRef(null);

    // // useEffect(() => {
    // //     gsap.from([title], 0.8, {
    // //         delay: 0.8,
    // //         ease: "power3.out",
    // //         y: 64,
    // //         stragger: {
    // //             amount:0.15
    // //         }
    // //     });
    // // }, [title]);

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
                  {/* <motion.h2 initial={{y: 200}} animate={{y: 0}} transition={{delay: 0.5, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>Restaurant</motion.h2> */}
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.4, duration: 1.9, ease: [0.6, 0.01, -0.05, 0.9]}}>R</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.3, duration: 1.8, ease: [0.6, 0.01, -0.05, 0.9]}}>e</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.2, duration: 1.7, ease: [0.6, 0.01, -0.05, 0.9]}}>s</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1.1, duration: 1.6, ease: [0.6, 0.01, -0.05, 0.9]}}>t</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: 1, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9]}}>a</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .9, duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}}>u</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .8, duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9]}}>r</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .7, duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9]}}>a</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .6, duration: 1.1, ease: [0.6, 0.01, -0.05, 0.9]}}>n</motion.span>
                <motion.span initial={{y: 400}} animate={{ y: 0}} transition={{delay: .5, duration: 1, ease: [0.6, 0.01, -0.05, 0.9]}}>t</motion.span>
               
                </div>

                
                <div class="image_container">
                <img src={restaurant_home_drink} alt=""/>
                </div>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus at dolore a temporibus voluptates!<br></br> Sint est laboriosam impedit quibusdam recusandae alias excepturi quam, omnis consectetur architecto vitae maiores dolore eius.</p>

                <div class="image_page page1">
                    <img src={restaurant_eat} alt=""/>
                </div>

                <div class="image_page page2">
                <img src={restaurant_drink} alt=""/>
                </div>
             </motion.section>
        </>
    );
}

export default Restaurant