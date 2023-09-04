import React, { useState } from 'react'
import  './style.css'
import TodoList from './TodoList';

function Todo(){


const [initialValue , setInitialValue] =useState('')

const [addItem , setItem] = useState([]);

const initialHandler =(event)=>{
setInitialValue(event.target.value)
}

const addValue = () =>{
    setItem((oldValue)=>{
        return [...oldValue , initialValue]
    });
    setInitialValue("");
}


const deleteItem = (id) =>{
   console.log("deleted")

    setItem((oldItem)=>{
        return oldItem.filter(( arrElem,index) =>{
            return index !== id;
        })
       })


}

return(<div className="main_div">
    <div className="center_div">
    <br></br>
    <h1>Todo-List</h1>
    <br></br>

    <input type="text" placeholder="Add a Item" value={initialValue}
     onChange={initialHandler}/>

    <button className="button" onClick={addValue}>+</button>

    <ol>
    
        {/* <li>{initialValue}</li> */}
       { addItem.map((item , index)=>{
           return <TodoList
           onSelect={deleteItem}
            key={index}
            id={index}
           text={item} />
        })
}

    </ol>
    </div>

    
</div>)

}

export default Todo;
