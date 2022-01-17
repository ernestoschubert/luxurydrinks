import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FaCartPlus, FaCompress } from 'react-icons/fa'
import { DataContext } from "../DataProvider";

const Card = ({ card }) => {
  
  const values = useContext(DataContext);
  const addCarrito = values.addCarrito;

  return (
    <>
      <div className="wrapper antialiased text-gray-900 rounded-lg">
        <div className="object-cover object-center rounded-lg shadow-xl p-5">
          <Link to={`/Gin/${card._id}`} >
            <img
              src={card.drinkImg}
              alt={card.drinkName}
              className=""
              style={{height: "40vh", margin: "auto"}}
            />
          </Link>
          <div className="relative m-auto">
            <div className="">
              <div className="flex items-center flex justify-center">
                <span className="bg-teal-200 text-teal-800 text-xs px-2 py-1 inline-block rounded-full uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 uppercase text-md font-semibold tracking-wider">
                  {card.type}
                </div>
              </div>
              <h4 className="mt-2 text-xl font-bold uppercase text-gray-900 leading-tight truncate flex justify-center">
                {card.drinkName}
              </h4>
              <div className="mt-1 flex justify-center">
                <p
                  className="text-teal-600 text-md font-semibold">
                  Price:
                  <span
                    className="text-gray-600"
                  >
                     ${card.price}  
                  </span> 
                </p>
              </div>
              <div className="mt-1 flex justify-center">
                <span className="text-teal-600 text-md font-semibold">
                  Stock:
                </span>
                <span className="text-md text-gray-600 font-semibold">
                  {" " +card.stock}
                </span>
              </div>
              <div className="mt-2  flex items-center justify-center flex-row">
                <Link to={`/Gin/${card._id}`}>
                  <button 
                    className="mx-2 text-neutral-100 font-semibold text-xl bg-red-600 rounded-lg p-3 pt-4 px-10 flex items-center justify-center flex-row no-underline"
                    style={{outline: 'none'}}
                    >
                      <FaCompress className="mr-2"/>
                      Ver mas 
                  </button>
                </Link>
                <button 
                  onClick={()=> addCarrito(card._id)} 
                  className="font-semibold text-neutral-100 text-xl"
                  >
                  <div
                      className="bg-red-600 rounded-lg p-3 pt-4 px-10 flex items-center justify-center flex-row"
                      style={{outline: 'none'}}
                      >
                      <FaCartPlus 
                        className="mr-2"
                        style={{width: '2rem', color: '#fff'}}
                      /> 
                        Agregar al carrito
                  </div>
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
