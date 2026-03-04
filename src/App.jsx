import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/TestSegundaPagina";
import UserConfig from "./pages/UserConfig";

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/estrella" element={<Test/>}></Route>
                <Route path="/perfil" element={<UserConfig />}></Route>
              </Routes>
            </BrowserRouter>
    </>
  )
}