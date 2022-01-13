import { Link } from "react-router-dom";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { useState, useContext } from "react";
import { DataContext } from "../DataProvider";
import "../styles/navbar.css"

const Navbar = () => {
  // const [dropdown, setDropdown] = useState(false)
  const [menu, setMenu] = useState(true)

  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menuCart, setMenuCart] = value.menuCart;


  const toogleMenu = () =>{
    setMenuCart(!menuCart)
  }
 

  return (


    <nav class="sticky flex items-center justify-between flex-wrap bg-red-600 p-2">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src="/assets/luxuriuslogo.png" alt="logo" class="w-30 h-20" />
        </Link>
      </div>
      <div className="cart" onClick={toogleMenu}>
        <FaShoppingCart class="text-5xl" />
        <span className="item__total"> 
           {carrito.length}
        </span>
      </div>
      <div class="block lg:hidden">
        <button
          onClick={() => setMenu(!menu)}
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-10 w-10"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="relative w-full flex flex-grow lg:flex lg:items-end lg:w-auto lg:flex-col">
        <ul class="m-2 flex  ">
          {/* <li class="mr-4">
            <img
              src="/assets/social/icon-white-yt.png"
              alt="youtube"
              class="w-30 h-30"
            />
          </li>
          <li class="mr-4">
            <img
              src="/assets/social/icon-white-fb.png"
              alt="facebook"
              class="w-30 h-30"
            />
          </li>
          <li class="mr-4">
            <img
              src="/assets/social/icon-white-ig.png"
              alt="instagram"
              class="w-30 h-30"
            />
          </li> */}
          <li>

            {/* <div
              class="flex space-x-5 cursor-pointer padding-2"
              onClick={() => setDropdown(!dropdown)}
            >
              <div class="relative top-0 right-10">
                <FaShoppingCart class="text-5xl" />
                <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div class="min-w-[.5rem] inline-flex items-center justify-center h-5 text-xl text-white bg-yellow-500 rounded-full px-1">
                    2
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? (
              <>
                <div class="absolute p-10 w-full  rounded-b border-t-0 z-10">
                  <div class="shadow-xl w-64">
                    <div class="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                      <div class="p-2 w-12">
                        <img
                          src="https://dummyimage.com/50x50/bababa/0011ff&amp;text=50x50"
                          alt="img product"
                        />
                      </div>
                      <div class="flex-auto text-sm w-32">
                        <div class="font-bold">Product 1</div>
                        <div class="truncate">Product 1 description</div>
                        <div class="text-gray-400">Qt: 2</div>
                      </div>
                      <div class="flex flex-col w-18 font-medium items-end">
                        <div class="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                          <FaTrashAlt />
                        </div>
                        $12.22
                      </div>
                    </div>

                    <div class="p-4 justify-center flex">
                      <button
                        class="btn-menu text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
                      >
                        Checkout $36.66
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : null} */}
          </li>
        </ul>
        {menu ? (
              <>
        <div class="lg:flex-grow">
          <Link
            to="/"
            class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
            >
            Home
          </Link>
          <Link
            to="/Nosotros"
            class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4 text-base active:border-b-2 hover:border-b-2"
            >
            Nosotros
          </Link>
          <Link
            to="/NuestrosGins"
            class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
            >
            Nuestros Gins
          </Link>
          <Link
            to="/Cocktails"
            class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
            >
            Cocktails
          </Link>
          <Link
            to="/Registrarse"
            class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
            >
            Registrate
          </Link>
          <Link
            to="/Loguearse"
            class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
            >
            Ingresa
          </Link>
          
        </div>
        </>) : null}
      </div>
      
    </nav>

  )
}

export default Navbar
