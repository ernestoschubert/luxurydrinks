import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FaCartPlus, FaCompress } from "react-icons/fa";
import { DataContext } from "../DataProvider";
import '../styles/card.css'

const Card = ({ card }) => {
  const values = useContext(DataContext);
  const addCarrito = values.addCarrito;

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "0rem",
    fontWeight: "bold",
    color: "#dc2626",
    padding: "2rem",
    marginBottom: "1rem",
    textTransform: "uppercase",
    fontSize: "2.7rem",
    borderColor: "black",
  }

  return (
    <>
      <div className="wrapper antialiased text-gray-900 rounded-lg flex flex-wrap"
      >
        <div
          className="object-cover object-center rounded-lg shadow-xl p-3"
          style={{ backgroundColor: "#ffffff82", width: '320px'}}
        >
          <Link to={`/Gin/${card._id}`}>
            <img
              src={card.drinkImg}
              alt={card.drinkName}
              className=""
              style={{ height: "30vh", margin: "auto" }}
            />
          </Link>
          <div className="relative m-auto">
            <div className="">
              <div className="flex items-center justify-center">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 inline-block rounded-full uppercase font-semibold tracking-wide">
                  Nuevo
                </span>
                <div className="ml-2 text-gray-600 uppercase text-md font-semibold tracking-wider">
                  {card.type}
                </div>
              </div>
              <h4 className="mt-2 text-xl font-bold uppercase text-gray-900 leading-tight truncate flex justify-center">
                {card.drinkName}
              </h4>
              <div className="mt-1 flex justify-center">
                <p className="text-teal-600 text-md font-semibold">
                  Precio:
                  <span className="text-gray-600">${card.price}</span>
                </p>
              </div>
              <div className="mt-1 flex justify-center">
                <span className="text-teal-600 text-md font-semibold">
                  Stock:
                </span>
                <span className="text-md text-gray-600 font-semibold">
                  {" " + card.stock}
                </span>
              </div>
              <div className="mt-2  flex items-center justify-center flex-column">
                <Link to={`/Gin/${card._id}`}>
                  <button
                    className="font-semibold py-2 px-4"
                  >
                    <p
                      className="btnCard  py-2 px-4"
                      style={{ outline: "none", boxShadow: "1px 2px 5px gray"}}
                    >
                      <FaCompress className="mr-1" />
                      Ver mas 
                    </p>
                  </button>
                </Link>
                <button
                  onClick={() => addCarrito(card._id)}
                  className="font-semibold text-neutral-100 text-md"
                >
                  <p
                    className="btnCard  py-2 px-4"
                    style={{ outline: "none", boxShadow: "1px 2px 5px gray"}}
                  >
                    <FaCartPlus
                      className="mr-2"
                    />
                    Agregar al carrito
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
