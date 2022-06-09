import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Contact from "./pages/contact";
import Notfound from "./pages/Notfound";
import Product from "./pages/product";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="product" element={<Product />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<Notfound />} >
          <Route path="../../" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
