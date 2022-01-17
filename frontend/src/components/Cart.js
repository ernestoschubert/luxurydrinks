import React, { useContext } from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown, FaRegTimesCircle, FaTrashAlt } from "react-icons/fa";
import '../styles/cart.css'
import { DataContext } from '../DataProvider';

const Cart = () => {

    const value = useContext(DataContext);
    const [menuCart, setMenuCart] = value.menuCart;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;

    const stockActualizado = (producto) => {
        const res = producto.stock - producto.quantity
        if(res > 5) {
            return res
        } else if(res <= 5 && res > 0) {
           return " " + res + " Ultimas unidades!!"
        } else {
            return " Sin stock"
        }
        

    }

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
                if(item._id === id && item.stock > item.quantity){
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
              <FaRegTimesCircle className='closeModel'/>
            </div>
            <h2 className='carritoTitulo'>Carrito de compras</h2>
            <div className="carrito__center">
            {
                        
                        
            carrito.length === 0 ? <h2 className='carritoVacio'>Carrito Vacio</h2> :
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
                            <p className="stock">
                                Stock: 
                            {   
                                stockActualizado(producto)
                            }

                            </p>
                        </div>
                        <div>
                            <button className='arrowButton'>
                                <FaArrowAltCircleUp
                                    className='arrowStyle'
                                    onClick={() => increase(producto._id)}
                                />
                            </button>
                            <p className="cantidad">
                                {producto.quantity}
                            </p>
                            <button className='arrowButton'>
                                <FaArrowAltCircleDown
                                    className='arrowStyle'
                                    onClick={() => reduce(producto._id)} 
                                />
                            </button>
                        </div>
                        <div className="remove__item">
                            <FaTrashAlt 
                                className='removeSvg'  
                                onClick={() => removeProducto(producto._id)} 
                            />
                        </div>
                    </div>
                            ))
                        };
                        
                </>
            }
            </div>
    
            <div className="carrito__footer">
              <h3 className="mb-2">Total: ${total.toFixed(2)}</h3>
              <button className="btn">Comprar</button>
            </div>
          </div>
        </div>
      );
}

export default Cart
