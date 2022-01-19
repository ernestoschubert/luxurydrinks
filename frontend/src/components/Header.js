import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="home">
      <div
        className="title home"
        style={{ backgroundImage: `url("./assets/Home.jpeg")` }}
      >
        <div className="banner-text">
          <h2>EL GIN</h2>
          <h1>MÁS PREMIADO DEL MUNDO</h1>
          <Link to="/NuestrosGins"><button className="buttonHome">DESCUBRÍ MÁS</button></Link>
        </div>
         
       
      </div>
    </header>
  );
};

export default Header;
