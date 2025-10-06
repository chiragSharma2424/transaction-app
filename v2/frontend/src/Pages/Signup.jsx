import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <div className="flex flex-col space-y-4">
          <input type="text" placeholder="Full Name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

          <input type="email" placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

          <input type="password" placeholder="Password"
             onChange={(e) => {
                setPassword(e.target.value);
             }}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
              onClick={() => {
                fetch('http://localhost:3000/api/v2/user/signup', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullName: fullName,
                        email: email,
                        password: password
                    })
                 })
              }}
          >
            Sign Up
          </button>
          <p className="text-center text-gray-600 mt-4 text-sm">
          Already have an account{" "}
          <a className="text-indigo-600 hover:underline font-medium cursor-pointer" onClick={() => {
            navigate('/signin')
          }}>
            Sign in
          </a>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;