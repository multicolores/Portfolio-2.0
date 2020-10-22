import React from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ma_tete from "./photos/ma_tete.png";
import architecture_home from "./photos/architecture_home.PNG";
import restaurant_home from "./photos/restaurant_home.PNG";
import sushi_darkmode_home from "./photos/sushi_darkmode_home.PNG";


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


function Home(){
    return(
        <>
              <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
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
      <div class="image">
        <img src={ma_tete} alt=""/>
      </div>
      <div class="paragraphe">
<p>Je suis Florian TELLIER, 18ans, développeur web.
  Je possède un bac S mention bien et je suis actuellement en liscence en Conception et Développement d’Application Web et Mobile.</p>
  <p>J'essaie d'amener à mes sites une touche d'originalité permettant une expérience utilisateur caractéristique dont ils se souviendrons.</p>
      </div>
    </section>
    <section class="portfolio">
      <h1>portfolio</h1>
      <div class="impair">
        <Link to={"/restaurant"}>
          <img src={restaurant_home} alt=""/>
          <h2>restaurant</h2>
        </Link>
      </div>
      <div class="pair">
      <img src={architecture_home} alt=""/>
        <h2>Architecture</h2>
      </div>
      <div class="impair">
      <img src={sushi_darkmode_home} alt=""/>
        <h2>sushi</h2>
      </div>
      <div class="pair">
      <img src={sushi_darkmode_home} alt=""/>
        <h2>restaurant</h2>
      </div>
      <div class="impair">
      <img src={sushi_darkmode_home} alt=""/>
        <h2>restaurant</h2>
      </div>
    </section>

    <section class="contact">
      <h1>Contact</h1>
      <div class="contact_text">
        <a href="mailto:florian.tellier02@gmail.com"
          >Email: florian.tellier02@gmail.com</a
        >
        <a>Téléphone : 01 11 11 11 11</a>
        <a>France</a>
      </div>
      <div class="form">
        <form method='POST'><input type='hidden' name='form-name' value='form 1' />
          <div>
            <input type="text" name="name" id="name" required="" />
            <label class="label_text" for="name"><span>Nom</span></label>

            <input type="email" name="email" id="email" required="" />
            <label class="label_email" for="email"><span>Email</span></label>
          </div>
          <textarea
            type="message"
            name="message"
            id="message"
            required=""
            placeholder="Message ..."
          ></textarea>
          <input type="submit" value="Envoyer" class="input_button" />
        </form>
      </div>
    </section>
    </motion.div>
        </>
    );
}

export default Home