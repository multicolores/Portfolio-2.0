import React from 'react';
// import { gsap } from "gsap";
// import {motion} from 'framer-motion';
// import Sushi from "./photos/sushi_darkmode_home.jpg";

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
            <section className="next_project">
                <span>Project suivant</span>
                <h1>{props.project}</h1>
                <div className="img_container">
                    <img src={images[props.image]} alt=""/>
                </div>
            </section>
        </>
    );
}

export default NextProject