import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import store from "./store/";
// import allReducers from "./Reducers/";
// import store from "./store";
// import * as serviceWorker from "./serviceWorker";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";
// import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
