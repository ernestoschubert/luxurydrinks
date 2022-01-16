import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { DataContext } from "../DataProvider";

const Card = ({ card }) => {
  
  const values = useContext(DataContext);
  const addCarrito = values.addCarrito;

  return (
    <>
      <div className="wrapper antialiased text-gray-900 ">
        <div>
          <Link to={`/Gin/${card._id}`} >
            <img
              src={card.drinkImg}
              alt={card.drinkName}
              className="object-cover object-center rounded-lg shadow-md"
              style={{width: "20vw"}}
            />
          </Link>
          <div className="relative px-4 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  {card.type}
                </div>
              </div>
              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              {card.type + " " + card.drinkName}
              </h4>
              <div className="mt-1">
                ${card.price}
              </div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  Stock:
                </span>
                <span className="text-sm text-gray-600">
                {card.stock}
                </span>
              </div>
              <div className="mt-2">
                <Link to={`/Gin/${card._id}`}><button className="mx-2 text-neutral-100 font-semibold text-xl uppercase bg-red-600 rounded-lg p-3 pt-4 px-10"> Ver mas </button></Link>
                <button onClick={()=> addCarrito(card._id)} className="font-semibold text-neutral-100 text-xl uppercase bg-red-600 rounded-lg p-3 pt-4 px-10">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
