import { connect } from "react-redux";
import productActions from "../redux/actions/productAction";
import { useEffect, useContext } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider";

import Loader from "../components/Loader";
import GinProduct from "../components/GinProduct";

const Gin = (props) => {
  
  const { products, fetchProducts } = props;
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;

  const id = props.params.id;
  useEffect(() => {
    fetchProducts();
  }, []);

  const currentGin = products.find((product) => product._id === id);

  const relatedProducts = products.splice(0, 4);

  return (
    <>
      <main class="flex justify-center items-center"
            style={{ backgroundImage: `URL('/assets/fondoMarmol.jpg')` }}
      >
        <div class="my-8">
          <div class="flex">
            <FaAngleLeft />
            <Link to="/NuestrosGins">
              <h3 className="text-gray-600 font-semibold">Volver a la tienda</h3>
            </Link>
          </div>
          {!currentGin ? (
            <Loader />
          ) : (
            currentGin && <GinProduct currentGin={currentGin} />
          )}
          <div class="mt-16">
            <h3 class="text-gray-600 text-2xl font-semibold">Mas productos</h3>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
              {relatedProducts &&
                relatedProducts.map((product, index) => (
                  <a href={`/Gin/${product._id}`} key={index}>
                    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                      <div
                        class="flex items-end justify-end h-56 w-full bg-cover bg-center "
                        style={{ backgroundImage: `url(${product.drinkImg})` }}
                      >
                        <button class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                          onClick={() => addCarrito(product._id)}
                        >
                          <svg
                            class="h-5 w-5"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="px-5 py-3">
                        <h3 class="text-gray-700 uppercase">
                          {product.drinkName}
                        </h3>
                        <span class="text-gray-500 mt-2">${product.price}</span>
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productsReducer.products,
  };
};

const mapDispatchToProps = {
  fetchProducts: productActions.fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gin);
