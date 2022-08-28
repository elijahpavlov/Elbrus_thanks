/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function StudentEdit({ student }) {
  const [thanks, setThanks] = useState(student.status);

  async function povtor() {
    const response = await fetch(`/phaseshift/${student.id}`, { method: 'PUT' });
    const result = await response.json();
    setThanks(result.status);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div>
        <button id={student.id} onClick={povtor} style={{ listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} key={student.id}>
          {student.name}
          <div>
            Фаза:
            {' '}
            {student.phase}
          </div>
          <div>
            Сасибо:
            {thanks}
          </div>
        </button>
      </div>
    </div>
  );
}

export default StudentEdit;
