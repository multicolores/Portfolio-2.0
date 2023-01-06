import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {motion} from 'framer-motion';
import "./App.scss";
// import useMousePosition from 'useMousePosition';
// import { Route } from 'react-router-dom';
import Home from "./home";
import MuscuApp from "./muscuapp-page";
import Restaurant from "./restaurant_page";
import Restaurant_Gatsby from "./restaurant_gatsby_page";
import Blog from "./Blog_page";
import Architecture from "./architecture_page";
import Sushi from "./shushi_page";
import SpaceStar from "./SpaceStar_page";
import Capsule from "./Capsule";
// import Design from './design_page';
import Portfolio from "./page_portfolio";

import Home_en from "./home_en";
import MuscuAppen from "./muscuapp-page-en";
import Restaurant_en from "./en/restaurant_page";
import RestaurantGatsby_en from "./en/restaurant_gatsby_page";
import Architecture_en from "./en/architecture_page";
import Blog_en from "./en/Blog_page";
import Sushi_en from "./en/shushi_page";
import SpaceStar_en from "./en/SpaceStar_page";
import Capsule_en from "./en/Capsule";
import Portfolio_en from "./en/page_portfolio";
import Forum from "./forum-page";
// import Design_en from './en/design_page';

// import ScrollToTop from "./scrollToTop";

// const routes = [
//   { path: "/", name: "Home", Component: Home},
//   { path: "/restaurant", name: "restaurant", Component: Restaurant}
// ];

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          render={({ location }) => (
            //
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/forum" exact component={Forum} />
                <Route path="/muscuapp" exact component={MuscuApp} />
                <Route path="/restaurant" exact component={Restaurant} />
                <Route
                  path="/restaurant_gatsby"
                  exact
                  component={Restaurant_Gatsby}
                />
                <Route path="/blog" exact component={Blog} />
                <Route path="/architecture" exact component={Architecture} />
                <Route path="/sushi" exact component={Sushi} />
                <Route path="/spacestar" exact component={SpaceStar} />
                <Route path="/capsule" exact component={Capsule} />
                {/* <Route path="/design" exact component={Design} /> */}
                <Route path="/portfolio" exact component={Portfolio} />

                <Route path="/en" exact component={Home_en} />
                <Route path="/en/muscuapp" exact component={MuscuAppen} />
                <Route path="/en/restaurant" exact component={Restaurant_en} />
                <Route
                  path="/en/restaurant_gatsby"
                  exact
                  component={RestaurantGatsby_en}
                />
                <Route
                  path="/en/architecture"
                  exact
                  component={Architecture_en}
                />
                <Route path="/en/blog" exact component={Blog_en} />
                <Route path="/en/sushi" exact component={Sushi_en} />
                <Route path="/en/spacestar" exact component={SpaceStar_en} />
                <Route path="/en/capsule" exact component={Capsule_en} />
                <Route path="/en/portfolio" exact component={Portfolio_en} />
                {/* <Route path="/en/design" exact component={Design_en} /> */}
              </Switch>
            </AnimatePresence>
          )}
        />
        {/* <ScrollToTop /> */}
      </div>
    </Router>

    // <>
    //   <div className="App">
    //     {routes.map(({path, name, Component }) => (
    //       <AnimatePresence initial={false} exitBeforeEnter>
    //       <Route key={name} path={path} exact>
    //         <div className="page">
    //           <Component/>
    //         </div>
    //       </Route>
    //       </AnimatePresence>
    //     ))}
    //   </div>
    // </>
  );
}

export default App;
