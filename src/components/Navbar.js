import React from "react";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const items = [
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
  { path: "/contact/examples", label: "Form Examples" }
];

export default class extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mr-auto text-center">
          <Nav className="mr-auto">
            {items.map(item => (
              <Link className="nav-link" to={o.path} key={o.path}>
                {o.label}
              </Link>
            ))}
          </Nav>

          <a
            href="https://github.com/fullstack-rocket/gatsby-starter-netlify-cms-bootstrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <img src={github} alt="Github" style={{ width: "1.5rem" }} />
            </span>
          </a>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
