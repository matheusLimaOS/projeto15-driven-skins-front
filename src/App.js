import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./providers/Auth";
import SignUp from './components/SignUp.js';
import Login from './components/Login';
import OpeningBox from './components/OpeningBox';

export default function App() {
  return (
    <>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/openingbox" element={<OpeningBox/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </>

  )
}
