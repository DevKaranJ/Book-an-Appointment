import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/users/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { username, password } }),
      });
      if (response.ok) {
      } else {
        const errorData = await response.json();
        console.error('Sign-up error:', errorData.errors);
      }
    } catch (error) {
      console.error('Error occurred during sign-up:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
