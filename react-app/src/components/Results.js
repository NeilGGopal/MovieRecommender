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

/*
 * Annabelle, 99, 2014
 * Insidious, 101, 2010
 * Get Out, 104, 2017
 * The Empty Man, 137, 2020
 * Hereditary, 127, 2018
 * A Nightmare on Elm Street, 91, 1984
 * Halloween, 91, 1978
 */

export default Results;
