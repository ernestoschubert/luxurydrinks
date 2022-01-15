import React, { useEffect } from "react";
import "../styles/cocktails.css";
import "../styles/sass/cocktails.scss";
import productActions from "../redux/actions/productAction";
import Loader from "./Loader";
import { connect } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

function Cocteles(props) {
  useEffect(() => {
    props.arrayCocktails();
  }, []);

  if (props.todosLosCocktails === null) {
    return (
      <div>
        <h3 className="loading">Loading...please wait</h3>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="mainCocktails">
        <div className="cocktailsHeader">
          <h1 className="tittleCocktails">Cocktails</h1>
        </div>
        <div className="subtittleCocktails">
          <h2>Nuestras recetas para una mejor experiencia Beefeater</h2>
        </div>
        {props.todosLosCocktails.length > 0 ? (
          props.todosLosCocktails.map((element) => {
            return (
              <div className="cocktailPadre">
                    <Link to={`/Cocktail/${element._id}`}>
              <div className="containerCocktails">
                  <div class="card">
                    <img
                      src={element.drinkImg}
                      class="card__image"
                      alt="brown couch"
                    />
                    <div class="card__content">
                      <time datetime="2021-03-30" class="card__date">
                        {element.drinkName}
                      </time>
                      <span class="card__title">{element.description}</span>
                    </div>
                  </div>
                </div>
              </Link>
              </div>
            );
          })
        ) : (
          <div className="alert">
            <Alert variant="info">
              <p>
                Your search does not exist 🤷🏻‍♂️, try another cocktail, please. 🙂
              </p>
            </Alert>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todosLosCocktails: state.productsReducer.products,
  };
};

const mapDispatchToProps = {
  arrayCocktails: productActions.fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cocteles);