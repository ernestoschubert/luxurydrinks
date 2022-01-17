import { useEffect, useState, useContext } from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { DataContext } from "../DataProvider";
import productActions from "../redux/actions/productAction";
import "../styles/main.css";

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
        {loading ? (
          <Loader />
        ) : (
          auxiliar &&
          auxiliar.map((card, index) => <Card card={card} key={index} />)
        )}
      </div>
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
