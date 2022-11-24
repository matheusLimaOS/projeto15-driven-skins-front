import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingUP from './components/SingUp';

export default function App() {
  return (
      <>
          
              
              <BrowserRouter>
                  <Routes>
                      <Route path='/singup' element={<SingUP/>} />
                  </Routes>
              </BrowserRouter>
          
      </>

  )
}
