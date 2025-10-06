import React from "react";

function Dashboard() {
  const users = [
    { id: 1, name: "Amit Sharma", email: "amit@gmail.com" },
    { id: 2, name: "Riya Mehta", email: "riya@gmail.com" },
    { id: 3, name: "Karan Singh", email: "karan@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Your Balance
        </h2>
        <p className="text-4xl font-bold text-green-600">₹12,450.00</p>
      </div>

   
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl mb-6">
        <input type="text" placeholder="Search user by name or email..."
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

  
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Send Money To
        </h3>

        <div className="space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition">
              <div>
                <h4 className="text-lg font-medium text-gray-800">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Send Money
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
