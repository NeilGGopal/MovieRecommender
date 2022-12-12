import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import {Button, Container} from 'react-bootstrap';
import axios from 'axios'

const data = [
  { name: "Annabelle", IMDB_rating: "5.4", year: "2014", length: "99"},
  { name: "Insidious", IMDB_rating: "6.8", year: "2010", length: "101"},
  { name: "Get Out", IMDB_rating: "7.7", year: "2017", length: "104"},
  { name: "The Empty Man", IMDB_rating: "6.2", year: "2020", length: "137"},
  { name: "Hereditary", IMDB_rating: "7.3", year: "2018", length: "127"},
  { name: "A Nightmare on Elm Street", IMDB_rating: "7.4", year: "1984", length: "91"},
  { name: "Halloween", IMDB_rating: "7.7", year: "1978", length: "91"}
]

export default class Recommend extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      button: 0
    }
  }

  getFilter (mainTable, url) {
    axios.get(url).then(
      res => res.data.forEach((movie) => {
        console.log(movie)
        const row = document.createElement("tr")
        const currName = document.createElement("td")
        currName.innerText = movie.name
        const currLength = document.createElement("td")
        currLength.innerText = movie.length
        const currYear = document.createElement("td")
        currYear.innerText = movie.year
        const currGenre = document.createElement("td")
        currGenre.innerText = movie.genre
        const currRegion = document.createElement("td")
        currRegion.innerText = movie.region
        const currActor = document.createElement("td")
        currActor.innerText = movie.actor
        row.appendChild(currName)
        row.appendChild(currLength)
        row.appendChild(currYear)
        row.appendChild(currGenre)
        row.appendChild(currRegion)
        row.appendChild(currActor)
        mainTable.appendChild(row)
      })
    )
  }

  onSubmit (e) {
    e.preventDefault()
    console.log(this.state.button)
    const mainTable = document.getElementById("main-table")
    while (mainTable.hasChildNodes()) {
      mainTable.removeChild(mainTable.lastElementChild)
    }
    const url = 'http://localhost:5500/get-' + document.getElementById('filter-input').value.replace(' ', '-').toLowerCase() + '/'
    if (this.state.button === 1) {
      this.getFilter(mainTable, url)
    } else if (this.state.button === 2) {
      this.getFilter(mainTable, url)
    } else if (this.state.button === 3) {
      this.getFilter(mainTable, url)
    } else {
      this.getFilter(mainTable, url)
    }
  }

  render () {
    return (
      <div className="recommend" align="center">
        <br></br>
        <header className="hdr">Recommender</header>
        <br></br>
        <form onSubmit={this.onSubmit}>
          <button className="btn btn-outline-danger" type="submit" onClick={() => (this.setState({ button: 1 }))}>Genre</button>
          &nbsp;
          &nbsp;
          <button className="btn btn-outline-danger" type="submit" onClick={() => (this.setState({ button: 2 }))}>Actor</button>
          &nbsp;
          &nbsp;
          <button className="btn btn-outline-danger" type="submit" onClick={() => (this.setState({ button: 3 }))}>Region</button>
          <br></br>
          <br></br>
        </form>
        <fieldset className='control-form me-2'>
          <div>
            <input
              style={{width: "300px", marginTop: "10px", height:'40px', borderRadius:'5px'}}
              type="text"
              id='filter-input'
              placeholder="   Find a movie..."
            />
            &nbsp; &nbsp;
          </div>
        </fieldset>
        <div align="center">
          <table id="main-table">
            <tr>
              <th>Movie Name</th>
              <th>Length</th>
              <th>Year</th>
              <th>Genre</th>
              <th>Region</th>
              <th>Actor</th>
            </tr>
          </table>
        </div>
        <br></br>
        <br></br>
      </div>
    )
  }
}
