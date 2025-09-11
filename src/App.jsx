import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Cadastro from './routes/Cadastro'
import Error from './routes/Error'
import Mapa from './routes/Mapa'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <main>
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/cadastro" element={<Cadastro/>}/>

        <Route path="*" element={<Error/>}/>

        <Route path="/mapa" element={<Mapa/>}/>

      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
