import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";
import productAction from "../redux/actions/productAction";
import "../styles/carrusel.css"

const NuestrosGins = (props) => {
  const { filterProducts, fetchProducts, auxiliar, loading, products } = props;

  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div class=" flex items-center justify-center flex-col w-2/3 " className="fondoMain">
      <div class="w-72 m-4">
        <div class="relative flex items-center justify-center">
        <input type="text" class="px-4 py-2 w-80" 
        placeholder="Search..."
        onChange={(e) => filterProducts(products, e.target.value)}
        />
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 place-content-center">
        {loading ? (
          <Loader />
        ) : (
          auxiliar &&
          auxiliar.map((product, index) => <Card card={product} key={index} />)
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
  filterProducts: productAction.filterProducts,
  fetchProducts: productAction.fetchProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(NuestrosGins);
