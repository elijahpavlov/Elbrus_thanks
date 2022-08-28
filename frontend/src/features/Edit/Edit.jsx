import { useState, useEffect } from "react";
import StudentEdit from "./StudentEdit.jsx";

function Edit() {
  const [students, setStudents] = useState([]);
  const [phase, setPhase] = useState(3);

  useEffect(() => {
    fetch('/phaseshift')
      .then((result) => result.json())
      .then((data) => setStudents(data));
  }, []);

  // Фильтруем студентов согласно номеру фазы в состоянии phase
  const filteredStudents = students.filter((student) => student.phase === phase);
  console.log('filteredStudents', filteredStudents);

  // При нажатии кнопки переходим на младшую фазу
  function nextPhase() {
    if(phase > 1) {
      setPhase(phase -1);
    }
  }
  // Перевод студентов на следующие фазы 
  async function shiftPhase() {
    const response = await fetch('/phaseshift', {
      method: 'PUT'
    });
    const result = await response.json();
    console.log(result);
    setThanks('result', result);
  };

  return (
    <div>
    <div className="App">
    <header className="App-header">
      <h1>{`Выберете повторщиков c фазы ${phase}`}</h1>
      <ul>
          {filteredStudents.map((student) => 
              <StudentEdit student={student}/>
          )}
      </ul>
      {(phase > 1)?
        <button onClick={nextPhase}>{`Перейти к фазе ${phase-1}`}</button>
        :
        <button onClick={shiftPhase}> Перевести студентов на фазы и добавить новых студентов</button>
      }

    </header>
    </div>
    </div>
    );
}

export default Edit;
