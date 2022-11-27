import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Loading from './components/loading'
import Home from './components/home'
// import Footer from './components/footer'
// import Despre from './components/despre'
// import Proiecte from './components/proiecte'
// import Abilitati from './components/abilitati'
// const Home = lazy(() => import('./components/home'))
const Footer = lazy(() => import('./components/footer'))
const Despre = lazy(() => import('./components/despre'))
const Proiecte = lazy(() => import('./components/proiecte'))
const Abilitati = lazy(() => import('./components/abilitati'))

import "../setPublic/scss/index.scss"
import "../setPublic/scss/scrollBar.scss"

function App() {
  return (<>
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='home' element={<Home />}></Route>
        <Route path='despre' element={<Despre />}></Route>
        <Route path='proiecte' element={<Proiecte />}></Route>
        <Route path='abilitati' element={<Abilitati />}></Route>
      </Routes>
      <Footer />
    </Suspense>
  </BrowserRouter>
  </>)
}

export default App
