import React from "react";
import "./Nav.css";
import { render } from "react-dom";

function Nav() {
  return (
  <header>
  <div className="container">
    <h1 className="logo"></h1>

    <nav>
      
      <ul>
        <li><a href="#">Saved Reviews</a></li>
        <li><a href="#">About</a></li>
        <li><a href="/">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
    </nav>
  </div>
</header>
  )
}
export default Nav;