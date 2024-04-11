import React from "react";
import logoImg from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Restaurant logo" />
        <h1>Pet-Pooja</h1>
      </div>
      <nav>
        <button className="button">Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
