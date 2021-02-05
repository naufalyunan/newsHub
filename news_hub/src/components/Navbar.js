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
					<Link className="nav nav-link" to="/images">
						Images
					</Link>
				</Nav>
				<Nav>
					<Link className="nav nav-link" to="/favorites">
						Favorites
					</Link>
					<Nav.Link></Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    )
}