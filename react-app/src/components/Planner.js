import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

export default class Planner extends Component {
  constructor (props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeLength = this.onChangeLength.bind(this)
    this.onChangeYear = this.onChangeYear.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: '',
      length: '',
      year: ''
    }
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

  onSubmit (e) {
    e.preventDefault()

    console.log('Form submitted:')
    console.log(`Movie Name: ${this.state.name}`)
    console.log(`Movie Length (Minutes): ${this.state.length}`)
    console.log(`Movie Release Year: ${this.state.year}`)

    const newMovie = {
      name: this.state.name,
      length: this.state.length,
      year: this.state.year
    }

    axios.post('http://localhost:5500/create', newMovie).then(res => console.log(res.data))
    this.setState({
      name: '',
      length: 0,
      year: 0
    })
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
          <button class="btn btn-outline-danger" type="submit">Add Movie</button>
        </form>
      </div>
    )
  }
}

/**
function Planner() {
  return (
    <div className="planner">
        <br></br>
        <header className="hdr">Planner</header>
         <br></br>

         &nbsp;
         &nbsp;
          <form>
          <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
              <input type="text" className="form-control" placeholder="Enter movie name..." />
            </fieldset>
            <br></br>
            <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
              <input type="text" className="form-control" placeholder="Enter movie length (minutes)" />
            </fieldset>
            <br></br>
            <fieldset className="form-group" style={{marginLeft:"500px", marginRight:"500px"}}>
              <input type="text" className="form-control" placeholder="Enter movie year" />
            </fieldset>
            <br></br>
          </form>
         <button class="btn btn-outline-danger">Add Movie</button>
    </div>
  ); 
}
*/

// export default Planner;
