import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { FaCartPlus, FaCompress } from 'react-icons/fa'
import { DataContext } from "../DataProvider";

const Card = ({ card }) => {
  
  const values = useContext(DataContext);
  const addCarrito = values.addCarrito;

  return (
    <>
<<<<<<< HEAD
      <Link to={`/Gin/${card._id}`} className="no-underline">
        <div class="max-w-2xl mx-auto">
          <div class="bg-luxury shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <img
              class="rounded-t-lg p-8"
              src={card.drinkImg}
              alt={card.drinkName}
            />
            <div class="px-5 pb-5">
              <h3 class="text-gray-50 font-semibold text-xl tracking-tight dark:text-white">
                {card.drinkName}
              </h3>
              <div class="flex items-center mt-2.5 mb-5">
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="w-5 h-5 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  5.0
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-50 dark:text-white">
                  ${card.price}
                </span>{" "}
                <span class="text-xl text-black">stock: {card.stock}</span>
                <button
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Añadir al carrito
                </button>
=======
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
>>>>>>> 616e5d81f57b867ff854572ade7425158ba9b39b
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
<<<<<<< HEAD
      </Link>
=======
      </div>
>>>>>>> 616e5d81f57b867ff854572ade7425158ba9b39b
    </>
  );
};

export default Card;
