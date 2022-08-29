import { useState, useEffect } from "react";
import StudentEdit from "./StudentEdit.jsx";

function Edit() {
  const [students, setStudents] = useState([]);
  const [phase, setPhase] = useState(3);


 // Отрисовывает студентов согласно фазе в состоянии
if (phase > 0) {
  useEffect(() => {
    fetch(`/phaseshift/phase/${phase}`)
    .then((result) => result.json())
    .then((data) => setStudents(data));
  }, [phase]);
}
  
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
    setPhase(phase-1);
    setStudents(result);
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
              <StudentEdit student={student}  key={student.id} />
          )}
      </ul>

      {(phase > 1)?
        <button onClick={nextPhase}>{`Перейти к фазе ${phase-1}`}</button>
        :
        <>
        {(phase === 1)?
          <button onClick={shiftPhase}> Перенести фазы</button>
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
