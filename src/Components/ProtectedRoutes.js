import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../Home';

// Your authentication logic to check if the user has a valid token
const isUserAuthenticated = () => {
  // Replace this with your actual authentication check, e.g., check for a valid token in local storage
  const token = localStorage.getItem('authToken');
  return !!token; // Return true if the token is present, false otherwise
};

const PrivateRoute = ({ element, ...rest }) => {
  const auth = isUserAuthenticated()
  // return (
  //   <Route
  //     {...rest}
  //     element={isUserAuthenticated() ? element : <Route path='/login' element={<Login/>} />}
  //   />
  // );
  return auth ? <Home /> : <Navigate to="/login" />;
};

export default PrivateRoute;
