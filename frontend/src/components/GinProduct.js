import useCounter from "../hooks/useCounter";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

const GinProduct = ({ currentGin }) => {
  const [favorite, setFavorite] = useState(false);
  const counter = useCounter(0, currentGin.stock);
  const { aumentar, disminuir, value } = counter;

  const handleFavorite = () => {
    setFavorite(!favorite);
  };
  console.log(currentGin)
  return (
    <div class="md:flex md:items-center">
      <div class="w-full h-64 md:w-1/2 lg:h-auto border ">
        <img
          class="h-full w-full rounded-md object-cover max-w-lg mx-auto"
          src={currentGin.drinkImg}
          alt={currentGin.drinkName}
        />
      </div>
      <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 text-center">
        {favorite ? (
          <FaStar
            onClick={() => handleFavorite()}
            class="h-10 w-10 text-yellow-500 cursor-pointer"
          />
        ) : (
          <FaRegStar
            onClick={() => handleFavorite()}
            class="h-10 w-10 text-yellow-500 cursor-pointer"
          />
        )}
        <h3 class="text-gray-700 uppercase text-6xl m-10">
          {currentGin.drinkName}
        </h3>
        <span class="text-gray-500 m-10 text-4xl">${currentGin.price}</span>
        <p>{currentGin.description}</p>
        <div class="m-10 flex flex-col items-center">
          <label class="text-gray-700 text-xl">Cantidad:</label>
          <div class=" h-10 w-32 flex">
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 items-center">
              <button
                onClick={disminuir}
                class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span class="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                class=" focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                defaultValue="0"
                value={value}
              />
              <button
                onClick={aumentar}
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              >
                <span class="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center m-10">
          <button class="px-20 py-4 bg-red-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GinProduct;
