import React, { useState } from "react";
import './Calculator.css';

function CalculatorDemo(){


 const [result,setResult]=useState("");


 const calValue=(event)=>{
 
    setResult(result.concat(event.target.value))

 }

const clear=()=>{
    setResult("")
}

const Equal = ()=>{

    setResult(eval(result).toString());
}


    return(<div>

<table id="calcu">
        <tr>
            <td colspan="3">
                <input type="text" id="result" placeholder="0" value={result}/>
            </td>
            <td><input type="button" value="c" onClick={clear}/></td>
        </tr>
  
        <tr>
            <td><input type="button" value="1" onClick={calValue}/></td>
            <td><input type="button" value="2" onClick={calValue} /></td>
            <td><input type="button" value="3" onClick={calValue}/></td>
            <td><input type="button" value="/" onClick={calValue}/></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onClick={calValue}/></td>
            <td><input type="button" value="5" onClick={calValue}/></td>
            <td><input type="button" value="6" onClick={calValue}/></td>
            <td><input type="button" value="*" onClick={calValue}/></td>
        </tr>
        <tr>
            <td><input type="button" value="7" onClick={calValue}/></td>
            <td><input type="button" value="8" onClick={calValue}/></td>
            <td><input type="button" value="9" onClick={calValue}/></td>
            <td><input type="button" value="-" onClick={calValue}/></td>
        </tr>
        <tr>
            <td><input type="button" value="0" onClick={calValue}/></td>
            <td><input type="button" value="." onClick={calValue}/></td>
            <td><input type="button" value="=" onClick={Equal}/></td>
            <td><input type="button" value="+" onClick={calValue}/></td>
        </tr>
    </table>
    
    </div>)
}
export default CalculatorDemo;