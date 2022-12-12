import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

export default class Planner extends Component {
  constructor (props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLength = this.onChangeLength.bind(this)
    this.onChangeYear = this.onChangeYear.bind(this)
    this.onChangeGenre = this.onChangeGenre.bind(this)
    this.onChangeRegion = this.onChangeRegion.bind(this)
    this.onChangeActor = this.onChangeActor.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: '',
      length: '',
      year: '',
      genre: '',
      region: '',
      actor: '',
      button: 0
    }
    axios.get('http://localhost:5500/find-all-movies').then(
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
        document.getElementById("main-table").appendChild(row)
      })
    )
  }

  onChangeName (e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeLength (e) {
    this.setState({
      length: e.target.value
    })
  }

  onChangeYear (e) {
    this.setState({
      year: e.target.value
    })
  }

  onChangeGenre (e) {
    this.setState({
      genre: e.target.value
    })
  }

  onChangeRegion (e) {
    this.setState({
      region: e.target.value
    })
  }

  onChangeActor (e) {
    this.setState({
      actor: e.target.value
    })
  }

  onSubmit (e) {
    e.preventDefault()

    console.log(this.state.button)
    console.log('Form submitted:')
    console.log(`Movie Name: ${this.state.name}`)
    console.log(`Movie Length (Minutes): ${this.state.length}`)
    console.log(`Movie Release Year: ${this.state.year}`)
    console.log(`Movie Genre: ${this.state.genre}`)
    console.log(`Movie Region: ${this.state.region}`)
    console.log(`Movie Actor: ${this.state.actor}`)

    const newMovie = {
      name: this.state.name,
      length: this.state.length,
      year: this.state.year,
      genre: this.state.genre,
      region: this.state.region,
      actor: this.state.actor
    }

    if (this.state.button === 2) {
      axios.post('http://localhost:5500/create', newMovie).then(res => console.log(res.data))
      this.setState({
        name: '',
        length: 0,
        year: 0,
        genre: '',
        region: '',
        actor: ''
      })
    } else {
      axios.post('http://localhost:5500/delete-movie', newMovie).then(res => console.log(res.data))
      this.setState({
        name: '',
        length: 0,
        year: 0,
        genre: '',
        region: '',
        actor: ''
      })
    }
  }

  render () {
    return (
      <div className="planner">
        <br></br>
        <header className="hdr">Planner</header>
        <br></br>
        &nbsp;
        &nbsp;
        <form onSubmit={this.onSubmit}>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
            <input type="text" className="form-control" placeholder="Enter movie name..." value={this.state.name} onChange={this.onChangeName}/>
          </fieldset>
          <br></br>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
            <input type="text" className="form-control" placeholder="Enter movie length (minutes)" value={this.state.length} onChange={this.onChangeLength}/>
          </fieldset>
          <br></br>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
            <input type="text" className="form-control" placeholder="Enter movie year" value={this.state.year} onChange={this.onChangeYear}/>
          </fieldset>
          <br></br>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
            <input type="text" className="form-control" placeholder="Enter movie genre" value={this.state.genre} onChange={this.onChangeGenre}/>
          </fieldset>
          <br></br>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
            <input type="text" className="form-control" placeholder="Enter movie region" value={this.state.region} onChange={this.onChangeRegion}/>
          </fieldset>
          <br></br>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
            <input type="text" className="form-control" placeholder="Enter movie actor" value={this.state.actor} onChange={this.onChangeActor}/>
          </fieldset>
          <br></br>
          <button class="btn btn-outline-danger" type="submit" onClick={() => (this.setState({ button: 1 }))}>Remove Movie</button>
          &nbsp; &nbsp;
          <button class="btn btn-outline-danger" type="submit" onClick={() => (this.setState({ button: 2 }))}>Add Movie</button>
        </form>
        <br></br>
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

// export default Planner;
