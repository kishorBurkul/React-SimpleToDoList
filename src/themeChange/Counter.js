import React, { useState } from "react";
import User from "./User";

function Counter(){

    const [counter , setCounter]=useState(0)
   console.log("counter");
    return(<div>
    
     <button onClick={()=>setCounter(value=>value+1)}>Counter{counter}</button>
    <User/>
    </div>)
}

export default Counter