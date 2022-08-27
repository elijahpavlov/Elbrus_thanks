import React from "react";
import { useState, useEffect } from "react";

function StudentEdit ({student}) {
    const [thanks, setThanks] = useState(0)

  
  
    
    function povtor() {
      setThanks(() => {
      fetch(`/phaseshift/${student.id}`)
        .then((result) => result.json())
        .then((data) => {
          setThanks(data.status);
        });
    }, []);

  }

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <button id={student.id} onClick={povtor} style={{listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} key={student.id}>
                {student.name}  
                <div>{thanks}</div>
                </button>
            </div>
            <div>
                {/* <button className="plusButton" onClick={plus}>+</button>
                <button className="minusButton" onClick={minus}>-</button> */}
            </div>
            {/* <div>
                {thanks}
            </div>  */}
        </div>
    )
}


export default StudentEdit;