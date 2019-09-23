import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import {Provider} from "./StoreContext.js";
import {Provider} from "react-redux";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});

rerenderEntireTree(store.getState());

serviceWorker.unregister();
