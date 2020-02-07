import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-dark">
        <div className="text-center">
          <img src={logo} alt="Kaldi" style={{ width: '14em', height: '10em' }} />
        </div>
        <div>
          <Container>
            <Row>
              <Col sm>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-white" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/contact/examples">
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a className="text-white" href="/admin/" target="_blank" rel="noopener noreferrer">
                      Admin
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm>
                <ul className="list-unstyled">
                  <li>
                    <Link className="text-white" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col sm className="text-white text-center p-2">
                <a
                  title="facebook"
                  href="https://facebook.com"
                  className="bg-white m-2 p-2 d-inline-flex rounded-circle"
                >
                  <img src={facebook} alt="Facebook" style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="twitter" href="https://twitter.com" className="bg-white m-2 p-2 d-inline-flex rounded-circle">
                  <img src={twitter} alt="Twitter" style={{ width: '1em', height: '1em' }} />
                </a>
                <a
                  title="instagram"
                  href="https://instagram.com"
                  className="bg-white m-2 p-2 d-inline-flex rounded-circle"
                >
                  <img src={instagram} alt="Instagram" style={{ width: '1em', height: '1em' }} />
                </a>
                <a title="vimeo" href="https://vimeo.com" className="bg-white m-2 p-2 d-inline-flex rounded-circle">
                  <img src={vimeo} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
};

export default Footer;
