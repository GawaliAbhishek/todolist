import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import '../CSS/Todo.css';
import Comp1 from "./Comp1";
const TodoList=()=>{
    const [item,updateItem]=useState();
    const[items,addItems]=useState([]);

    const AddItem=(event)=>{
      updateItem(event.target.value);
    }
    const AddItem2=()=>{
        updateItem("")
        addItems((preVal)=>{
           return [...preVal,item]
        });
    }

    const reSet=()=>{
        addItems([]);
    }
return(
    <>
    <div className="main_div">
        <div className="center_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input type="text" name="work" placeholder="Add an Item" value={item} id="" onChange={AddItem}/>
             <Button className="newBtn" onClick={AddItem2} ><AddIcon/></Button>
             <br/>
              <ol>
                  {items.map((val ,index)=>{
                      return(<Comp1 text={val} key={index}/>)
                  })}
                  
              </ol>
              <br />

              <Button className="resBtn" onClick={reSet}> Reset </Button>

        </div>
    </div>

    </>
);
}
export default TodoList;