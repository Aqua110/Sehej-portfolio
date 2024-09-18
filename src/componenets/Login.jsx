// src/componenets/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/login.css'

const Login = ({ setUserRole,setBasename }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials check
    if (username === 'admin' && password === '123') {
      localStorage.setItem('userRole', 'admin');  // Save user role to localStorage
      setUserRole('admin');   // Set user as admin in the state
      setBasename('/admin')
      navigate('/admin');     // Redirect to admin page after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <div className="login-form-container">
        <div className="login-inner-container">
          <h2 className="form-heading">Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <label htmlFor="Uaername">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
