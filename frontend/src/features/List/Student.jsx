/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

function Student({ student }) {
  const [thanks, setThanks] = useState(student.thanks);

  const plus = async () => {
    const response = await fetch(`/list/${student.id}`, {
      method: 'PUT',
      body: JSON.stringify({ thanks, status: 'plus' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    setThanks(result.thanks);
  };

  const minus = async () => {
    const response = await fetch(`/list/${student.id}`, {
      method: 'PUT',
      body: JSON.stringify({ thanks, status: 'minus' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    setThanks(result.thanks);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100vh' }}>
      <div className="buttonsDiv">
        <button onClick={minus} className="minusButton">-</button>
        <button onClick={plus} onTouchCancel className="studentInfoButton">
          {student.name}
          <div>{thanks}</div>
        </button>
      </div>
    </div>
  );
}

export default Student;
