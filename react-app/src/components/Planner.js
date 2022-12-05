import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Planner() {
  return (
    <div className="planner">
        <br></br>
        <header className="hdr">Planner</header>
         <br></br>
         <button class="btn btn-outline-danger">Remove Movie</button>
         &nbsp;
         &nbsp;
          <form>
            <label for="mname">Movie Name:</label><br></br>
            <input id="mname" type="text"></input><br></br>
            <label for="mlength">Movie Length (Minutes):</label><br></br>
            <input id="mlength" type="text"></input><br></br>
            <label for="myear">Movie Year</label><br></br>
            <input id="myear" type="text"></input><br></br>
          </form>
         <button class="btn btn-outline-danger">Add Movie</button>
    </div>
  ); 
}

export default Planner;
