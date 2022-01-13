import axios from "axios";

const coctelActions = {
  loadCocteles: (id) => {
    return (dispatch, getState) => {
      axios
        .get("http://localhost:4000/api/cocktail" + id)
        .then((respuesta) =>
          dispatch({ type: "LOAD_DRINK", payload: respuesta.data })
        );
    };
  },
}

export default coctelActions;