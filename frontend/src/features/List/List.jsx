/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import Student from './Student';

function List({user}) {
  const [students, setStudents] = useState([]);
  const [value, setValue] = useState('');
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    fetch('/list')
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
    window.location.href('/');
  }

  return (
    <>
    {(user.isAdmin)?
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
              style={{ width: '65px', fontSize: '25px', backgroundColor: '#4520AB', color: '#29EDFF' }}
              />
            <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#f4f2f8', position: 'relative' }}>
              <li><a className="dropdown-item" href="/lk">Личный кабинет</a></li>
              <li><a className="dropdown-item" href="/edit">Перенос фазы</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a onClick={logout} className="dropdown-item" href="/">Выйти</a></li>
            </ul>
              {/* <li><a className="dropdown-item" href="#">Редактирование</a></li> */}
            <ul className="dropdown-menu dropdown-menu-end" style={{ backgroundColor: '#f4f2f8', position: 'relative', fontSize: '20px' }}>
              {/* <li><a className="dropdown-item" href="#">Редактирование</a></li> */}
            </ul>
          </div>

          <div style={{ overflow: 'scroll', height: '80vh', width: '100vw', position: 'relative' }}>
            {filteredStudents.map((student) =>
              <Student key={student.id} student={student} />
              )}
          </div>

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
    :
    <></>
  }
  </>
  );
}

export default List;
