/* eslint-disable react/jsx-no-constructed-context-values */
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
import Edit from './Edit/Edit';
import UserContext from './Context/Context';
import AddStudents from './AddStudents/AddStudents';

function App() {
  const [context, setContext] = useState(null);

  useEffect(() => {
    fetch('api/auth')
      .then((result) => result.json())
      .then((data) => {
        const id = setTimeout(() => {
          setContext(data.isAdmin);
          clearTimeout(id);
        }, 800);
      });
  }, []);

  return (
    <UserContext.Provider value={[context, setContext]}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/phaseshift" element={<PhaseShift />} />
        <Route path="/addstudents" element={<AddStudents />} />
        <Route path="/lk" element={<Lk />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/error" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
