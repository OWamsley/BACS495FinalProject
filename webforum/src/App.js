import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="/" element={<DashBoard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        
      </Routes>
    </Router>
  );
}

function DashBoard(){
  return<>
  <Navbar/>
  <h2>Dashboard</h2>
  </>;
}

function Login(){
  return <>
  <Navbar/>
  <h2>Login</h2>
  </>;
}


export default App;
