import axios from "axios";
import Swal from "sweetalert2";

const productActions = {
  fetchProducts: () => {
    return async (dispatch, getState) => {
      const res = await axios.get("https://luxurydrinks.herokuapp.com/api/drinks");
      if (res.data.success) {
        dispatch({ type: "GET_PRODUCTS", payload: res.data });
      } else {
        console.error("Error trying to fetch");
      }
    };
  },
  filterProducts: (filter, products, value) => {
    return (dispatch, getState) => {
      dispatch({
        type: "FILTER_PRODUCTS",
        payload: { filter, products, value },
      });
    };
  },
  deleteProduct: (productId) => {
    return async (dispatch, getState) => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.delete(
          `https://luxurydrinks.herokuapp.com/api/admin/drink/${productId}`,
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(res);
        dispatch({ type: "DELETE_PRODUCT", payload: res.data.deletedId });

        if (res.data.msg) {
          Swal.fire({
            title: "Borrado de la BD!",
            position: "center",
            background: "black",
            color: "white",
            toast: true,
          });
        }

        return res.data.users;
      } catch (error) {
        return { msg: "You must be login" };
      }
    };
  },
  fetchUnCoctel: (id, props) => {
    return (dispatch, getState) => {
      axios
        .get("https://luxurydrinks.herokuapp.com/api/drinks" + id)
        .then((respuesta) =>
          dispatch({ type: "FETCH_UNA_CITY", payload: respuesta.data })
        );
    };
  },
  postAProduct: (newProduct, token) => {
    return async (dispatch, getState) => {
      const res = await axios.post(
        "https://luxurydrinks.herokuapp.com/api/admin/adddrink",
        { ...newProduct },
        { headers: { Authorization: "Bearer " + token } }
      );
        return res.data;
      
    };
  },
  editAProduct: (id, product, token) => {
    return async (dispatch, getState) => {
      const res = await axios.put(
        `https://luxurydrinks.herokuapp.com/api/admin/drink/` + id,
        { product },
        { headers: { Authorization: "Bearer " + token } }
      );
      if (res.data.success) {
        return res.data;
      } else {
        console.error("error");
      }
    };
  },
  getDrink: (id) => {
    return async(dispatch, getState) => {
      try {
          let res = await axios.get('https://luxurydrinks.herokuapp.com/api/drink/'+id)
          console.log(res);
          
          dispatch({type: 'GET_DRINK', payload: res.data.drink[0]})
      } catch(error) {
          console.log(error);
      }
    }
}
};

export default productActions;
