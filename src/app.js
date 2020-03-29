import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Nav from "./nav"
import Home from "./home"
import Quotes from "./quotes"

function App() {

  return (
    <div className="app">
      <Nav/>

       <Route exact path="/">
        <Home/>
       </Route>

       <Route path="/smile">
         
      </Route>

      <Route path="/quotes">
         <Quotes/>
      </Route>

    </div>
  );

  }
export default App;