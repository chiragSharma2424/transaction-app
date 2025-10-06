import React from "react";
import Signup from "./Pages/Signup";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<div></div>} />
      </Routes>
    </div>
  )
}

export default App;