import React from "react";
import "./Menu.css";
import logo from "../pics/frappe-books-logo.svg";
import { Navbar, Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <div className="header bg-light border-bottom">
      <div className="container ml-3">
        <Navbar expand="md">
          <Navbar.Brand href="#home">
            <img
              alt="hi"
              src={logo}
              id="logo"
              width="100"
              height="20"
              className="d-inline-block align-top img-fluid"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto col-4 offset-8"
              id="navs"
              style={{ fontSize: 18, fontWeight: "bold" }}
            >
              <Nav.Link
                href="https://frappebooks.com/docs"
                style={{ paddingLeft: 25 }}
              >
                Docs
              </Nav.Link>
              <Nav.Link
                href="https://github.com/frappe/books"
                style={{ paddingLeft: 25 }}
              >
                GitHub
              </Nav.Link>
              <Nav.Link
                href="https://frappebooks.com/about"
                style={{ paddingLeft: 25 }}
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Menu;
