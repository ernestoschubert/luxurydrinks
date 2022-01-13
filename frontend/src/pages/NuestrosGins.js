import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";
import productActions from "../redux/actions/productAction";
import "../styles/main.css";

const NuestrosGins = (props) => {
  const [price, setPrice] = useState(false);
  const [alpha, setAlpha] = useState(false);
  const { filterProducts, fetchProducts, auxiliar, loading, products } = props;

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePrice = () => {
    setPrice(!price);
    filterProducts("price", products, price);
  };
  const handleAlpha = () => {
    setAlpha(!alpha);
    filterProducts("alpha", products, alpha);
  };

  
  return (
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
      type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
      <span class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded" id="basic-addon2">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>
      </span>
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
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
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
