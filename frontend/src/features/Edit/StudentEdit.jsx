/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function StudentEdit({ student }) {
  const [status, setStatus] = useState('прошел');

  async function povtor() {
    const response = await fetch(`/phaseshift/${student.id}`, { method: 'PUT' });
    const result = await response.json();
    setStatus(result.status);
  };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <button id={student.id} onClick={povtor} style={{listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} key={student.id}>
                {student.name}  
                <div>Фаза: {student.phase}</div>
                <div>Статус:{status}</div>
                </button>
            </div>
        </div>
    )
}

export default StudentEdit;
