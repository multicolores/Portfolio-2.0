import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import {motion} from 'framer-motion';
import restaurant_home_drink from "./photos/restaurant_home_drink.png";
import restaurant_eat from "./photos/restaurant_eat.png";
import restaurant_drink from "./photos/restaurant_drink.png";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

const title = {
    initial: {
        y: 0
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: .6,
            straggerChildren: .04,
            straggerDirection: -1,
        }
    }
}

const letter = {
    initial: {
        y: 400,
    },
    animate: {
        y: 0,
        transition: {duration: 1, ...transition}
    }

}

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
            <section class="page_restaurant">
                <motion.div variants={title} class="name">
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>s</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>u</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>t</motion.span>
                </motion.div>
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
             </section>
        </>
    );
}

export default Restaurant