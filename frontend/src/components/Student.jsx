import React from "react";
import { useState } from "react";

function Student ({student}) {
    
  const [thanks, setThanks] = useState(0)

  async function plus(event) {
    event.preventDefault();
    setThanks((prev) => prev + 1);

    const result = await fetch('/list', {
      method: 'PUT',
      body: JSON.stringify({ thanks }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await result.json();
  }

  // function minus() {
  //   setThanks(thanks > 0 ? thanks - 1 : thanks);
  // }


    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <button onClick={plus} style={{listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} key={student.id}>
                {student.name}  
                <div>{thanks}</div>
                </button>
            </div>
        </div>
    )
}


export default Student;