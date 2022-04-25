import React from 'react';
import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home.jsx'
import Register from './components/register/Register.jsx'

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;