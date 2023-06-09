import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import styles from "./index.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path = "/classify" element={<App/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);