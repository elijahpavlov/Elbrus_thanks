/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import { React } from 'react';

function AddStudentsList({ student, setNewStudents }) {
  async function deleteStudent() {
    const answer = confirm(`Удалить студента ${student.name}?`);
    if (answer) {
      const response = await fetch(`/api/delete/${student.id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.message === 'success') {
        setNewStudents((prev) => [...prev].filter((el) => el.id !== student.id));
      }
    }
  }

  return (
    <div className="input-group">
      <button
        onClick={deleteStudent}
        className="btn btn-outline-secondary"
        type="button"
        style={{ width: '11vw', height: '7vh', fontSize: '12px', color: '#4520AB', border: '1px solid lightgrey', fontWeight: 'bold' }}
      >
        X

      </button>
      <button
        type="button"
        name="name"
        className="form-control form-control-lg"
        style={{ width: '50vw', height: '7vh', fontSize: '15px' }}
      >
        {student.name}
      </button>
      <button
        type="button"
        name="phase"
        className="form-control form-control-lg"
        style={{ width: '14vw', height: '7vh', fontSize: '15px' }}
      >
        {student.phase}

      </button>

    </div>

  );
}

export default AddStudentsList;
