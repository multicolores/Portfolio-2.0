import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home from './home';
import Restaurant from './restaurant_page';


const routes = [
  { path: "/", name: "Home", Component: Home},
  { path: "/restaurant", name: "restaurant", Component: Restaurant}
];


function App() {
  return (
    <>
      <div className="App">
        {routes.map(({path, name, Component }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
          <Route key={name} path={path} exact>
            <div className="page">
              <Component/>
            </div>
          </Route>
          </AnimatePresence>
        ))}
      </div>
    </>
  );
}

export default App;
