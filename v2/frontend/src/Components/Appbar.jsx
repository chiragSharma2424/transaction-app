import { useNavigate } from "react-router-dom";
import { LogOut, LogIn, UserPlus } from "lucide-react";

function Appbar() {
    const navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <button  className="text-2xl font-bold tracking-wide text-blue-400 hover:text-blue-300 transition"
          onClick={() => {
            navigate('/')
          }}
        >
          PayTM App
        </button>

       
        <div className="hidden md:block text-gray-300 font-medium">
          Hi there 👋, welcome back!
        </div>

       
        <div className="flex items-center gap-3">
          <button
             onClick={() => {
                navigate('/signup')
             }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            <UserPlus size={18} /> Sign Up
          </button>

          <button
             onClick={() => {
                navigate('/signin');
             }}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 px-4 py-2 rounded-lg font-medium transition"
          >
            <LogIn size={18} /> Sign In
          </button>

          <button
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition"
            onClick={() => {
                navigate('/logout');
            }}
          >
            <LogOut size={18} /> Logout
          </button>

           <button
             onClick={() => {
                navigate('/dashboard');
             }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
             Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
export default Appbar;