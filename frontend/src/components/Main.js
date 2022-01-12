import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/main.css";
import Carrusel from "./carrusel";
import ReactPlayer from "react-player"

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
                    <p>Accede a todos nuestros productos ingresando aca</p>
                    <button className="buttonAccess">REGISTRATE</button>
                </div>

            </div>
        </div>
    );
}
export default Main;