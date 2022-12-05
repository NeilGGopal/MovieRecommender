import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Planner() {
  return (
    <div className="planner">
        <br></br>
        <header className="hdr">Planner</header>
         <br></br>

         &nbsp;
         &nbsp;
          <form>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
              <input type="text" className="form-control" placeholder="Enter movie name..." />
            </fieldset>
            <br></br>
            <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
              <input type="text" className="form-control" placeholder="Enter movie length (minutes)" />
            </fieldset>
            <br></br>
            <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
              <input type="text" className="form-control" placeholder="Enter movie year" />
            </fieldset>
            <br></br>
          </form>
         <button class="btn btn-outline-danger">Add Movie</button>
    </div>
  ); 
}

export default Planner;
