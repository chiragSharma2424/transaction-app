import Signup from "./Components/Signup";
import { Route, Routes } from 'react-router-dom'
import Signin from "./Components/Signin";
import Dashboard from "./Components/Dashboard";
import Send from "./Components/Send";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </div>
  )
}

export default App;