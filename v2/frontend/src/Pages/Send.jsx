import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Send() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
  const id = searchParams.get('id');

  const [amount, setAmount] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Send Money
        </h2>

       
        <div className="flex items-center justify-center mb-6 space-x-3">
          <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-full text-xl font-bold">
            H
          </div>
          <span className="text-lg font-medium text-gray-800">Friend’s Name</span>
        </div>

       
        <div className="text-left mb-4">
          <label className="text-gray-600 text-sm font-medium">
            Amount (in ₹)
          </label>
          
          <input type="number" placeholder="Enter amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-green-500"/>
        </div>

      
        <button className="w-full bg-green-500 text-white py-2.5 rounded-lg hover:bg-green-600 transition font-semibold">
          Initiate Transfer
        </button>
      </div>
    </div>
  );
}

export default Send;