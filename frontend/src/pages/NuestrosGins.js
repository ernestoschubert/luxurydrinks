import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import productAction from "../redux/actions/productAction";

const NuestrosGins = (props) => {
  const { filterProducts, fetchProducts, auxiliar, loading, products } = props;

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div class=" flex items-center justify-center flex-col">
      <div class="w-72 m-4">
        <div class="relative flex items-center justify-center">
          <input
            type="search"
            class="w-full"
            placeholder="Search"
            onChange={(e) => filterProducts(products, e)}
          />
        </div>
      </div>
      <div class="flex flex-wrap mb-4 -mx-2 w-full h-full">
        {loading ? 
        <Loader/>
        :
        auxiliar && auxiliar.map((product, index) => {
            
        })
    }
        
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
  fetchProducts: productAction.fetchProducts
};
export default connect(mapStateToProps, mapDispatchToProps)(NuestrosGins);
