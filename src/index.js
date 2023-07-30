import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import NotFound from "./NotFound";
import About from "./About";
import Navigation from "./Components/Navigation";
import Feed from "./Feed";
import ProfileFeed from "./ProfileFeed";
import Login from "./Login";
import FarmerStats from "./FarmerStatsPage";
import Summary from "./Summary";
import Ailments from "./Ailments";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreatePostPage from "./Components/CreatePostPage";

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
        {/* Add other protected routes here */}
        {/* </Route> */}

        {/* Not Found route */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);
