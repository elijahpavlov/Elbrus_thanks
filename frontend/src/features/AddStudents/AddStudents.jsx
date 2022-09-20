/* eslint-disable jsx-a11y/label-has-associated-control */
import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AddStudentsList from './AddStudentsList';
import UserContext from '../Context/Context';
import LoadingPage from '../LoadingPage/LoadingPage';

function AddStudents() {
  // const [students, setStudents] = useState([]);
  const [context] = useContext(UserContext);
  const [newStudents, setNewStudents] = useState([]);

  async function addStudent(event) {
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
    setNewStudents(() => [
      ...newStudents,
      newStudent
    ]);
    event.target.reset();
  }

  return (
    <>
      {context === null && (<LoadingPage />)}

      <div className="addStudents">

        <Link to="/list" className="a-link">← Вернуться к списку студентов</Link>

        <form onSubmit={addStudent} method="POST">
          <h1 style={{ margin: '30px' }}>Добавьте новых студентов:</h1>

          <label htmlFor="nameInput" />
          Имя студента:
          <input
            id="nameInput"
            type="text"
            name="name"
            className="form-control form-control-lg shift-input"
            placeholder="Имя студента"
          />

          <label htmlFor="phaseSelect" />
          Номер фазы:
          <select
            id="phaseSelect"
            type="text"
            name="phase"
            className="form-control form-control-lg"
            placeholder="Номер фазы"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <button
            type="submit"
            className="btn btn-primary btn-lg btn-elbrus"
          >
            Добавить студентов
          </button>
        </form>

        <h4 className="h-margin30">Список добавленных студентов:</h4>

        <div>
          {newStudents.map((student) =>
            <AddStudentsList student={student} key={student.id} setNewStudents={setNewStudents} />
          )}
        </div>
      </div>
    </>
  );
}

export default AddStudents;
