import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menuCart, setMenuCart] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

	useEffect(() => {
		axios.get('http://localhost:4000/api/drinks')
		.then(res => setProductos(res.data.drinks))
		.catch(error => console.log(error))
	}, [])

	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item._id !== id
			
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto._id === id
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
				return prev + (item.price * item.quantity)
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


export default DataProvider
