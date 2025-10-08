import { useNavigate } from 'react-router-dom'

function Homepage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200">
      <div className="text-center p-8 rounded-2xl shadow-lg bg-white max-w-md w-full">

        <h1 className="text-3xl font-bold text-green-600 mb-2">
          💸 My Transaction App
        </h1>

      
        <p className="text-gray-600 mb-8">
          Hi there! Welcome to your secure money transfer dashboard.
        </p>

 
        <div className="flex flex-col gap-4">
          <button
             onClick={() => {
                navigate('/signup');
             }}
            className="w-full bg-green-500 text-white py-2.5 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => {
                navigate('/signin');
            }}
            className="w-full border-2 border-green-500 text-green-600 py-2.5 rounded-lg font-semibold hover:bg-green-50 transition" >
            Sign In
          </button>
        </div>
      </div>

     
      <p className="mt-8 text-gray-500 text-sm">
        © 2025 Transaction App | Built with ❤️ by Chirag
      </p>
    </div>
  );
}
export default Homepage