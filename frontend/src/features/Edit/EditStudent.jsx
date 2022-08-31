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
    console.log(result);
  }

  return (
    <form action={`/api/edit/${student.id}`} method="PUT">
      <div className="input-group">
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
          style={{ width: '25vw', height: '7vh', fontSize: '15px' }}
        />
        <button
          onClick={changeStudent}
          className="btn btn-primary"
          type="button"
          style={{ width: '20vw', height: '7vh', fontSize: '12px', color: '#29EDFF', backgroundColor: '#4520AB', border: '1px solid white' }}
        >
          Применить

        </button>
      </div>
    </form>

  );
}

export default EditStudent;
