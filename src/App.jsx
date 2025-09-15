import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Cadastro from './routes/Cadastro'
import Error from './routes/Error'
import Mapa from './routes/Mapa'
import Encontros from './routes/Encontros'
import Login from './routes/Login'
import CadastroOrganizador from './routes/CadastroOrganizador'
import LoginOrganizador from './routes/LoginOrganizador'
import CanalDosPaiseResponsaveis from "./routes/CanalDePaiseResponsaveis"
import Perfil from './routes/Perfil'


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

        <Route path="/encontros" element={<Encontros/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/cadastro-organizador" element={<CadastroOrganizador/>}/>

        <Route path="/login-organizador" element={<LoginOrganizador/>}/>

        <Route path="/canal-de-pais-e-responsaveis" element={<CanalDosPaiseResponsaveis/>}/>

        <Route path="/perfil" element={<Perfil/>}/>

      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
