import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function SetupManager() {
  const [managerData, setManagerData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setManagerData({
      ...managerData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (managerData.password !== managerData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (managerData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // Save manager data
    const managerInfo = {
      username: managerData.username,
      email: managerData.email,
      password: managerData.password,
      setupCompleted: true
    };

    localStorage.setItem('managerData', JSON.stringify(managerInfo));
    localStorage.setItem('isManagerLoggedIn', 'true');
    
    navigate('/admindashboard');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Manager Setup</h2>
        <p className="setup-info">Complete your manager account setup</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={managerData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={managerData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={managerData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={managerData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Complete Setup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetupManager;