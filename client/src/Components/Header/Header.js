import React from "react";
import "./Header.css"

const Header = props =>
<section className="hero">
  <div className="hero-body">
      <h1 className="title">Game Of Chance</h1>
      	    {props.children}
  </div>
</section>

export default Header
