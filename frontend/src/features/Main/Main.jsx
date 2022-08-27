// import { useState, useEffect } from "react";

function Main() {

//   const [value, setValue] = useState('')

//   function povtor() {
//     setThanks(() => {
//     fetch(`/phaseshift/${student.id}`)
//       .then((result) => result.json())
//       .then((data) => {
//         setThanks(data.status);
//       });
//   }, []);

  return (
    <div>
    <div className="App">
    <header className="App-header">
      <h1>Elbrus Thanks</h1>
      <form action="/list" name="searchForm">
        <button style={{listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} > 
        <div>Перейти</div>
        </button>
      </form>
    </header>
    </div>
    </div>
    );
}

export default Main;