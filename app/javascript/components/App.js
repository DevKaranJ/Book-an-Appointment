import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Authentication from './Authentication';

const App = () => (
  <BrowserRouter>
    <h1>App Component :Authentication</h1>
    <Routes>
      <Route path="/" element={<Authentication/>} />
    </Routes>
  </BrowserRouter>
);

export default App;