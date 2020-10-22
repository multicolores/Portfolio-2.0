import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
// import { Route } from 'react-router-dom';
import Home from './home';
import Restaurant from './restaurant_page';
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
