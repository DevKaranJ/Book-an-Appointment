import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Reservations from './Main';

const App = () => (
  <BrowserRouter>
    <h1>App Component</h1>
    <Routes>
      <Route path="/" element={<Reservations />} />
    </Routes>
  </BrowserRouter>
);

export default App;