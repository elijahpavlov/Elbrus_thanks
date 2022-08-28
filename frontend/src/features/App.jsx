/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Edit from './Edit/Edit';
import List from './List/List';
import Main from './Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/list" element={<List />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>

  );
}

export default App;
