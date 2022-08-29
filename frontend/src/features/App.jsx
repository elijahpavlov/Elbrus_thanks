/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Edit from './Edit/Edit';
import List from './List/List';
import Main from './Main/Main';
import Lk from './Lk/Lk';
import React from 'react'


function App() {

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`api/`)
    .then((result) => result.json())
    .then((data) => setIsAdmin(data));
}, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List user={isAdmin} />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/lk" element={<Lk />} />
    </Routes>
  );
}

export default App;
