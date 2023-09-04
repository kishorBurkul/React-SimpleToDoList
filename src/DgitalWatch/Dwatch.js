import React, { useState } from "react";

const Dwatch=()=>{


    let time = new Date().toLocaleTimeString();

    const [ctime , setCtime]=useState(time);


    const UpdateTime =()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    // setInterval(UpdateTime=>1000)
     
     setInterval(UpdateTime,1000);


    return(<>
    
    <h2>{ctime}</h2>
    </>)

}
export default Dwatch