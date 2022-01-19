import React from "react";
import "../styles/carrusel.css";

function Carrusel() {
  const carruselItems = [
    {
      id: 1,
      nombre: "BEEFEATER LONDON DRY GIN",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3558/productList/7/productList_500x753.png",
    },
    {
      id: 2,
      nombre: "BEEFEATER PINK GIN",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3561/productList/6/productList_500x753.png",
    },
    {
      id: 3,
      nombre: "BEEFEATER BLOOD ORANGE",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3560/productList/7/productList_500x753.png",
    },
    {
      id: 4,
      nombre: "BEEFEATER PEACH & RASPBERRRY",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/prod/ProductToMarket/3848/productList/4/productList_500x753.png",
    },
    {
      id: 5,
      nombre: "BEEFEATER BLACKBERRY GIN",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/prod/ProductToMarket/3647/productList/4/productList_500x753.png",
    },
    {
      id: 6,
      nombre: "BEEFEATER 24",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3562/productList/6/productList_500x753.png",
    },
    {
      id: 7,
      nombre: "BEEFEATER LONDON GARDEN",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3559/productList/7/productList_500x753.png",
    },
    {
      id: 8,
      nombre: "BEEFEATER PINK GIN & SODA",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/3883/productList/9/productList_500x753.png",
    },
    {
      id: 9,
      nombre: "BEEFEATER LIGHT",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/stage/ProductToMarket/4478/productList/1/productList_500x753.png",
    },
    {
      id: 10,
      nombre: "BURROUGH'S RESERVE",
      imagen:
        "https://s3-eu-west-1.amazonaws.com/v2.beefeatergin.com/prod/ProductToMarket/3183/productList/7/productList_500x753.png",
    },
    {
      id: 11,
      nombre: "St. PIERRE SUGAR FREE",
      imagen:
        "https://stpierregroup.com.br/admin/themes/files/uploads/99aef4c9b16841363f3d41a36ce9062c.png",
    },
    {
      id: 12,
      nombre: "St. PIERRE TONIC",
      imagen:
        "https://stpierregroup.com.br/admin/themes/files/uploads/fcd96c0fd5458851a5003a0655994acd.png",
    },
    {
      id: 13,
      nombre: "St. PIERRE PINK LEMONADE",
      imagen:
        "https://stpierregroup.com.br/admin/themes/files/uploads/233becd8f8ae1a803d4e3dc1a04642a0.png",
    },
  ];
  return (
    <div className="fondoMain">
      <div class="slider">
        <div class="slide-track">
          {carruselItems.map((bebida) => {
            if (bebida.id >= 11) {
              return (
                <div className="slide">
                  <div class="tarjeta">
                    <img
                      className="imgPierre"
                      src={bebida.imagen}
                      alt="drink"
                    />
                    <p>{bebida.nombre}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="slide">
                  <div class="tarjeta">
                    <img src={bebida.imagen} alt="image" />
                    <p id="bebida">{bebida.nombre}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Carrusel;
