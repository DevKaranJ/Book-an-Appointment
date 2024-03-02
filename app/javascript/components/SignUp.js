import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/users/sign_up', {
        user: {
          email: username,
          password: password
        }
      });
      // Handle successful sign-up
      console.log(response.data);
    } catch (error) {
      // Handle sign-up error
      console.error('Sign-up failed:', error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;
