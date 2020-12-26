import React from 'react';
// import { gsap } from "gsap";
import {motion} from 'framer-motion';
// import Sushi from "./photos/sushi_darkmode_home.jpg";






const pageVariants = {
  initial: {
  },
  in: {
  },
  out: {
    y: 400,
  },
};
const pageTransition = {
  duration: 1,
  // ease: "anticipate",
};



// importer toutes les images d'un coup et tous les affichers
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./photos", false, /\.(png|jpe?g|svg|JPG)$/)
);

function NextProject(props){


    return(
        <>
            <motion.section className="next_project"
                                                            initial="initial"
                                                            animate="in"
                                                            exit="out"
                                                            variants={pageVariants}
                                                            transition={pageTransition}
>
                <span>Project suivant</span>
                <h1>{props.project}</h1>
                <div className="img_container">
                    <img src={images[props.image]} alt=""

                    />
                </div>
            </motion.section>
        </>
    );
}

export default NextProject