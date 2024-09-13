import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Signin from '@/components/Signin'
import Home from '@/components/Home'
import Navbar from '@/components/Navbar'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App