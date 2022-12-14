/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function StudentEdit({ student }) {
  const [status, setStatus] = useState('прошел');

  async function povtor() {
    if (status === 'прошел') {
      const response = await fetch(`/phaseshift/${student.id}`, { method: 'PUT' });
      const result = await response.json();
      setStatus(result.status);
    } else {
      const response = await fetch(`/phaseshift/cancel/${student.id}`, { method: 'PUT' });
      const result = await response.json();
      setStatus(result.status);
    }
  }

  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
      style={{ width: '100vw', display: 'flex', flexWrap: 'wrap', alignContent: 'center', flexDirection: 'row', justifyContent: 'center' }}
    >
      <button
        onClick={povtor}
        id={student.id}
        key={student.id}
        type="button"
        className="btn btn-outline-secondary"
        style={{ flexBasis: '55%', height: '7vh', fontSize: '15px', color: 'black' }}
      >
        {student.name}
      </button>

      <button
        onClick={povtor}
        id={student.id}
        key={student.id}
        type="button"
        className="btn btn-outline-secondary"
        style={{ flexBasis: '20%', height: '7vh', fontSize: '15px', color: 'black' }}
      >
        Фаза:
        {' '}
        {student.phase}
      </button>

      <button
        onClick={povtor}
        id={student.id}
        key={student.id}
        type="button"
        className="btn btn-outline-secondary"
        style={{ flexBasis: '20%', height: '7vh', fontSize: '15px', color: 'black' }}
      >
        {status}
      </button>
    </div>
  );
}

export default StudentEdit;
