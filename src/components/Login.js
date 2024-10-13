// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://7r3rtiffni.execute-api.us-east-1.amazonaws.com/prod/loginUser', {
        username,
        password,
      });
      alert('Login successful!');
      loginUser(username);
      window.location.href = '/gallery';
    } catch (error) {
      console.error(error);
      alert('Login failed!');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Username:</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p>Not registered? <a href="/register">Register here</a></p>
      </form>
    </div>
  );
};

export default Login;
