import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/home'
import Footer from './components/footer'
import Despre from './components/despre'
import Proiecte from './components/proiecte'
import Experienta from './components/experienta'
import "../setPublic/scss/index.scss"
import "../setPublic/scss/scrollBar.scss"

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='home' element={<Home />}></Route>
      <Route path='despre' element={<Despre />}></Route>
      <Route path='proiecte' element={<Proiecte />}></Route>
      <Route path='experienta' element={<Experienta />}></Route>
      <Route path='test' element={<div></div>}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
  </>)
}

export default App
