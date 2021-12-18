import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { 
  Navbar, Nav, NavDropdown, Container, Form, Button, FormControl, Carousel
} from 'react-bootstrap'

import ShoesData from './data.js'

function App() {

  const [shoes, setShoes] = useState(ShoesData)

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/picsum/200/80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/picsum/200/80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/seed/picsum/200/80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="row">
          {
            shoes.map( (_shoes) => {
              return (
                <div className="col-md-4" key={_shoes.id}>
                  <img src={`https://codingapple1.github.io/shop/shoes${_shoes.id + 1}.jpg`} width="100%" />
                  <h4>{ _shoes.title }</h4>
                  <p>{ _shoes.content } & { _shoes.price }</p>
                </div>  
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
