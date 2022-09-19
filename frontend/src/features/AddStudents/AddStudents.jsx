import { React, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddStudentsList from './AddStudentsList';
import UserContext from '../Context/Context';

function AddStudents() {
  // const [students, setStudents] = useState([]);
  const [context] = useContext(UserContext);
  const [newStudents, setNewStudents] = useState([]);
  const navigate = useNavigate();

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
      <div className="addStudents">
        <form onSubmit={addStudent} method="POST">
          <h1 style={{ color: '#4520AB', margin: '30px' }}>Добавьте новых студентов:</h1>
          <input
            type="text"
            name="name"
            className="form-control form-control-lg"
            placeholder="Имя студента"
            style={{ marginBottom: '10px' }}
          />
          <select
            type="text"
            name="phase"
            className="form-control form-control-lg"
            placeholder="Номер фазы"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <br />

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            style={{ backgroundColor: '#4520AB', color: '#29EDFF' }}
          >
            Добавить студентов
          </button>
        </form>

        <button
          onClick={() => navigate('/list')}
          type="button"
          className="btn btn-primary  btn-lg"
          style={{ backgroundColor: '#4520AB', color: '#29EDFF', margin: '10px' }}
        >
          Перейти к списку студентов
        </button>

        <h4 style={{ color: '#4520AB', margin: '30px' }}>
          Перечень новых студентов:
        </h4>

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
