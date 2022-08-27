import React from "react";
import { useState } from "react";

function Student ({student}) {
  const [thanks, setThanks] = useState(student)

function plus(event, id, studentThanks) {
    setThanks(async (prev) => {
      const response = await fetch(`/list/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ thanks: studentThanks }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await response.json();
      setThanks(result);
    })
  }

  // function minus() {
  //   setThanks(thanks > 0 ? thanks - 1 : thanks);
  // }


    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <button onClick={(event) => plus(event, student.id, student.thanks)} style={{listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} key={student.id}>
                {student.name}  
                <div>{thanks.thanks}</div>
                </button>
            </div>
        </div>
    )
}


export default Student;