import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Test from './pages/Test'
import Like from './pages/Like'
import { LugatProvider } from './context/LugatContext'
import BarchaLugat from './pages/BarchaLugat'

function App() {

  return (
    
      <LugatProvider>
    
        <Header/>
    
        <Routes>
    
          <Route path='/' element={<Home/>}></Route>    
          <Route path='/test' element={<Test/>}></Route>
          <Route path='/like' element={<Like/>}></Route>
          <Route path='/words' element={<BarchaLugat/>}></Route>
        
        </Routes>
      </LugatProvider>
  )
}

export default App
