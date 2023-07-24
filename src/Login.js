import React,{ useEffect, useState} from "react";
import Logo from "./Assets/Logo.png";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Login() {
  // Set the new title when the component mounts
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    console.log(e)
    e.preventDefault();
    try {
      const payload = {
        email, password
      }

      const response = await axios.post(
        'https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/auth/jwt/create/',
        payload
      )
      if (response.status === 200) {
        console.log(response.data['refresh'])
        if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', response.data['refresh']);
        Navigate.push('/');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  
  useEffect(() => {
    document.title = "Login-Cornleaf Disease Classifier"; 
    

  }, []); 

  return (
    <>
      <div className="bg-gradient-to-br from-lime-100 to-amber-200 h-screen flex items-center justify-center">
        <div className="artboard phone-2 bg-stone-50 rounded-lg flex flex-col p-12">
          <img src={Logo} className="w-24 mx-auto" alt="Logo" />
          <h3 className="pt-8 font-semibold text-xl">Login</h3>
          <p className="font-light text-gray-700 text-sm pt-2">
            Welcome back, login to your account
          </p>
          <form onSubmit={handleLogin} className="pt-16 flex flex-col gap-5">
            <input
              type="text"
              placeholder="Enter Username"
              className="input bg-white w-full max-w-xs rounded-sm text-sm"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="input bg-white w-full max-w-xs rounded-sm text-sm"
            />
            <button className="btn w-full max-w-xs bg-green-400">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
