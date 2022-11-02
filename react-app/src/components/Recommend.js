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
          <Button variant="btn btn-outline-danger">Genre</Button>
          &nbsp;
          &nbsp;
          <Button variant="btn btn-outline-danger">Actor</Button>
          &nbsp;
          &nbsp;
          <Button variant="btn btn-outline-danger">Region</Button>
          &nbsp;
          &nbsp;
          <Button variant="btn btn-outline-danger">Rating </Button>
          <br></br>
          <br></br>
          <div className='search'>
            <input class="form-control me-2" type="search" placeholder="Find a movie..." aria-label="Search"/> 
            <Button as={Link} to="/results" class="btn btn-outline-success" type="submit">Search</Button>
          </div>
          
    </div>
  ); 
}

export default Recommend;
