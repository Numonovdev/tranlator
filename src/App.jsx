import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Test from './pages/Test'
import Like from './pages/Like'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/like' element={<Like/>}></Route>
    </Routes>
    </>
  )
}

export default App
