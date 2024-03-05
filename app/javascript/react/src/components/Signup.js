import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users', {
        user: {
          username,
          password,
          password_confirmation: passwordConfirmation
        }
      });
      console.log(response);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation:</label>
        <input type="password" id="passwordConfirmation" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </div>
      {errors && (
        <div className="alert alert-danger">
          {Object.keys(errors).map((key) => (
            <p key={key}>{errors[key].join(', ')}</p>
          ))}
        </div>
      )}
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;