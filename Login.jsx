import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Get stored manager data
      const managerData = JSON.parse(localStorage.getItem('managerData')) || {};
      
      if (
        (credentials.username === managerData.email || credentials.username === managerData.username) &&
        credentials.password === managerData.password
      ) {
        // Login successful
        localStorage.setItem('isManagerLoggedIn', 'true');
        navigate('/admindashboard');
      } else {
        setError('Invalid username/email or password');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h2>Manager Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email or Username</label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" disabled={isLoading} className="login-btn">
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <div className="login-links">
              <Link to="/forgot-password">Forgot Password?</Link>
              <Link to="/setup-manager">First Time Setup</Link>
            </div>
          </form>
        </div>
        
       
      </div>
    </>
  );
}

export default Login;