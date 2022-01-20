import React, { useContext } from "react";
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaRegTimesCircle,
  FaTrashAlt,
} from "react-icons/fa";
import "../styles/cart.css";
import { DataContext } from "../DataProvider";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import Swal from "sweetalert2";

const Cart = () => {
  const value = useContext(DataContext);
  const [menuCart, setMenuCart] = value.menuCart;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

  const stockActualizado = (producto) => {
    const res = producto.stock - producto.quantity;
    if (res > 5) {
      return res;
    } else if (res <= 5 && res > 0) {
      return " " + res + " Ultimas unidades!!";
    } else {
      return " Sin stock";
    }
  };

  const tooglefalse = () => {
    setMenuCart(false);
  };

  const reduce = (id) => {
    carrito.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
      setCarrito([...carrito]);
    });
  };
  const increase = (id) => {
    carrito.forEach((item) => {
      if (item._id === id && item.stock > item.quantity) {
        item.quantity += 1;
      }
      setCarrito([...carrito]);
    });
  };

  const removeProducto = (id) => {
    Swal.fire({
      title: "Desea sacar el producto?",
      text: "El producto sera sacado del carrito!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Borrado",
          "El producto ha sido borrado del carrito",
          "success"
        );
        carrito.forEach((item, index) => {
          if (item._id === id) {
            item.quantity = 1;
            carrito.splice(index, 1);
          }
        });
        setCarrito([...carrito]);
      }
    });
  };

  const vaciarCarrito = () => {
    Swal.fire({
      title: "Desea vaciar el carrito?",
      text: "Todos los productos seran borrados del carrito!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar carrito!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Borrados",
          "Los productos han sido borrados del carrito",
          "success"
        );

        carrito.splice(0, carrito.length);
        setCarrito([...carrito]);
      }
    });
  };

  const show1 = menuCart ? "carritos show" : "carrito";
  const show2 = menuCart ? "carrito show" : "carrito";

  return (
    <div className={show1}>
      <div
        className={show2}
        style={{ backgroundImage: `URL('/assets/fondoMarmol.jpg')` }}
      >
        <div onClick={tooglefalse} className="carrito__close">
          <FaRegTimesCircle className="closeModel" />
        </div>
        <h2 className="carritoTitulo">Carrito de compras</h2>
        <div className="carrito__center">
          {carrito.length === 0 ? (
            <h2 className="carritoVacio">Carrito Vacio</h2>
          ) : (
            <>
              {carrito.map((producto) => (
                <div
                  className="carrito__item"
                  key={producto._id}
                  style={{ backgroundImage: `URL('/assets/fondoMarmol.jpg')` }}
                >
                  <img src={producto.drinkImg} alt={producto.drinkName} />
                  <div>
                    <h3> {producto.type + " " + producto.drinkName} </h3>
                    <p className="price">${producto.price}</p>
                    <p className="stock">
                      Stock:
                      {stockActualizado(producto)}
                    </p>
                  </div>
                  <div>
                    <button className="arrowButton">
                      <FaArrowAltCircleUp
                        className="arrowStyle"
                        onClick={() => increase(producto._id)}
                      />
                    </button>
                    <p className="cantidad">{producto.quantity}</p>
                    <button className="arrowButton">
                      <FaArrowAltCircleDown
                        className="arrowStyle"
                        onClick={() => reduce(producto._id)}
                      />
                    </button>
                  </div>
                  <div className="remove__item">
                    <FaTrashAlt
                      className="removeSvg"
                      onClick={() => removeProducto(producto._id)}
                    />
                  </div>
                </div>
              ))}
              ;
            </>
          )}
        </div>

        <div className="carrito__footer">
          <h3 className="mb-2">Total: ${total}</h3>
          <div className="btnCont">
            <div
              className="flex justify-center items-center"
              style={{ height: "130px" }}
            >
              <PaypalCheckoutButton />
            </div>
            <button
              className="btn flex flex-col"
              onClick={() => vaciarCarrito()}
            >
              <div className="flex flex-row items-center justify-center">
                <FaTrashAlt className="removeSvg" />
                <p className="ml-2">Vaciar</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;