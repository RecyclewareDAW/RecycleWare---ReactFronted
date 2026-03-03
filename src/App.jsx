import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/TestSegundaPagina";

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/estrella" element={<Test/>}></Route>
              </Routes>
            </BrowserRouter>
    </>
  )
}