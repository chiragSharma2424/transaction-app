import React, { useState } from "react";

function Dashboard() {
  const [filter, setFilter] = useState("");
  const [filter, setFilter] = useState('');

  fetch(`http:/localhost:3000/api/v2/user/bulk?filter=${filter}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  }).then((resp) => {
    return resp.json();
  }).then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log(`something went wrong: ${err}`);
  })

  return (
    <div className="min-h-screen bg-gray-50">
    
      <div className="bg-white px-6 py-4 shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">PayTM App</h1>
          <div className="text-gray-600">
            Your balance:{" "}
            <span className="font-medium text-green-600">₹10,000</span>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-8 py-8">
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Users</h2>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search users..."
            className="w-full border rounded-md px-4 py-2 mb-6 outline-none focus:ring focus:ring-blue-200"
          />

         
          <div className="space-y-3">
            {[1].map((id) => (
              <div
                key={id}
                className="flex items-center justify-between border-b py-3"
              >
                <div>
                  <p className="font-medium text-gray-800">User {id}</p>
                  <p className="text-sm text-gray-500">user{id}@gmail.com</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Send Money
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;