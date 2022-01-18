import { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { DataContext } from "../DataProvider";
import productActions from "../redux/actions/productAction";
import "../styles/main.css";
import productAction from "../redux/actions/productAction";
import "../styles/carrusel.css"

const NuestrosGins = (props) => {
  const [price, setPrice] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const { filterProducts, fetchProducts, auxiliar, loading, products } = props;

  const value = useContext(DataContext);
  const [productos] = value.productos;

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePrice = () => {
<<<<<<< HEAD
    setPrice(!price);
    filterProducts("price", products, price);
  };
  const handleAlpha = () => {
    setAlpha(!alpha);
    filterProducts("alpha", products, alpha);
  };
  return (
    <div>
      <div className="tiendaHeader">
          <h1 className="tittleTienda">Nuestros Gins</h1>
        </div>
    <div class="flex items-center justify-center flex-col fondo-ladrillos">
      <div class="w-72 m-4">
        <div class="flex items-center justify-between">
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded">
                <input
                  onChange={(e) =>
                    filterProducts("search", products, e.target.value)
                  }
                  type="search"
                  class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => handlePrice()}
            class="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 "
          >
            Price{price ? "⬆" : "⬇"}
          </button>
          <button
            onClick={() => handleAlpha()}
            class="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 m-2"
          >
            {alpha ? "AZ" : "ZA"}
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center">
=======
    setPrice(!price)
    filterProducts("price", productos, price)
  }
  const handleAlpha = () => {
    setAlpha(!alpha)
    filterProducts("alpha", productos, alpha)
  }
  return (
    <div class="flex items-center justify-center flex-col"
      style={{backgroundImage: `URL('/assets/fondoMarmol.jpg')`}}
    >
      <div class="w-72 m-4">
        <div class="relative flex items-center justify-center">
        <input type="text" class="px-10 py-3 w-100 rounded-lg mr-2" 
        placeholder="Search..."
        onChange={(e) => filterProducts("search", productos, e.target.value)}
        />
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
            <button onClick={() => handlePrice()} class="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 ">Price{price ? "⬆": "⬇"}</button>
            <button onClick={() => handleAlpha()} class="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 m-2">{alpha ? "AZ": "ZA"}</button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 place-content-center mb-4">
>>>>>>> 616e5d81f57b867ff854572ade7425158ba9b39b
        {loading ? (
          <Loader />
        ) : (
          auxiliar &&
          auxiliar.map((card, index) => <Card card={card} key={index} />)
        )}
      </div>
<<<<<<< HEAD
    </div>
    </div>
=======
  </div>
>>>>>>> 616e5d81f57b867ff854572ade7425158ba9b39b
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.productsReducer.loading,
    products: state.productsReducer.products,
    auxiliar: state.productsReducer.auxiliar,
  };
};

const mapDispatchToProps = {
  filterProducts: productActions.filterProducts,
  fetchProducts: productActions.fetchProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(NuestrosGins);
