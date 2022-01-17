import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="home">
      <div
        className="title home"
        style={{ backgroundImage: `url("./assets/Home.jpeg")` }}
      >
        <div className="banner-text">
          <h2>El Gin</h2>
          <h1>
            Más Premiado del<span> Mundo</span>
          </h1>
        </div>
        <button className="buttonHome">Descubrí más</button>
      </div>
    </header>
  );
};

export default Header;
