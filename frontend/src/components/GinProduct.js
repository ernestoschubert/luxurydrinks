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
        <div className="md:flex md:items-center md:justify-center items-center justify-center"
          style={{backgroundColor: '#ffffff87'}}
        >
          <div className="w-2/3 h-64 md:w-1/2 lg:h-auto ">
            {edit ? (
              <>
                <img
                  className="h-full w-full rounded-md object-cover max-w-lg m-auto"
                  src={gin.drinkImg}
                  alt={gin.drinkName}
                />
                <div className="m-auto">
                  <span>URL DE LA IMAGEN:</span>
                  <input
                    type="text"
                    defaultValue={gin.drinkImg}
                    className="w-1/3 p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm m-auto"
                    ref={drinkImg}
                  />
                </div>
              </>
            ) : (
              <img
                className="h-full w-full rounded-md object-cover max-w-lg m-auto"
                src={gin.drinkImg}
                alt={gin.drinkName}
              />
            )}
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2 text-center">
            <div className="flex flew-row justify-between">
              {favorite ? (
                <button onClick={() => handleFavorite()}>
                  <FaStar
                    className="h-10 w-10 text-yellow-600 cursor-pointer"
                  />
                </button>
              ) : (
                <button onClick={() => handleFavorite()}>
                  <FaRegStar
                    className="h-10 w-10 text-yellow-600 cursor-pointer"
                  />
                </button>
              )}
              {user && user.role === "admin" && (
                <FaEdit
                  onClick={() => setEdit(!edit)}
                  className="h-10 w-10 flex justify-self-end cursor-pointer"
                />
              )}
            </div>
            {edit ? (
              <input
                type="text"
                defaultValue={gin.drinkName}
                className="w-full p-3 mb-3 text-lg bg-white border border-gray-200 rounded shadow-sm"
                ref={drinkName}
              />
            ) : (
              <h3 className="text-gray-700 uppercase text-6xl m-10">
                {gin.drinkName}
              </h3>
            )}
            {edit ? (
              <input
                type="number"
                defaultValue={gin.price}
                className="w-full p-3 mb-3 text-lg bg-white border border-gray-200 rounded shadow-sm"
                ref={price}
              />
            ) : (
              <span className="text-gray-500 m-10 text-4xl">${gin.price}</span>
            )}
            {edit ? (
              <textarea
                type="text"
                defaultValue={gin.description}
                className="w-full p-3 mb-3 text-lg bg-white border border-gray-200 rounded shadow-sm h-36 "
                ref={description}
              />
            ) : (
              <p className="text-center m-auto w-80">{gin.description}</p>
            )}
            {edit ? (
              <p className="font-bold text-3xl ">
                Stock:
                <input
                  type="number"
                  defaultValue={gin.stock}
                  className="p-3 mb-3 text-lg bg-white border border-gray-200 rounded shadow-sm"
                  ref={stock}
                />
              </p>
            ) : (
              <p className="font-bold text-3xl ">Stock:{gin.stock}</p>
            )}
            <div className="flex justify-center m-10">
              {edit ? (
                <>
                  <FaCheckSquare
                    onClick={() => handleEdit()}
                    className="h-10 w-10 cursor-pointer"
                  />
                  <FaWindowClose
                    onClick={() => setEdit(false)}
                    className="h-10 w-10 cursor-pointer"
                  />
                </>
              ) : (
                <button className="px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded hover:bg-red-700 focus:outline-none focus:bg-indigo-500"
                  onClick={() => addCarrito(...gin._id)}
                >
                  Añadir al carrito
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
