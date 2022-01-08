import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "./redux/reducers/mainReducer";
import { Provider } from "react-redux";
const reduxStore = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
