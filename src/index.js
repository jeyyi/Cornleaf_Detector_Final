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
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import PrivateRoute from "./Components/ProtectedRoutes";

const isUserAuthenticated = () => {
  // Replace this with your actual authentication check, e.g., check for a valid token in local storage
  const token = localStorage.getItem('authToken');
  // return !!token; // Return true if the token is present, false otherwise
  return true
};
const PrivateWrapper = ({children}) => {
  return isUserAuthenticated() ? children 
  : <Navigate to="/login" />;
};

const LoginWrapper = () => {
  return isUserAuthenticated() ? <Home /> : <Navigate to="/" replace/>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        {/* Public routes */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginWrapper><Login /></LoginWrapper>} />

        {/* Protected routes */}
          <Route 
            path="/" 
            element={
            <PrivateWrapper><Home/></PrivateWrapper>
          }/>
          <Route path="/classify" element={<PrivateWrapper><App /></PrivateWrapper>} />
          <Route path="/feed" element={<PrivateWrapper><Feed /></PrivateWrapper>} />
          <Route path="/profilefeed" element={<PrivateWrapper><ProfileFeed /></PrivateWrapper>} />
          {/* Add other protected routes here */}
        {/* </Route> */}

        {/* Not Found route */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);