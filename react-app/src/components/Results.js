import logo from '../logopop.png';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {Button, Container} from 'react-bootstrap';

function Results() {
  return (
    <div className="land">
        <img src={logo} className="App-logo" alt="logo" />
          <header className="mainhdr">SHUFFLIX</header>
          <Link to="/recommend"> 
            <Button variant="btn btn-danger">Recommender</Button>
          </Link>
          &nbsp;
          &nbsp;
          <Link to="/planner"> 
            <Button variant="btn btn-danger">Planner</Button>
          </Link>   
    </div>
  ); 
}

export default Results;
