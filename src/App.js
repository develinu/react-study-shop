import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { 
  Navbar, Nav, NavDropdown, Container, Form, Button, FormControl, Carousel
} from 'react-bootstrap'
import { Link, Route, Switch } from 'react-router-dom'

import ShoesData from './data.js'
import Detail from './Detail'
import axios from 'axios'


function App() {

  const [shoes, setShoes] = useState(ShoesData)
	const [inventory, setInventory] = useState([10, 11, 12])

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home </Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail </Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
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

      
			<Switch>
				<Route exact path="/">
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
									return <Card key={_shoes.id} shoes={_shoes} />  
								})
							}
						</div>
						<button className="btn btn-primary" onClick={()=>{

							// show loading UI

							// axios.post('URL', { id: 'userId', pw: 'password' })

							axios
								.get('https://codingapple1.github.io/shop/data2.json')
								.then(resp => {
									setShoes([...shoes, ...resp.data])
								})
								.catch(() => {
									console.log("failed")
								})
								.finally(() => {
									// hide loading UI
								})
						}}>더보기</button>
					</div>
				</Route>
				
				<Route path="/detail/:id">
					<Detail shoes={shoes} inventory={inventory} setInventory={setInventory} />
				</Route>
			</Switch>
    </div>
  );
}

function Card(props) {
  const { id, title, content, price } = props.shoes

  return (
    <div className="col-md-4" key={id}>
      <img src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`} width="100%" />
      <h4> { title }</h4>
      <p>{ content } & { price }</p>
    </div> 
  )
}

export default App;
