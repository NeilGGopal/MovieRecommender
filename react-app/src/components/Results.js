import logo from '../logopop.png';
import React from 'react';
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

function Results() {
  return (
    <div className="land">
        <img src={logo} className="App-logo" alt="logo" />
          <header className="mainhdr">SHUFFLIX</header>
          <table>
        <tr>
          <th>Movie Name</th>
          <th>IMDB_rating</th>
          <th>Year</th>
          <th>Length</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.IMDB_rating}</td>
              <td>{val.year}</td>
              <td>{val.length}</td>
            </tr>
          )
        })}
      </table> 
    </div>
  ); 
}

/*
 * Annabelle, 5.4, 2014, 99
 * Insidious, 6.8, 2010, 101
 * Get Out, 7.7, 2017, 104, 
 * The Empty Man, 6.2, 2020, 137
 * Hereditary, 7.3, 2018, 127
 * A Nightmare on Elm Street, 7.4, 1984, 91
 * Halloween, 7.7, 1978, 91  
 */

export default Results;
