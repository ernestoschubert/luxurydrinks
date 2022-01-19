const initialState = {
  loading: true,
  products: [],
  auxiliar: [],
  drink: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.drinks,
        auxiliar: action.payload.drinks,
        loading: false,
      };
    case "GET_DRINK": 
      return {
        ...state,
        drink: action.payload
      }
    case "FILTER_PRODUCTS":
      const { filter, products, value } = action.payload;
      let filtrado;
      if (filter === "search") {
        filtrado = products.filter((product) =>
          product.drinkName.toLowerCase().startsWith(value.toLowerCase().trim())
        );
      } else if (filter === "price") {
        value
          ? (filtrado = state.auxiliar.sort((a, b) => {
              if (a.price > b.price) {
                return 1;
              }
              if (a.price < b.price) {
                return -1;
              }
              return 0;
            }))
          : (filtrado = state.auxiliar.sort((a, b) => {
              if (a.price < b.price) {
                return 1;
              }
              if (a.price > b.price) {
                return -1;
              }
              return 0;
            }));
      } else {
        value
          ? (filtrado = state.auxiliar.sort((a, b) => {
              if (a.drinkName > b.drinkName) {
                return 1;
              }
              if (a.drinkName < b.drinkName) {
                return -1;
              }
              return 0;
            }))
          : (filtrado = state.auxiliar.sort((a, b) => {
              if (a.drinkName < b.drinkName) {
                return 1;
              }
              if (a.drinkName > b.drinkName) {
                return -1;
              }
              return 0;
            }));
      }
      return {
        ...state,
        auxiliar: filtrado,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (userDB) => userDB._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default productsReducer;
