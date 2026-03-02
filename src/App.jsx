import Home from "./pages/Home"
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  return (
    <div 
      data-bs-spy="scroll" 
      data-bs-target=".navbar" 
      data-bs-smooth-scroll="true" 
      tabIndex={0}
    >
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Hero />
      </div>

      {/* <main>
        <Categorias />
        <hr />
        <Comunidad />
        <hr className="my-5 opacity-25" />
        <Info />
        <hr />
        <Contacto />
      </main>

      <Footer /> */}
    </div>
  )
}

export default App