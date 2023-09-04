import React from "react";

const Crud = ()=>{

return(<>


<div class="container">
  <div class="row">
    <div class="col">
 
    </div>
    <div class="col">
    <form>
    <h2>Create</h2>   
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    <div class="col">
     
    </div>
  </div>
</div>

</>)
}
export default Crud