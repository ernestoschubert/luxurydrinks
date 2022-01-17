import React, { useEffect } from "react";
import "../styles/coctel.css";
import "../styles/sass/coctel.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import coctelActions from "../redux/actions/coctelActions";
import Loader from "../components/Loader";

const Coctel = (props) => {
  let { id } = useParams();
  console.log(props.getCocteles.respuesta);

  useEffect(() => {
    props.getCoctel(id);
  }, []);
  if (props.getCocteles == "") {
    return (
      <div>
        <h3 className="loading">Loading...please wait</h3>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="mainCoctel">
        <div className="coctelHeader">
          <h1 className="tittleCocktails">Cócteles</h1>
        </div>
        {props.getCocteles.respuesta.length > 0 ? (
          props.getCocteles.respuesta.map((element) => {
            return (
              <div className="padreRecetas">
                <div className="contenedorRecetas">
                  <div class="mainCardCoctel">
                    <div class="recipe-card">
                      <aside>
                        <img src={element.cocktailImg} alt="Image cocktail" />
                      </aside>

                      <article>
                        <h2 className="nameCoktail">{element.cocktailName}</h2>
                        <h3>{element.description}</h3>

                        <p class="ingredients">
                          <span>Sabor:&nbsp;</span>
                          {element.flour}
                        </p>

                        <p class="ingredients">
                          <span>Dificultad:&nbsp;</span>
                          {element.difficulty}
                        </p>

                        <p class="ingredients">
                          <span>Ingredientes:&nbsp;</span>
                          {element.ingredients}
                        </p>

                        <p class="ingredients">
                          <span>Como preparar:&nbsp;</span> {element.howToMake}
                        </p>

                        <p class="ingredients">
                          <span>Se sirve en:&nbsp;</span>
                          {element.serve}
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="alert">
            <p class="textAlert">
              Lo sentimos, aun no hay cócteles aquí, pronto más recetas.
            </p>
            {/* <p>
              Volver a{" "}
              <Link className="linkCocktails" to="/Cocktails">
                <button>
                  <span>COCKTAILS.</span>
                </button>
              </Link>
            </p> */}
          </div>
        )}
        <div className="backCoctel">
          <Link className="linkCocktails" to="/Cocktails">
            <button>
              <p>
                VER MÁS <span>COCKTAILS</span>
              </p>
            </button>
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    getCocteles: state.coctelReducers.cocteles,
  };
};

const mapDispatchToProps = {
  getCoctel: coctelActions.loadCocteles,
};
export default connect(mapStateToProps, mapDispatchToProps)(Coctel);
