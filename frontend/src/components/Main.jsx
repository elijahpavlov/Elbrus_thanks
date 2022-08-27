import { useState, useEffect } from "react";
import Student from "./Student.jsx";
import Navigation from "./Navigation.jsx";

function Main() {
  const studentsArr = [
    { id: 1, name: 'Адам Махмутов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 2, name: 'Вадим Акуленко', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 3, name: 'Вадим Жданов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 4, name: 'Виктория Жугдурова', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 5, name: 'Владимир Леонов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 6, name: 'Даниил Ледяев', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 7, name: 'Денис Осотов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 8, name: 'Илья Павлов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 9, name: 'Кирилл Шендяпин', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 10, name: 'Кристина Синоверская', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 11, name: 'Оскар Шейхутдинов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 12, name: 'Сергей Морозов', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 13, name: 'Тамара Гаспарян', phase: 3, thanks: 0, status: true, createdAt: new Date(), updatedAt: new Date() },
  ];


  const [value, setValue] = useState('')

  const filteredStudents = studentsArr.filter((student) => {
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

export default Main;
