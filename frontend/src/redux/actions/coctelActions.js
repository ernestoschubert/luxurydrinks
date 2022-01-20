import axios from "axios";

const coctelActions = {
  loadCocteles: (id) => {
    return (dispatch, getState) => {
      axios
        .get("https://luxurydrinks.herokuapp.com/api/cocktails/" + id)
        .then((respuesta) =>
          dispatch({ type: "LOAD_DRINK", payload:respuesta.data })
        );
    };
  },
}

export default coctelActions;