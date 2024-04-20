import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/ConfigureStore";


ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <Provider store={store} >
      <App />
    </Provider>
  </BrowserRouter>

);
