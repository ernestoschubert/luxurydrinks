import { useState } from "react"
import Loader from "../components/Loader"
import Card from '../components/Card'
import productAction from '../redux/actions/productAction'
import { connect } from 'react-redux'


const NuestrosGins = () => {
  const [cards, setCards] = useState(4)
  const [loading, setLoading] = useState(true)
  let auxiliar;

  return (
    <div class="min-h-full min-w-min" >
      <div>filtros</div>
      <div class="grid-cols-3 w-max h-max">
        {loading ?
          <Loader />
          :
          cards && cards.map((card, index) => (
            <Card card={card} key={index} />
          ))
        }
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
