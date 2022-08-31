/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import { React, useState, useEffect } from 'react';
import Page404 from '../Error/Page404';
import StudentEdit from './StudentEdit';

function PhaseShift({ user }) {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [phase, setPhase] = useState(3);

  // Отрисовывает студентов согласно фазе в состоянии
  useEffect(() => {
    if (phase > 0) {
      fetch(`/phaseshift/phase/${phase}`)
        .then((result) => result.json())
        .then((data) => setStudents(data));
    } else {
      fetch('/phaseshift', {
        method: 'PUT'
      }
      )
        .then((result) => result.json())
        .then((data) => setStudents(data));
    }
  }, [phase]);

  // Изменяет состояние фазы
  function nextPhase() {
    if (phase > -1) {
      setPhase(phase - 1);
    }
  }

  async function addStudents(event) {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      phase: event.target.phase.value,
      thanks: 0,
      status: 'прошел',
    };

    const response = await fetch('/phaseshift/newstudents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    const newStudent = await response.json();

    setNewStudents((newStudents) => [
      ...newStudents,
      newStudent
    ]);

    event.target.reset();
  }

  return (
    <div>
      {user === null && (
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
      {user === true && (
      <div className="App">
        <header className="App-header">
          <div><a href="/list">Вернуться на главную</a></div>

          {(phase === 0)
            ? (
              <>
                <form onSubmit={addStudents} method="POST">
                  <h1 style={{ color: '#4520AB', margin: '30px' }}>Добавьте новых студентов:</h1>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Имя студента"
                    style={{ marginBottom: '10px' }}
                  />
                  <input
                    type="text"
                    name="phase"
                    className="form-control form-control-lg"
                    placeholder="Номер фазы"
                  />
                  <br />
                  {/* <input type="text" name="thanks" placeholder='thanks of new student' />
        <br/> */}
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ backgroundColor: '#4520AB', color: '#29EDFF' }}
                  >
                    Добавить студентов
                  </button>
                </form>
                <form type="submit" action="/list">
                  <button
                    className="btn btn-primary  btn-lg"
                    style={{ backgroundColor: '#4520AB', color: '#29EDFF', margin: '10px' }}
                  >
                    Перейти к списку студентов
                  </button>
                </form>

                <h4 style={{ color: '#4520AB', margin: '30px' }}>
                  Перечень новых студентов первой фазы:
                </h4>

                <div>
                  {newStudents.map((student) =>
                    <StudentEdit student={student} key={student.id} />
                  )}
                </div>
                <h4 style={{ color: '#4520AB', margin: '30px' }}>
                  Перечень повторщиков первой фазы:
                </h4>
              </>
            )
            : (
              <h1 style={{ color: '#4520AB', margin: '30px' }}>
                {`Выберете повторщиков c фазы ${phase}`}
              </h1>
            )}
          <div>
            {students.map((student) =>
              <StudentEdit student={student} key={student.id} />
            )}
          </div>

          {(phase > 1)
            ? (
              <button
                onClick={nextPhase}
                className="btn btn-primary btn-lg"
                style={{ backgroundColor: '#4520AB', color: '#29EDFF', margin: '5vh' }}
              >
                {`Перейти к фазе ${phase - 1}`}
              </button>

            )
            : (
              <>
                {(phase === 1)
                  ? (
                    <button
                      onClick={nextPhase}
                      className="btn btn-primary btn-lg"
                      style={{ backgroundColor: '#4520AB', color: '#29EDFF', margin: '5vh' }}
                    >
                      {' '}
                      Перенести фазы
                    </button>
                  )

                  : <></>}

              </>
            )}

        </header>
      </div>
      )}
      {user === false && <Page404 />}
    </div>
  );
}

export default PhaseShift;
