import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Test from "./pages/TestSegundaPagina";
import ListaProductos from './pages/ListaProductos';

export default function App() {

  return (
    <>
      <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/estrella" element={<Test/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/productos' element={<ListaProductos/>}></Route>
              </Routes>
            </BrowserRouter>
    </>
  )
}