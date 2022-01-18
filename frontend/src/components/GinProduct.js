import useCounter from "../hooks/useCounter";
import {
  FaStar,
  FaRegStar,
  FaEdit,
  FaCheckSquare,
  FaWindowClose,
} from "react-icons/fa";
import React, { useState, useContext, useRef } from "react";
import { DataContext } from "../DataProvider";
import { connect } from "react-redux";
import productActions from "../redux/actions/productAction";
import Swal from "sweetalert2";

const GinProduct = ({ currentGin, user, editAProduct }) => {
  const [favorite, setFavorite] = useState(false);
  const [edit, setEdit] = useState(false);
  const [gin, setGin] = useState(currentGin);
  const drinkName = useRef();
  const price = useRef();
  const stock = useRef();
  const description = useRef();
  const drinkImg = useRef();

  const counter = useCounter(0, currentGin.stock);
  const { aumentar, disminuir, value } = counter;

  const values = useContext(DataContext);
  const addCarrito = values.addCarrito;

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  const handleEdit = () => {
    const product = {
      drinkName: drinkName.current.value,
      price: price.current.value,
      stock: stock.current.value,
      description: description.current.value,
      drinkImg: drinkImg.current.value,
    };
    editAProduct(currentGin._id, product, user.token).then((res) => {
      if (!res.success) return;
      Swal.fire("Editado correctamente!", "", "success");
      setGin(res.drink);
    });
    setEdit(false);
  };

  return (
    <>
      {gin && (
        <div class="md:flex md:items-center md:justify-center">
          <div class="w-2/3 h-64 md:w-1/2 lg:h-auto ">
            {edit ? (
              <>
                <img
                  class="h-full w-full rounded-md object-cover max-w-lg m-auto"
                  src={gin.drinkImg}
                  alt={gin.drinkName}
                />
                <div class="m-auto">
                  <span>URL DE LA IMAGEN:</span>
                  <input
                    type="text"
                    defaultValue={gin.drinkImg}
                    class="w-1/3 p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm m-auto"
                    ref={drinkImg}
                  />
                </div>
              </>
            ) : (
              <img
                class="h-full w-full rounded-md object-cover max-w-lg m-auto"
                src={gin.drinkImg}
                alt={gin.drinkName}
              />
            )}
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
            {user && user.role === "admin" && (
              <FaEdit
                onClick={() => setEdit(!edit)}
                class="h-10 w-10 cursor-pointer"
              />
            )}
            {edit ? (
              <input
                type="text"
                defaultValue={gin.drinkName}
                class="w-full p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                ref={drinkName}
              />
            ) : (
              <h3 class="text-gray-700 uppercase text-6xl m-10">
                {gin.drinkName}
              </h3>
            )}
            {edit ? (
              <input
                type="number"
                defaultValue={gin.price}
                class="w-full p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                ref={price}
              />
            ) : (
              <span class="text-gray-500 m-10 text-4xl">${gin.price}</span>
            )}
            {edit ? (
              <textarea
                type="text"
                defaultValue={gin.description}
                class="w-full p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36 "
                ref={description}
              />
            ) : (
              <p class="text-left ">{gin.description}</p>
            )}
            {edit ? (
              <p class="font-bold text-3xl ">
                Stock:
                <input
                  type="number"
                  defaultValue={gin.stock}
                  class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm"
                  ref={stock}
                />
              </p>
            ) : (
              <p class="font-bold text-3xl ">Stock:{gin.stock}</p>
            )}
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
              {edit ? (
                <>
                  <FaCheckSquare
                    onClick={() => handleEdit()}
                    class="h-10 w-10 cursor-pointer"
                  />
                  <FaWindowClose
                    onClick={() => setEdit(false)}
                    class="h-10 w-10 cursor-pointer"
                  />
                </>
              ) : (
                <button class="px-20 py-4 bg-red-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                  Comprar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducers.user,
  };
};

const mapDispatchToProps = {
  editAProduct: productActions.editAProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(GinProduct);
