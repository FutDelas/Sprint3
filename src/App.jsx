import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Cadastro from './routes/Cadastro'
import Error from './routes/Error'
import Mapa from './routes/Mapa'
import Torneios from './routes/Torneios'
import Login from './routes/Login'
import CadastroOrganizador from './routes/CadastroOrganizador'
import LoginOrganizador from './routes/LoginOrganizador'


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

        <Route path="/torneios" element={<Torneios/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/cadastro-organizador" element={<CadastroOrganizador/>}/>

        <Route path="/login-organizador" element={<LoginOrganizador/>}/>

      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
