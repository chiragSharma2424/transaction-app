import { useNavigate } from "react-router-dom";


function Logout() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Logout Confirmation
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Are you sure you want to logout?
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-red-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-600 transition"
            onClick={() => {
                localStorage.removeItem("token");
                alert('Logout Successfully');
                navigate('/');
            }}>
            Yes, Logout
          </button>
          <button className="bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg font-medium hover:bg-gray-300 transition" 
             onClick={() => {
                navigate(-1);
             }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default Logout;