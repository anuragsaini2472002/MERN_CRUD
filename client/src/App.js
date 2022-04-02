import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Edit from './components/Edit';
import Detail from './components/Detail';

const App = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/edit/:id" element={<Edit/>}/>
      <Route exact path="/detail/:id" element={<Detail/>}/>
    </Routes>
  </>)
}

export default App