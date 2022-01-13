import React, { createContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import productAction from './redux/actions/productAction'

export const DataContext = createContext();

const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menuCart, setMenuCart] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

  useEffect(() => {
        props.fetchProducts()
		const producto = props.products
		if(producto){
			setProductos(producto)
		} else {
			setProductos([])
		}
	}, []);
	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])

	const value = {
		productos : [productos],
		menuCart: [menuCart, setMenuCart],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};

const mapStateToProps = state => {
    return {
        products: state.productsReducer.auxiliar
    }
}

const mapDispatchToProps =  {
    fetchProducts: productAction.fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(DataProvider)
