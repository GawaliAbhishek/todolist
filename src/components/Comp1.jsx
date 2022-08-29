import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import '../CSS/Todo.css'

const Comp1=(prop)=>{
    const [line,setLine]=useState(false);
const cutIt=()=>{
    setLine(true);
}
    return(
        <div className="todo_style">
            <span onClick={cutIt}><DeleteIcon className="deleteIcon"/></span>
         <li style={{textDecoration: line ? "line-through" : "none"}}> {prop.text}</li>
         </div>
         );

}
export default Comp1;