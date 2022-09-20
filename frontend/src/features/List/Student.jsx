/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function Student({ student }) {
  const [thanks, setThanks] = useState(student.thanks);

  const plus = async () => {
    const response = await fetch(`/api/list/${student.id}`, {
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
    const response = await fetch(`/api/list/${student.id}`, {
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
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
      style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', flexDirection: 'row', justifyContent: 'center' }}
    >
      <button
        onClick={minus}
        type="button"
        className="btn btn-outline-secondary minus-btn"
      >
        ➖
      </button>
      <button
        onClick={plus}
        type="button"
        className="btn btn-outline-secondary name-"
        style={{ hover: 'none', flexBasis: '65%', flexShrink: '0', height: '7vh', fontSize: '15px', color: 'black' }}
      >
        {student.name}
      </button>
      <button
        onClick={plus}
        type="button"
        className="btn btn-outline-secondary"
        style={{ flexBasis: '20%', flexShrink: '0', height: '7vh', fontSize: '15px', color: 'black' }}
      >
        {thanks}
      </button>
    </div>
  );
}

export default Student;
