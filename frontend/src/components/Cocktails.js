import React, { useEffect } from "react";
import "../styles/cocktails.css";
import LogoLuxury from "../components/assetsCocktails/luxuriuslogo.png";
import productActions from "../redux/actions/productAction";
import Loader from "./Loader";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import Alert from "react-bootstrap/Alert";

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
          <h2>Trucos y sugerencias para una mejor experiencia Beefeater</h2>
        </div>
        {props.todosLosCocktails.length > 0 ? (
          props.todosLosCocktails.map((element) => {
            return (
              <div className="mainCards">
                <div className="cardsCocktails">
                  <div class="min-h-max w-full bg-white-00 mb-8">
                    <div class="max-w-screen-md mx-4 px-20 pt-40">
                      <div class="bg-[#dc2626] md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col hover:bg-[#fee2e2]-700">
                        <div class="w-full md:w-1/2 p-1">
                          <img src={LogoLuxury} alt="" class="w-10" />
                          <h3 class="text-3xl font-bold">
                            {element.drinkName}
                          </h3>
                          <p class="text-white">{element.description}</p>
                        </div>
                        <div class="w-full md:w-1/5 p-4 md:p-3">
                          <img
                            src={element.drinkImg}
                            alt="gin&tonic"
                            class="w-64 mx-auto ml-16 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
