import React from "react";
import { useState } from "react";

function Student ({student}) {
    const [thanks, setThanks] = useState(0)

  function plus() {
    setThanks(thanks + 1);
  }

  function minus() {
    setThanks(thanks > 0 ? thanks - 1 : thanks);
  }


    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <button onClick={plus} style={{listStyle: 'none', border: '1px solid black', margin: '5px', width: '500px', height: '50px' }} key={student.id}>
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


export default Student;