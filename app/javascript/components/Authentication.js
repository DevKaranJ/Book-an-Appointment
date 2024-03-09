// Authentication.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, confirm, login, logout } from '../actions/authenticationActions';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const dispatch = useDispatch();

  const handleRegister = async () => {
    dispatch(register(email, password));
  };

  const handleConfirm = async () => {
    dispatch(confirm(confirmationCode));
  };

  const handleLogin = async () => {
    dispatch(login(email, password));
  };

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        className="auth-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="auth-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleRegister}>Register</button>

      <h2>Confirmation</h2>
      <input
        className="auth-input"
        type="text"
        placeholder="Confirmation Code"
        value={confirmationCode}
        onChange={(e) => setConfirmationCode(e.target.value)}
      />
      <button className="auth-button" onClick={handleConfirm}>Confirm</button>

      <h2>Login</h2>
      <button className="auth-button" onClick={handleLogin}>Login</button>

      <h2>Logout</h2>
      <button className="auth-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Authentication;
