import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from './components/SignUp.js';
import Login from './components/Login';

export default function App() {
  return (
      <>
          
              
              <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
              </BrowserRouter>
          
      </>

  )
}
