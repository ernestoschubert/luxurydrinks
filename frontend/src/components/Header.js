import React from "react";
import "../styles/header.css";


const Header = () => {
  return (
    
    <header className="home">
      <div className="title home"  style={{backgroundImage: `url("./assets/Home.jpeg")`}}>
        <div className="banner-text">
          <h2>EL GIN</h2>
          <h1>MÁS PREMIADO DEL<span> MUNDO</span></h1>
        </div>
         <button className="buttonHome">DESCUBRÍ MÁS</button>
       
      </div>
    </header>
   
    
  );
};

export default Header;
