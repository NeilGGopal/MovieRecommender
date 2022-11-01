import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Planner() {
  return (
    <div className="planner">
        <br></br>
        <header className="hdr">Planner</header>
         <br></br>
         <button class="btn btn-outline-danger">Remove Movie from Watchlist</button>
         <button class="btn btn-outline-danger">Add Movie to Watchlist</button>
    </div>
  ); 
}

export default Planner;
