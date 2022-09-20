/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
import { React, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Context/Context';
import Page404 from '../Error/Page404';
import StudentEdit from './StudentEdit';
import LoadingPage from '../LoadingPage/LoadingPage';

function PhaseShift() {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [phase, setPhase] = useState(3);
  const [context] = useContext(UserContext);

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
      {context === null && (<LoadingPage />)}
      {context === true && (
      <div className="App">
        <header className="App-header">
          <Link to="/list" className="a-link">← Вернуться к списку студентов</Link>

          {(phase === 0)
            ? (
              <>
                <form onSubmit={addStudents} method="POST">
                  <h1 className="h-margin30">Добавьте новых студентов:</h1>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg shift-input"
                    placeholder="Имя студента"
                  />
                  <input
                    type="text"
                    name="phase"
                    className="form-control form-control-lg"
                    placeholder="Номер фазы"
                  />
                  <br />

                  <button className="btn btn-primary btn-lg btn-elbrus">
                    Добавить студентов
                  </button>
                </form>

                <h6 className="h-margin30">
                  Список новых студентов первой фазы:
                </h6>

                <div>
                  {newStudents.map((student) =>
                    <StudentEdit student={student} key={student.id} />
                  )}
                </div>
                <h6 className="h-margin30">
                  Список повторщиков первой фазы:
                </h6>
              </>
            )
            : (
              <h2 className="h-margin30">
                {`Выберете повторщиков c фазы ${phase}`}
              </h2>
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
                className="btn btn-primary btn-lg btn-elbrus"
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
                      className="btn btn-primary btn-lg btn-elbrus"
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
      {context === false && <Page404 />}
    </div>
  );
}

export default PhaseShift;
