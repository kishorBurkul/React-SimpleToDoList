import React, { useState } from "react";
import data from './data.js'
import  './card.css'


function Quotes(){

    const[quote , setQuote] = useState(data[0]);


    const changeQuotes =()=>{
        let ranNum = Math.floor(Math.random()*data.length);
        setQuote(data[ranNum]);
      
    }

    return(<div className="mainclss">
        <div className="card-second">
         <p>{quote.text}</p>
         <h1>{quote.author}</h1>
         <button className="btn" onClick={changeQuotes}>Next</button>
        </div>
        </div>)
}
export default Quotes