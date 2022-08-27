import './App.css';
import { Routes, Route } from 'react-router-dom';
import Edit from './Edit/Edit.jsx';
import List from './List/List.jsx';
import Main from './Main/Main.jsx';

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