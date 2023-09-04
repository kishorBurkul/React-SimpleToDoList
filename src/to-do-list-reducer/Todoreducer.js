import React, { useReducer } from "react";
import TODOS_ACTION from './Todos_Action'
import Todo_list from "./Todo_list";



const initialState =[]

// const TODOS_ACTION ={

//     ADD_TASK:"add_task",
//     DELETE_TASK:"delete_task",
//     RESET_TASK:"reset_task"
// }
    
function reducer(state ,action){
          switch(action.type){
           case  TODOS_ACTION.ADD_TASK : 
            return[
                ...state,
                {
                    id:state.length+1,
                    name:action.payload
                }
            ]
           case TODOS_ACTION.DELETE_TASK: 
           
           return state.filter(d =>d.id !== action.payload)

            case TODOS_ACTION.RESET_TASK : return init(action.payload)

           default: return state 

          }


}


function init(initialState){

    //logic for initial state

    return initialState
}


const Todoreducer =()=>{
const[todos , dispatch]=useReducer(reducer , initialState , init)

return(<div>
   <h4>Todo List {todos.length}</h4>
  <h2>Todo List Using UseRuducer</h2>
  <label>Add New Task:</label>
  <input type="text" name="name" onBlur={(e)=>dispatch({type:TODOS_ACTION.ADD_TASK , payload:e.target.value})}/>

   <button onClick={()=>dispatch({type:TODOS_ACTION.RESET_TASK, payload:initialState})}>Reset</button>
  <hr/>

  <Todo_list  todos={todos} dispatch={dispatch} TODOS_ACTION={TODOS_ACTION}/>


  
  {/* {todos.map((todo ,index)=>
  <li key={todo.id}>{todo.name}
   <span><button onClick={()=> dispatch(
    {type:TODOS_ACTION.DELETE_TASK,payload:todo.id})}
    
    >Delete</button></span>
  </li> 
  
  )} */}



</div>)


}
export default Todoreducer;