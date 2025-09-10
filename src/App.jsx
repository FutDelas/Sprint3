import { BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Login from './routes/Login'
import Error from './routes/Error'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
    <main>
      <Routes>
        <Route path="*" element={<Error/>}/>

        <Route path="/" element={<Home/>}/>

        <Route path="/login" element={<Login/>}/>

      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
