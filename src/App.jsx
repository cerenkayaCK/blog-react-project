import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Galeri from './components/Galeri'
import Blog from './components/Blog'
import Iletisim from './components/Iletisim'
import Home from './components/Home'
import LoadingPage from './components/loadingPage'
import GaleriDetay from './components/detail/GaleriDetay'
import BlogDetay from './components/detail/BlogDetay'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<LoadingPage />} />
          <Route path='/online-6' element={<Navbar />}>
            <Route path='anasayfa' element={<Home />} />
            <Route path='galeri' element={<Galeri />} />
            <Route path='galeri/:galeriID' element={<GaleriDetay />} />
            <Route path='blog' element={<Blog />} />
            <Route path='blog/:blogID' element={<BlogDetay />} />
            <Route path='blog' element={<Blog />} />
            <Route path='iletisim' element={<Iletisim />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
