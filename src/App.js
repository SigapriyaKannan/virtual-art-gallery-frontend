// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Gallery from './components/Gallery';
import UploadArtwork from './components/UploadArtwork';

const App = () => {
  const [user, setUser] = useState(null);

  const loginUser = (username) => {
    console.log(username);
    setUser(username);
  };

  const logoutUser = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/gallery" element={<Gallery user={user} logoutUser={logoutUser} /> } />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/upload" element={<UploadArtwork />} />
      </Routes>
    </Router>
  );
};

export default App;
