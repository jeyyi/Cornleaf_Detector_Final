import React, { useEffect, useState } from "react";
import Logo from "./Assets/Logo.png";
import axios from "axios";
import jwt from "jwt-decode";

function Login() {
  // Set the new title when the component mounts
  const [email, setEmail] = useState("");
  // const [loginText, setLoginText] = useState("Login");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      var loginBtn = document.getElementById("loginBtn");
      if (loginBtn) {
        loginBtn.innerHTML =
          '<span class="loading loading-dots loading-md"></span>';
      }
      const payload = {
        email,
        password,
      };

      const response = await axios.post(
        "https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/auth/jwt/create/",
        payload
      );
      const user_token = response.data["access"]
      const user_id = jwt(user_token)['user_id']
      const user_response = await axios.get(
        `https://wj2e17sxka.execute-api.ap-southeast-1.amazonaws.com/dev/auth/users/${user_id}`,
        {
          headers: {
            "Authorization": `Bearer ${user_token}`
          },
        }
      );
      if (response.status === 200) {
        if (typeof window !== "undefined") {
          localStorage.setItem("authToken", response.data["access"]);
          localStorage.setItem("user", JSON.stringify(user_response.data));
          window.location = "/feed";
        }
      } else {
        alert("Error");
      }
    } catch (error) {
      console.log(error)
      var messageElement = document.getElementById("invalid_message");
      console.log(messageElement);
      if (messageElement) {
        messageElement.style.display = "block";
      }
      loginBtn.innerText = "Login";
    }
  };

  useEffect(() => {
    document.title = "Login-Cornleaf Disease Classifier";
    var messageElement = document.getElementById("invalid_message");
    if (messageElement) {
      messageElement.style.display = "none";
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="input bg-white w-full max-w-xs rounded-sm text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h3 className="mx-auto text-sm text-red-700" id="invalid_message">
              Invalid username or password
            </h3>
            <button id="loginBtn" className="btn w-full max-w-xs bg-green-400">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
