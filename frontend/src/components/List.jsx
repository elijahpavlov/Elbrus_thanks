import { useState, useEffect } from "react";
import Student from "./Student.jsx";
import Navigation from "./Navigation.jsx";

function List () {
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
    <div>

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
      
      <div>
        <Navigation/>
      </div>

    </div>
    );
}

export default List;
