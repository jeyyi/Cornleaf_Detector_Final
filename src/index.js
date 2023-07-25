import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import NotFound from "./NotFound";
import styles from "./index.css";
import About from "./About";
import Navigation from "./Components/Navigation";
import Feed from "./Feed";
import ProfileFeed from "./ProfileFeed";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path = "/classify" element={<App/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/profilefeed" element={<ProfileFeed/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);