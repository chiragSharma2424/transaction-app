import Signup from "./Pages/Signup";
import { Route, Routes } from 'react-router-dom'
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import Send from "./Pages/Send";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </div>
  )
}

export default App;