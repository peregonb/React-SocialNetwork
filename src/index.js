import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let rerenderEntireTree = state => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});

rerenderEntireTree(store.getState());

serviceWorker.unregister();
