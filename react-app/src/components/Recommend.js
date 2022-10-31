import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {Button, Container} from 'react-bootstrap';

function Recommend() {
  return (
    <div className="recommend">
          <br></br>
          <header className="hdr">Recommender</header>
          <br></br>
          <Button variant="btn btn-danger">Genre</Button>
          &nbsp;
          &nbsp;
          <Button variant="btn btn-danger">Actor</Button>
          &nbsp;
          &nbsp;
          <Button variant="btn btn-danger">Region</Button>
          &nbsp;
          &nbsp;
          <Button variant="btn btn-danger">Rating </Button>
    </div>
  ); 
}

export default Recommend;
