import React from "react";
import "../styles/header.css"

const Header = () => {
  return (
    <header className="home">
      <div className="title home"  style={{backgroundImage: `url("./assets/Home.jpeg")`}}>
        <h1>EL GIN MÁS PREMIADO DEL MUNDO</h1>
         <button className="buttonHome">Descubrí más</button>
       
      </div>
    </header>
  );
};

export default Header;
