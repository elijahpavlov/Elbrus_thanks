/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';

function EditStudent({ student }) {
  const [name, setName] = useState(student.name);
  const [phase, setphase] = useState(student.phase);

  async function changeStudent() {
    const response = await fetch(`/api/edit/${student.id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, phase, status: 'changeStudent' }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
  }

  async function deleteStudent(event) {
    const answer = confirm(`Удалить студента ${student.name}?`);
    if (answer) {
      const response = await fetch(`/api/delete/${student.id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      if (result.message === 'success') {
        const del = document.getElementById(`${student.id}`).remove();
      }
    }
  }

  return (
    <form id={`${student.id}`}>
      <div className="input-group">
        <button
          onClick={deleteStudent}
          className="btn btn-outline-secondary"
          type="button"
          style={{ width: '11vw', height: '7vh', fontSize: '12px', color: '#4520AB', border: '1px solid lightgrey', fontWeight: 'bold' }}
        >
          X

        </button>
        <input
          name="name"
          className="form-control form-control-lg"
          placeholder="Имя студента"
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{ width: '50vw', height: '7vh', fontSize: '15px' }}
        />
        <input
          name="phase"
          className="form-control form-control-lg"
          placeholder="Номер фазы"
          value={phase}
          onChange={(event) => setphase(event.target.value)}
          style={{ width: '14vw', height: '7vh', fontSize: '15px' }}
        />
        <button
          onClick={changeStudent}
          className="btn btn-outline-secondary"
          type="button"
          style={{ width: '21vw', height: '7vh', fontSize: '12px', color: '#4520AB', border: '1px solid lightgrey', fontWeight: 'bold' }}
        >
          Изменить

        </button>
      </div>
    </form>

  );
}

export default EditStudent;
