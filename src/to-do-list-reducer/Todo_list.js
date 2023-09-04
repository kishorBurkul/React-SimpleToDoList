import React from "react";

function Todo_list({todos ,dispatch,TODOS_ACTION} ){

    return(
    
    <>
    {todos.map((todo ,index)=>
  <li key={todo.id}>{todo.name}
   <span><button onClick={()=> dispatch(
    {type:TODOS_ACTION.DELETE_TASK,payload:todo.id})}
    
    >Delete</button></span>
  </li> 
  
  )}      
        
    </>)


}

export default Todo_list