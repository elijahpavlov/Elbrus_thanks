/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import Student from './Student';

function List() {
  const [students, setStudents] = useState([]);
  const [value, setValue] = useState('');
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    fetch('/list')
      .then((result) => result.json())
      .then((data) => {
        const filteredStudents = data.filter((student) => student.phase === phase);
        setStudents(filteredStudents);
        // setStudents(data);
      });
  }, [phase]);

  function phase1() {
    // const filteredStudents = students.filter((student) => student.phase === 1);
    // setStudents(filteredStudents);
    setPhase(1);
  }
  function phase2() {
    // const filteredStudents = students.filter((student) => student.phase === 2);
    // setStudents(filteredStudents);
    setPhase(2);
  }
  function phase3() {
    // const filteredStudents = students.filter((student) => student.phase === 3);
    // setStudents(filteredStudents);
    setPhase(3);
  }

  const filteredStudents = students.filter((student) => student.name
    .toLowerCase()
    .includes(value.toLowerCase()));

  return (
    <div className="App">
      <header className="App-header">
        <div>

          <div className="input-group mb-3" style={{ position: 'fixed', left: '0', top: '0', width: '100vw', height: '5vh'}}>
            <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Поиск..." onChange={(event) => setValue(event.target.value)} />
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">Перенос фазы</a></li>
              <li><a className="dropdown-item" href="#">Редактирование</a></li>
              <li><a className="dropdown-item" href="#">Личный кабинет</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Выйти</a></li>
            </ul>
          </div>

          <div style={{ overflow: 'scroll', height: '85vh' }}>
            {filteredStudents.map((student) =>
              <Student key={student.id} student={student} />
            )}
          </div>

          <div className="phasesDiv">
            <div className="btn-group me-2" style={{ width: '100vw', height: '10vh', position: 'fixed', left: '0', bottom: '0' }}>
              <button onClick={phase1} type="button" className="btn btn-secondary btn-lg">1</button>
              <button onClick={phase2} type="button" className="btn btn-secondary btn-lg">2</button>
              <button onClick={phase3} type="button" className="btn btn-secondary btn-lg">7</button>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default List;
