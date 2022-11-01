import logo from './logopop.png';
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link} from "react-router-dom";
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import Planner from './components/Planner';
import Recommend from './components/Recommend';
import Rater from './components/Rater';
import Landing from './components/Landing';
import Results from './components/Results';


function Header() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/landing">SHUFFLIX</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/recommend">Recommender</Nav.Link>
              <Nav.Link as={Link} to="/planner">Planner</Nav.Link>
              <Nav.Link as={Link} to="/rater">Rater</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div>
          <Routes>
            <Route path="" element={<Landing/>} />
            <Route path="/recommend" element={<Recommend/>} />
            <Route path="/planner" element={<Planner/>} />
            <Route path="/rater" element={<Rater/>} />
            <Route path="/landing" element={<Landing/>} />
            <Route path="/results" element={<Results/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Header;
