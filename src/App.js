import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
    </Router>
  );
}

export default App;
