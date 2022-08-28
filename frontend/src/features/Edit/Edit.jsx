/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import { React, useState, useEffect } from 'react';
import StudentEdit from './StudentEdit';

function Edit() {
  const [students, setStudents] = useState([]);
  const [phase, setPhase] = useState(3);


 // Отрисовывает студентов согласно фазе в состоянии
useEffect(() => {
    fetch(`/phaseshift/phase/${phase}`)
      .then((result) => result.json())
      .then((data) => setStudents(data));
  }, [phase]);


  // Изменяет состояние фазы
  function nextPhase() {
    if(phase > 1) {
      setPhase(phase-1);
    }
  };

  // Перевод студентов на следующие фазы с учетом повторов и удаление 3 фазы
  async function shiftPhase() {
    const response = await fetch('/phaseshift', {
      method: 'PUT'
    });
    const result = await response.json();

    console.log('result', result);
    setStudents(result);
    setPhase(phase-1);
  };

  return (
    <div>
    <div className="App">
    <header className="App-header">
    {(phase === 0)? 
      <>
      <form >
        <h1>Добавить нового студента:</h1>
      <input type="text" name="name" placeholder='name of new student' />
      <br/>
      <input type="text" name="phase" placeholder='phase of new student' />
      <br/>
      <input type="text" name="thanks" placeholder='thanks of new student' />
      <br/>
      <br/>
        <button>Добавить студента</button>
      </form>
      <form type="submit" action="/list">
        <button>Перейти к списку студентов</button>
      </form>
      </>
      :
      <></>
  }
        {(phase >= 1)?
      <h1>{`Выберете повторщиков c фазы ${phase}`}</h1>
      :
      <></>
        }
      <ul>
          {students.map((student) => 
              <StudentEdit student={student}/>
          )}
      </ul>
      {(phase > 1)?
        <button onClick={nextPhase}>{`Перейти к фазе ${phase-1}`}</button>
        :
        <>
        {(phase === 1)?
          <button onClick={shiftPhase}> Добавить новых студентов</button>
          :
          <></>
        }
        </>
      }

        </header>
      </div>
    </div>
  );
}

export default Edit;
