import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';


function App() {
  return (
  <div>
      <h1>Hello World!</h1>
      <Login />
  </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);