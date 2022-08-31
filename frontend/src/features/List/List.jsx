/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import { React, useState, useEffect, useContext } from 'react';
import UserContext from '../Context/Context';
import Page404 from '../Error/Page404';
import Student from './Student';

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

  async function logout() {
    await fetch('/api/auth/logout');
  }

  return (
    <>
      {context === null && (
      <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', columnGap: '1em' }}>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-primary" role="status" style={{ backgroundColor: '#4520AB' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      )}
      {context === true && (
      <div className="App">
        <header className="App-header">
          <div>

            <div className="input-group mb-3" style={{ position: 'fixed', left: '0', top: '0', width: '100vw', height: '7vh', zIndex: '5' }}>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="Поиск..."
                onChange={(event) => setValue(event.target.value)}
                style={{ backgroundColor: '#f4f2f8' }}
              />
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: '57px', backgroundColor: '#4520AB', color: '#29EDFF' }}
              />
              <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#f4f2f8', position: 'relative' }}>
                <li><a className="dropdown-item" href="/edit">Редактирование</a></li>
                <li><a className="dropdown-item" href="/lk">Личный кабинет</a></li>
                <li><a className="dropdown-item" href="/phaseshift">Перенос фазы</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a onClick={logout} className="dropdown-item" href="/">Выйти</a></li>
              </ul>
            </div>

            {!students.length
              ? (<div>loading</div>) : (
                <div style={{ overflow: 'scroll', height: '80vh', width: '100vw', position: 'relative' }}>
                  {filteredStudents.map((student) =>
                    <Student key={student.id} student={student} />
                  )}
                </div>
              )}

            <div className="phasesDiv">
              <div
                className="btn-group me-2"
                style={{ width: '100vw', height: '13vh', position: 'fixed', left: '0', bottom: '0', zIndex: '5' }}
              >
                <button
                  onClick={phase1}
                  style={{ color: '#29EDFF', fontSize: '40px', backgroundColor: '#4520AB', border: '2px solid white' }}
                  type="button"
                  className="btn btn-secondary btn-lg"
                >
                  1
                </button>

                <button
                  onClick={phase2}
                  style={{ color: '#29EDFF', fontSize: '40px', backgroundColor: '#4520AB', border: '2px solid white' }}
                  type="button"
                  className="btn btn-secondary btn-lg"
                >
                  2
                </button>

                <button
                  onClick={phase3}
                  style={{ color: '#29EDFF', fontSize: '40px', backgroundColor: '#4520AB', border: '2px solid white' }}
                  type="button"
                  className="btn btn-secondary btn-lg"
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
