import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'
import React from 'react';

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact element={ <Home/> } path="/"/>
        <Route path="/empresa" element={ <Empresa/> }/>
        <Route path="/contato" element={ <Contato/> }/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
