import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange('login')}>Login</button>
        <button onClick={() => handleTabChange('signup')}>Signup</button>
      </div>
      <h1>{activeTab === 'login' ? 'Login' : 'Signup'}</h1>
      {activeTab === 'login' ? <Login /> : <Signup />}
    </div>
  );
};

export default App;
