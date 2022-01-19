import { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { DataContext } from "../DataProvider";
import productActions from "../redux/actions/productAction";
import "../styles/main.css";
import productAction from "../redux/actions/productAction";
import "../styles/carrusel.css";

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
    setPrice(!price);
    filterProducts("price", productos, price);
  };
  const handleAlpha = () => {
    setAlpha(!alpha);
    filterProducts("alpha", productos, alpha);
  };
  return (
    <div
      className="flex items-center justify-center flex-col"
      style={{ backgroundImage: `URL('/assets/fondoMarmol.jpg')` }}
    >
      <div className="w-72 m-4">
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            className="rounded-lg mr-2 border-2 border-slate-400"
            placeholder="Search..."
            onChange={(e) =>
              filterProducts("search", productos, e.target.value)
            }
          />
          <svg
            className="w-6 h-6 text-gray-600"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
          <button
            onClick={() => handlePrice()}
            className="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 "
          >
            Price{price ? "⬆" : "⬇"}
          </button>
          <button
            onClick={() => handleAlpha()}
            className="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-600 duration-300 m-2"
          >
            {alpha ? "AZ" : "ZA"}
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center mb-4">
        {loading ? (
          <Loader />
        ) : (
          auxiliar &&
          auxiliar.map((card, index) => <Card card={card} key={index} />)
        )}
      </div>
    </div>
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
