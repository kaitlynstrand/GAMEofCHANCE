import React from "react";
import "./Header.css"

const Header = props =>
<section className="hero">
  <div className="hero-body">
      <h1 className="title">CHORE-US</h1>

      <div className="buttons has-addons is-right">

      	<span className="button"><a href="/signin">Sign In</a></span>

      </div>

  </div>
</section>

export default Header
