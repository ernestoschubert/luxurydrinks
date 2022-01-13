import React, { useContext } from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRegTimesCircle } from "react-icons/fa";
import '../styles/cart.css'
import { DataContext } from '../DataProvider';

const Cart = () => {

    const value = useContext(DataContext);
    const [menuCart, setMenuCart] = value.menuCart;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const tooglefalse = () => {
        setMenuCart(false);
        };
        
        const reduce = id =>{
            carrito.forEach(item =>{
                if(item._id === id){
                    item.quantity === 1 ? item.quantity = 1: item.quantity -=1;
                }
                setCarrito([...carrito])
            })
        }
        const increase = id =>{
            carrito.forEach(item =>{
                if(item._id === id){
                    item.quantity +=1;
                }
                setCarrito([...carrito])
            })
        }
    
        const removeProducto = id =>{
            if(window.confirm("¿Quieres suspender el producto?")){
                carrito.forEach((item, index)=>{
                    if(item._id === id){
                        item.quantity = 1;
                        carrito.splice(index, 1)
                    }
                })
                setCarrito([...carrito])
            }
        }
    
      const show1 = menuCart ? "carritos show" : "carrito";
        const show2 = menuCart ? "carrito show" : "carrito";
        
    
    
      return (
        <div className={show1}>
          <div className={show2}>
            <div onClick={tooglefalse} className="carrito__close">
              <FaRegTimesCircle />
            </div>
            <h2>Su Carrito</h2>
            <div className="carrito__center">
            {
                        
                        
            carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :
                <>
                {
                carrito.map((producto) => (
                    <div className="carrito__item" key={ producto._id }>
                        <img src={ producto.drinkImg } alt={ producto.drinkName } />
                        <div>
                            <h3> { producto.type + " " + producto.drinkName} </h3>
                            <p className="price">
                                ${producto.price}
                            </p>
                        </div>
                        <div>
                            <FaArrowAltCircleUp
                                onClick={() => increase(producto._id)}
                            />
                            <p className="cantidad">
                                {producto.quantity}
                            </p>
                            <FaArrowAltCircleDown
                                onClick={() => reduce(producto._id)} 
                            />
                        </div>
                        <div 
                            onClick={() => removeProducto(producto._id)} 
                            className="remove__item"
                        >
                            <FaRegTimesCircle />
                        </div>
                    </div>
                            ))
                        };
                        
                </>
            }
            </div>
    
            <div className="carrito__footer">
              <h3>Total: ${total}</h3>
              <button className="btn">Payment</button>
            </div>
          </div>
        </div>
      );
}

export default Cart
