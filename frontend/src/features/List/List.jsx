import { useState, useEffect } from "react";
import Student from "./Student.jsx";


function List () {
  const [page, setPage] = useState('phase 1');
    const handleClickPhase1 = (event) => {
        event.preventDefault();
        setPage('phase1');
    }
    const handleClickPhase2 = (event) => {
        event.preventDefault();
        setPage('phase2');
    }
    const handleClickPhase3 = (event) => {
        event.preventDefault();
        setPage('phase3');
    }

  

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch ('/list')
      .then((result) => result.json())
      .then((data) => {
        setStudents(data);
      });
  }, [])


  const [value, setValue] = useState('')

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().includes(value.toLowerCase())
  })






  return (
    <div className="App">
    <header className="App-header">
      <h1>Elbrus Thanks</h1>
    <div>
      <h1>Elbrus Thanks</h1>
      <form name="searchForm">
        <input 
        type="text" 
        name="searchInput" 
        placeholder="Поиск..." 
        style={{height: '30px', width: '400px'}}
        onChange={(event) => setValue(event.target.value)}
        />
      </form>

      <ul>
          {filteredStudents.map((student) => 
              <Student student={student}/>
          )}
      </ul>
      
      <div className="phasesDiv" >
            <button onClick={handleClickPhase1} id="phase1">1</button>
            <button onClick={handleClickPhase2} id="phase2">2</button>
            <button onClick={handleClickPhase3} id="phase3">3</button>
      </div>
    </div>
    </header>
    </div>
    );
}

export default List;
