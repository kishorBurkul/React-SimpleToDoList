import React, { useEffect, useState } from "react";

function User(){

    // const user=[
    //     {id:1, name:"kishor"},
    //     {id:2, name:"kishor"},
    //     {id:3, name:"kishor"}
    // ]

    const [userlist , setUserlist]=useState([])

    const [refresh , setRefresh]=useState(false)
    
    console.log("useEffect Component")

    useEffect(()=>{
     const url="https://jsonplaceholder.typicode.com/users";

     fetch(url)
     .then((data)=>data.json())
     .then(result=>setUserlist(result));
       },[refresh])

return(<div>
    <h2>User Component using UseEffect hook </h2>
    <button onClick={()=>setRefresh(refre =>!refre)}>Refresh</button>
     <ul>
 {userlist.map((username , index)=>
    <li  key={index}>{username.name}</li>
 )}
</ul>

</div>)
}
export default User