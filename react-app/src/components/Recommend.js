import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {Button, Container} from 'react-bootstrap';
const data = [
  { name: "Annabelle", IMDB_rating: "5.4", year: "2014", length: "99"},
  { name: "Insidious", IMDB_rating: "6.8", year: "2010", length: "101"},
  { name: "Get Out", IMDB_rating: "7.7", year: "2017", length: "104"},
  { name: "The Empty Man", IMDB_rating: "6.2", year: "2020", length: "137"},
  { name: "Hereditary", IMDB_rating: "7.3", year: "2018", length: "127"},
  { name: "A Nightmare on Elm Street", IMDB_rating: "7.4", year: "1984", length: "91"},
  { name: "Halloween", IMDB_rating: "7.7", year: "1978", length: "91"}
]

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
