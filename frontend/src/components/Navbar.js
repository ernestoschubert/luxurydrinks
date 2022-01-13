import { Link } from "react-router-dom";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { useState, useContext } from "react";
import { DataContext } from "../DataProvider";
import "../styles/navbar.css"
import authActions from "../redux/actions/authActions";
import { connect } from "react-redux";

const Navbar = (props) => {
  const [menu, setMenu] = useState(true)

  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menuCart, setMenuCart] = value.menuCart;


  const toogleMenu = () =>{
    setMenuCart(!menuCart)
  }
 
  const handleLogOut = () => {
    props.logOut();
  };
  
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
          <li>
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
              {!props.user ? (
                <>
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
                </>
              ) : (
                <FaSignInAlt
                  class="cursor-pointer text-5xl inline mb-2"
                  onClick={() => handleLogOut()}
                />
              )}
              {props.role === "admin" && (
                <Link
                  to="/panelAdmin"
                  class="navtexto block mt-4 lg:inline-block lg:mt-0 text-zinc-50 hover:text-white mr-4  text-base active:border-b-2 hover:border-b-2"
                >
                  Configuracion
                </Link>
              )}
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducers.user,
    role: state.authReducers.role,
  };
};

const mapDispatchToProps = {
  logOut: authActions.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
