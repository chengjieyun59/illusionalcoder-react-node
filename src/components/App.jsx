import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'

import About from './About.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import '../styles/App.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="#">
            <img
              src="../../../assets/images/illusionalCoder-dark.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="illusionalCoder logo"
            />
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-li" href="#about">ABOUT</Nav.Link>
            <Nav.Link className="nav-li" href="#projects">PROJECTS</Nav.Link>
            <Nav.Link className="nav-li" href="#contact">CONTACT</Nav.Link>
          </Navbar.Collapse>
        </Navbar>

        <a id="about"/>
        <About />
        <a id="projects"/>
        <Projects />
        <a id="contact"/>
        <Contact />
      </div>
    )
  }
}

export default App
