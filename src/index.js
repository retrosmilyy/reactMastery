import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider} from "./context/books";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


//now the app components all its children have access to the value= 5
root.render(
  <Provider>
    <App />
  </Provider>
);
