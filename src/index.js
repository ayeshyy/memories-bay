import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import "./index.css";

//all redux settlement is here its a new way to create a redux store;
const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
