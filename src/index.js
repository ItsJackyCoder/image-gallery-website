import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //要在裡面使用嚴謹的React語法(也可以不寫!)
  <React.StrictMode>
    {/* self-closing tag */}
    <App />
  </React.StrictMode>,
);
