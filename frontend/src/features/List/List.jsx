/* eslint-disable jsx-a11y/control-has-associated-label */
import { React, useState, useEffect, useContext } from 'react';
import UserContext from '../Context/Context';
import Page404 from '../Error/Page404';
import Student from './Student';
import LoadingPage from '../LoadingPage/LoadingPage';

function List() {
  const [students, setStudents] = useState([]);
  const [value, setValue] = useState('');
  const [phase, setPhase] = useState(0);
  const [context] = useContext(UserContext);

  useEffect(() => {
    fetch('/api/list')
      .then((result) => result.json())
      .then((data) => {
        const filteredStudents = (phase === 0)
          ? data
          : data.filter((student) => student.phase === phase);
        setStudents(filteredStudents);
        // setStudents(data);
      });
  }, [phase]);

  function phase1() {
    setPhase(1);
  }
  function phase2() {
    setPhase(2);
  }
  function phase3() {
    setPhase(3);
  }

  const filteredStudents = students.filter((student) => student.name
    .toLowerCase()
    .includes(value.toLowerCase()));

  async function logout(event) {
    event.preventDefault();
    await fetch('/api/auth/logout', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });
    window.location.href = '/';
  }

  return (
    <>
      {(context === null && !students.length) && (
      <LoadingPage />
      )}
      {context === true && (
      <div className="App">
        <header className="App-header">
          <div>

            <div className="input-group mb-3 nav-input-div">
              <input
                type="text"
                className="form-control nav-input"
                aria-label="Text input with dropdown button"
                placeholder="Поиск..."
                onChange={(event) => setValue(event.target.value)}
              />
              <button
                className="btn btn-outline-secondary dropdown-toggle nav-button"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul className="dropdown-menu dropdown-menu-end ul-menu">
                <li><a className="dropdown-item" href="/edit">Редактирование</a></li>
                <li><a className="dropdown-item" href="/addstudents">Добавить студента</a></li>
                <li><a className="dropdown-item" href="/phaseshift">Перенос фаз</a></li>
                <li><a className="dropdown-item" href="/lk">Личный кабинет</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a onClick={logout} className="dropdown-item" href="/">Выйти</a></li>
              </ul>
            </div>

            {!students.length
              ? (<h4>Список студентов пуст</h4>) : (
                <div className="list-students-div">
                  {filteredStudents.map((student) =>
                    <Student key={student.id} student={student} />
                  )}
                </div>
              )}

            <div>
              <div className="btn-group me-2 phasesDiv">
                <button
                  onClick={phase1}
                  type="button"
                  className="btn btn-secondary btn-lg btn-phase"
                >
                  1
                </button>

                <button
                  onClick={phase2}
                  type="button"
                  className="btn btn-secondary btn-lg btn-phase"
                >
                  2
                </button>

                <button
                  onClick={phase3}
                  type="button"
                  className="btn btn-secondary btn-lg btn-phase"
                >
                  3
                </button>
              </div>
            </div>

          </div>
        </header>
      </div>
      )}
      {context === false && <Page404 />}
    </>
  );
}

export default List;
