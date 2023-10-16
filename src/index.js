import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import styles from "./index.css";
import Navigation from "./Components/Navigation";
import Feed from "./Feed";
import ProfileFeed from "./ProfileFeed";
import Login from "./Login";
import FarmerStats from "./FarmerStatsPage";
import Summary from "./Summary";
import Ailments from "./Ailments";
import ExpertStatsPage from "./ExpertStatsPage";
import TestGetImage from "./TestGetImage";
import Cures from "./Cures";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreatePostPage from "./Components/CreatePostPage";
import Cures_Blight from "./Cures_Blight";
import Cures_Rust from "./Cures_Rust";
import Cures_GLS from "./Cures_GLS";

const isUserAuthenticated = () => {
  // Replace this with your actual authentication check, e.g., check for a valid token in local storage
  const token = localStorage.getItem("authToken");
  // return !!token; // Return true if the token is present, false otherwise
  console.log(token);
  return token ? true : false;
};
const PrivateWrapper = ({ children }) => {
  return isUserAuthenticated() ? children : <Navigate to="/login" />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/* Public routes */}

      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <PrivateWrapper>
            <Navigation />
          </PrivateWrapper>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/classify"
          element={
            <PrivateWrapper>
              <App />
            </PrivateWrapper>
          }
        />
        <Route path="/cures" element={<Cures />} />
        <Route path="/cures/blight" element={<Cures_Blight />} />
        <Route path = "/cures/rust" element ={<Cures_Rust/>}/>
        <Route path ="/cures/gls" element={<Cures_GLS/>}/>
        <Route
          path="/summary"
          element={
            <PrivateWrapper>
              <Summary />
            </PrivateWrapper>
          }
        />
        <Route
          path="/ailments"
          element={
            <PrivateWrapper>
              <Ailments />
            </PrivateWrapper>
          }
        />
        <Route path="/about" element={<About />} />
      </Route>
      <Route
        path="/create/post"
        element={
          <PrivateWrapper>
            <CreatePostPage />
          </PrivateWrapper>
        }
      />
      <Route
        path="/feed"
        element={
          <PrivateWrapper>
            <Feed />
          </PrivateWrapper>
        }
      />
      <Route
        path="/profilefeed"
        element={
          <PrivateWrapper>
            <ProfileFeed />
          </PrivateWrapper>
        }
      />

      <Route
        path="/farmerstats"
        element={
          <PrivateWrapper>
            <FarmerStats />
          </PrivateWrapper>
        }
      />
      <Route
        path="/expertstats"
        element={
          <PrivateWrapper>
            <ExpertStatsPage />
          </PrivateWrapper>
        }
      />

      {/* Add other protected routes here */}
      {/* </Route> */}

      {/* Not Found route */}
      <Route path="/test" element={<TestGetImage />} />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
