/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import Student from './Student';

function List() {
  const [students, setStudents] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('/list')
      .then((result) => result.json())
      .then((data) => setStudents(data));
  }, []);

  function phase1() {
    const filteredStudents = students.filter((student) => student.phase === 1);
    setStudents(filteredStudents);
  }
  function phase2() {
    const filteredStudents = students.filter((student) => student.phase === 2);
    setStudents(filteredStudents);
  }
  function phase3() {
    const filteredStudents = students.filter((student) => student.phase === 3);
    setStudents(filteredStudents);
  }

  const filteredStudents = students.filter((student) => student.name
    .toLowerCase()
    .includes(value.toLowerCase()));

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form name="searchForm">
            <input
              type="text"
              name="searchInput"
              placeholder="Поиск..."
              style={{ height: '30px', width: '400px' }}
              onChange={(event) => setValue(event.target.value)}
            />
          </form>

          <div>
            {filteredStudents.map((student) =>
              <Student key={student.id} student={student} />
            )}
          </div>

          <div className="phasesDiv">
            <button onClick={phase1} id="phase1">1</button>
            <button onClick={phase2} id="phase2">2</button>
            <button onClick={phase3} id="phase3">3</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default List;
