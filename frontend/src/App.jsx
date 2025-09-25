import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./pages/Signup";

function App() {
  return (
   <>
     <BrowserRouter>
       <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<div></div>} />
          <Route path='/dashboard' element={<div></div>} />
          <Route path='/send' element={<div></div>} />
       </Routes>
     </BrowserRouter>
   </>
  )
}

export default App;