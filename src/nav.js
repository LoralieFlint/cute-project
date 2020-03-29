import React from "react";
import "./App.css";
import { Link } from "react-router-dom";


function Nav() {

  return (
    <>
     <nav className="nav-bar">
       <h3 className="heading">Smile Every Day!</h3>
       <Link to="/" className="to">Home</Link>
       <Link to="/smile" className="to">Smile</Link>
       <Link to="quotes" className="to">Quotes</Link>
       </nav>
    </>
  );

  }
export default Nav;