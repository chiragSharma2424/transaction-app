import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <div className="flex flex-col space-y-4">
          <input type="email" placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
             onChange={(e) => {
                setEmail(e.target.value);
             }}/>
             
          <input type="password" placeholder="Password"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => {
                setPassword(e.target.value);
              }}/>

          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200 font-semibold"
             onClick={() => {
                fetch('http://localhost:3000/api/v2/user/signin', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }).then((resp) => {
                  return resp.json()
                }).then((data) => {
                  console.log(data);
                  localStorage.setItem('token', data.token);
                  navigate('/dashboard');
                }).catch((err) => {
                  console.log(`error while sending signin request ${err}`);
                })
             }}>
            Sign In
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don’t have an account?{" "}
          <a className="text-indigo-600 hover:underline font-medium cursor-pointer" onClick={() => {
            navigate('/signup')
          }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;