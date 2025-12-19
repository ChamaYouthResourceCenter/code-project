import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate password reset process
      const managerData = JSON.parse(localStorage.getItem('managerData')) || {};
      
      if (managerData.email === email) {
        // In a real app, you would send an email here
        setMessage('Password reset instructions have been sent to your email.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } else {
        setMessage('Email not found. Please check your email address.');
      }
    } catch (error) {
      setMessage('Error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {message && <div className="success-message">{message}</div>}

          <button type="submit" disabled={isLoading} className="login-btn">
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>

          <div className="login-links">
            <button 
              type="button" 
              className="back-btn"
              onClick={() => navigate('/login')}
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;