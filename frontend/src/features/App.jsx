/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Edit from './Edit/Edit';
import List from './List/List';
import Main from './Main/Main';
import Lk from './Lk/Lk';

function App() {
  // useEffect(() => {
  //   async function getUser() {
  //     const response = await fetch('/');
  //     const result = await response.json();
  //     console.log(result);
  //   }
  //   getUser();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/lk" element={<Lk />} />
    </Routes>
  );
}

export default App;
