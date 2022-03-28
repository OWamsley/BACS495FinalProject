import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import CreatePost from './CreatePost';


function App() {
  return (
    <Router>
      <Routes>
        
          <Route path="/" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="createPost" element={<CreatePost />} />
        
      </Routes>
    </Router>
  );
}








export default App;
