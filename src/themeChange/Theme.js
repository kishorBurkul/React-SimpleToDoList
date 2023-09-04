import React, { useState } from "react";

function Theme(){

    
    // const[theme , setTheme]= useState(true);
    // const colorChange=()=>{
    //       setTheme(!theme)
    //     }
   
    const theme ={
        darkTheme:{
            color:'white',
            backgroundColor:"grey",
            padding:'20px'
        },
        lightTheme:{
            backgroundColor:"white",
            color:"black",
            padding:'20px'
        }
    }

  const [Changetheme , setChangetheme] =useState(false)


    return(<div>


        Enable Dark Theme:
        <input type="checkbox"  onClick={()=>{setChangetheme((preState)=>!preState)}}/>

        <div style={Changetheme?theme.darkTheme:theme.lightTheme}>
            <h2>useState Hook in React</h2>
            <p>useState Hooks Allows us to use state inside functional Components</p>
        </div>

        {/* <div>
            <label>Change Theme Color</label>
            <input type="checkbox" name="checkbox" onChange={colorChange} />
         </div>
         {theme?<div style={{background:'black' , color:"white"}}>
            <h2>Hi Color Change using Above checkbox</h2>
         </div>:<div style={{background:'grey' , color:'white'}}>
         <h2>Hi Color Change black to white </h2>
         </div>} */}


       
         


    </div>)
}
export default Theme;
