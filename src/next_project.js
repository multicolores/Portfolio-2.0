import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import {motion} from 'framer-motion';



function NextProject(props){
    return(
        <>
            <section className="next_project">
                <span>Project suivant</span>
                <h1>{props.project}</h1>
            </section>
        </>
    );
}

export default NextProject