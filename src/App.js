import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {motion} from 'framer-motion';
import './App.scss';
// import useMousePosition from 'useMousePosition';
// import { Route } from 'react-router-dom';
import Home from './home';
import Restaurant from './restaurant_page';
import Architecture from './architecture_page';
import Sushi from './shushi_page';
import SpaceStar from './SpaceStar_page';
import Capsule from './Capsule';
// import Design from './design_page';
import Portfolio from './page_portfolio';


import Home_en from './home_en';
import Restaurant_en from './en/restaurant_page';
import Architecture_en from './en/architecture_page';
import Sushi_en from './en/shushi_page';
import SpaceStar_en from './en/SpaceStar_page';
import Capsule_en from './en/Capsule';
import Design_en from './en/design_page';


import ScrollToTop from "./scrollToTop";


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
                <Route path="/restaurant" exact component={Restaurant} />
                <Route path="/architecture" exact component={Architecture} />
                <Route path="/sushi" exact component={Sushi} />
                <Route path="/spacestar" exact component={SpaceStar} />
                <Route path="/capsule" exact component={Capsule} />
                {/* <Route path="/design" exact component={Design} /> */}
                <Route path="/portfolio" exact component={Portfolio} />
                

                <Route path="/en" exact component={Home_en} />
                <Route path="/restaurant/en" exact component={Restaurant_en} />
                <Route path="/architecture/en" exact component={Architecture_en} />
                <Route path="/sushi/en" exact component={Sushi_en} />
                <Route path="/spacestar/en" exact component={SpaceStar_en} />
                <Route path="/capsule/en" exact component={Capsule_en} />
                <Route path="/design/en" exact component={Design_en} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <ScrollToTop />
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
