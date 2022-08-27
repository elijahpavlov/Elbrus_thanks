import React, { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main';
import Edit from '../Edit';


function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Main />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
  );
}

export default App;