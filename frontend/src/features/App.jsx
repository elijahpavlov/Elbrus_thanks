/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PhaseShift from './PhaseShift/PhaseShift';
import List from './List/List';
import Main from './Main/Main';
import Lk from './Lk/Lk';
import Page404 from './Error/Page404';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch('api/')
        .then((result) => result.json())
        .then((data) => setIsAdmin(data.isAdmin));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Main user={isAdmin}  />} />
      <Route path="/list" element={<List user={isAdmin} />} />
      <Route path="/phaseshift" element={<PhaseShift user={isAdmin} />} />
      <Route path="/lk" element={<Lk user={isAdmin} />} />
      <Route path="/error" element={<Page404 user={isAdmin} />} />
      <Route path="*" element={<Page404 user={isAdmin} />} />
    </Routes>
  );
}

export default App;
