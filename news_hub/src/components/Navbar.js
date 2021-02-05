import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavigationBar () {
    return (
        <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home"><img src="https://img.icons8.com/color/48/000000/nasa.png" alt="nasa-logo"/></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link className="nav nav-link" to="/">
						Home
					</Link>
				</Nav>
				<Nav>
					<Link className="nav nav-link" to="/business">
						Business
					</Link>
					<Nav.Link></Nav.Link>
				</Nav>
                <Nav>
					<Link className="nav nav-link" to="/entertainment">
						Entertainment
					</Link>
					<Nav.Link></Nav.Link>
				</Nav>
                <Nav>
					<Link className="nav nav-link" to="/science">
						Science
					</Link>
					<Nav.Link></Nav.Link>
				</Nav>
                <Nav>
					<Link className="nav nav-link" to="/technology">
						Technology
					</Link>
					<Nav.Link></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    )
}