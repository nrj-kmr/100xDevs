import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signin'
import Login from './components/Login'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App