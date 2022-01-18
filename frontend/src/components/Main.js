import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/main.css";
import Carrusel from "./carrusel";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function Main() {

    return (
        <div>

            <div className="fondoMain">
                <Carrusel />
            </div>
            <div className="mainvideo">
                <div className="video">
                    <ReactPlayer
                        url={require("./Beefeater_.mp4")}
                        width='100%'
                        heigth='100%'
                        playing
                        repeat
                        muted
                        loop
                    />
                </div>
                <div className="textCall">
                    <p>ACCEDÉ A TODOS NUESTROS PRODUCTOS INGRESANDO ACÁ</p>
                    <Link to="/Registrarse"><button className="buttonAccess">REGISTRATE</button></Link>
                </div>

            </div>
            <div className="mainCocktail">
                <div class="bg-transparent p-0">
                    <div class="md:flex p-20">
                        <div class="md:w-6/12 text-white bg-red-600 p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
                            <div>
                                <h1 class="textCoctel mb-5 font-bold">HOT NEGRONI</h1>
                                <h2 class="textCoctel mb-12">"EMPIEZA EL 2022 DISFRUTANDO DE UN BEEFEATER GIN HOT NEGRONI".</h2>
                                
                            </div>
                        </div>
                        <div class="md:w-6/12 relative">
                            <div class=" w-full h-full opacity-60 absolute sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"></div>
                            <img class="h-full w-full object-cover sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg" src="https://i.imgur.com/GwKabhP.jpg" width="20%" alt="Banner Desktop" />
                        </div>
                    </div>
                    <div class="md:flex p-20">
                        <div class="md:w-6/12 relative">
                            <div class=" w-full h-full opacity-60 absolute sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"></div>
                            <img class="h-full w-full object-cover sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg" src="https://i.imgur.com/vASf97N.jpg" width="20%" alt="Banner Desktop" />
                        </div>
                        <div class="md:w-6/12 text-white bg-red-600 p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
                            <div>
                                <h1 class="textCoctel mb-5 font-bold">SMASHING BASIL PUNCH</h1>
                                <h2 class="textCoctel mb-12">"EL DELICIOSO SABOR DE LA ALBAHACA Y EL GIN".</h2>
                                
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    );
}
export default Main;
