/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import { React, useState, useEffect } from 'react';
import StudentEdit from './StudentEdit';

function Edit() {
  const [students, setStudents] = useState([]);
  const [newStudents, setNewStudents] = useState([]);
  const [phase, setPhase] = useState(3);

 // Отрисовывает студентов согласно фазе в состоянии
 useEffect(() => {
    if (phase > 0) {
    fetch(`/phaseshift/phase/${phase}`)
    .then((result) => result.json())
    .then((data) => setStudents(data));
    } else {
      fetch(`/phaseshift`,{
        method: 'PUT'
      }
      )
      .then((result) => result.json())
      .then((data) => setStudents(data));  
    } 
  }, [phase]);
  
  // Изменяет состояние фазы
  function nextPhase() {
    if(phase > -1 ){
      setPhase(phase - 1);
    }
  }

  async function addStudents(event) {
      event.preventDefault();

      console.log(event.target);
      
      const data = {
        name: event.target.name.value,
        phase: event.target.phase.value,
        thanks: 0,
        status: 'прошел',
      }

      const response = await fetch('/phaseshift/newstudents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      console.log('response', response)
  
      const newStudent = await response.json();

      console.log('newStudent', newStudent)

      setNewStudents((newStudents) => [
        ...newStudents, 
        newStudent 
      ]);

      event.target.reset();
  }

  return (
    <div>
    <div className="App">
    <header className="App-header">
      {(phase === 0)? 
      <>
      <form onSubmit={addStudents} method="POST" >
      <h1>Добавить нового студента:</h1>
      <input type="text" name="name" placeholder='name of new student' />
      <br/>
      <input type="text" name="phase" placeholder='phase of new student' />
      <br/>
      {/* <input type="text" name="thanks" placeholder='thanks of new student' />
      <br/> */}
      <br/>
      <button>Добавить студентов</button>
      </form>
      <form type="submit" action="/list">
      <button>Перейти к списку студентов</button>
      </form>
      <h1>Перечень новых студентов первой фазы</h1>
      <ul>
          {newStudents.map((student) => 
              <StudentEdit student={student}  key={student.id} />
          )}
      </ul>
      <h1>Перечень повторщиков первой фазы:</h1>
      </>
      :
      <h1>{`Выберете повторщиков c фазы ${phase}`}</h1>
      }
      <ul>
          {students.map((student) => 
              <StudentEdit student={student}  key={student.id} />
          )}
      </ul>

      {(phase > 1)?
      <button onClick={nextPhase}>{`Перейти к фазе ${phase-1}`}</button>
        :
      <>
      {(phase === 1)?
      <button onClick={nextPhase}> Перенести фазы</button>
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
