import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/img/logo.png';
import GoToTop from './GoToTop';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social_icon">
          <ul>
            <li>
              <Link
                to="https://www.facebook.com/BestPartiesEver"
                target="_blank"
              >
                <i className="pi pi-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.instagram.com/bestpartieseveruk/"
                target="_blank"
              >
                <i className="pi pi-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/BestPartiesEver" target="_blank">
                <i className="pi pi-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/company/best-parties-ever-limited/?originalSubdomain=uk"
                target="_blank"
              >
                <i className="pi pi-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
        <Row className="mb-5 g-4">
          <Col lg={3} md={6}>
            <div className="footer_link">
              <h4>London</h4>
              <ul>
                <li>
                  <Link to="/christmas-parties-london">
                    <i className="pi pi-fw pi-map-marker"></i>London - Tobacco
                    Dock
                  </Link>
                </li>
              </ul>
              <h4>South East</h4>
              <ul>
                <li>
                  <Link to="/christmas-parties-sussex">
                    <i className="pi pi-fw pi-map-marker"></i>Ardingly
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-billericay">
                    <i className="pi pi-fw pi-map-marker"></i>Billericay - Essex
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-hampshire">
                    <i className="pi pi-fw pi-map-marker"></i>Hampshire
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-maidstone">
                    <i className="pi pi-fw pi-map-marker"></i>Maidstone - Kent
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-reading">
                    <i className="pi pi-fw pi-map-marker"></i>Reading
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-southampton">
                    <i className="pi pi-fw pi-map-marker"></i>Southampton
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-st-albans">
                    <i className="pi pi-fw pi-map-marker"></i>St Albans
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-syon-west-london">
                    <i className="pi pi-fw pi-map-marker"></i>Syon Park - West
                    London
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-windsor">
                    <i className="pi pi-fw pi-map-marker"></i>Windsor
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer_link">
              <h4>South West</h4>
              <ul>
                <li>
                  <Link to="/christmas-parties-bristol">
                    <i className="pi pi-fw pi-map-marker"></i>Bristol
                  </Link>
                </li>
              </ul>
              <h4>Midlands</h4>
              <ul>
                <li>
                  <Link to="/christmas-parties-bicester">
                    <i className="pi pi-fw pi-map-marker"></i>Bicester
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-milton-keynes">
                    <i className="pi pi-fw pi-map-marker"></i>Milton Keynes
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-nottingham">
                    <i className="pi pi-fw pi-map-marker"></i>Nottingham
                  </Link>
                </li>
              </ul>
              <h4>North</h4>
              <ul>
                <li>
                  <Link to="/christmas-parties-liverpool">
                    <i className="pi pi-fw pi-map-marker"></i>Liverpool
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-manchester">
                    <i className="pi pi-fw pi-map-marker"></i>Manchester
                  </Link>
                </li>
                <li>
                  <Link to="/christmas-parties-newcastle">
                    <i className="pi pi-fw pi-map-marker"></i>Newcastle
                    Racecourse
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer_link">
              <h4>INFORMATION</h4>
              <ul>
                <li>
                  <Link to="/request-brochures">Request a Brochure</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/vacancies">Vacancies</Link>
                </li>
                <li>
                  <Link to="/sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy & Cookies</Link>
                </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link to="https://tapenade.co.uk/" target="_blank">
                    Non-Christmas Parties
                  </Link>
                </li>
                <li>
                  <Link to="/booking-terms">Booking Terms</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="footer_link">
              <h4>GET IN TOUCH</h4>
              <ul>
                <li>
                  <p>Enquiries</p>
                </li>
                <li>
                  <Link to="tel:01932359900">01932 359900</Link>
                </li>
                <li>
                  <Link to="mailto:sales@bestpartiesever.com">
                    sales@bestpartiesever.com
                  </Link>
                </li>
                <li>
                  <p className="mt-2">
                    Location
                    <br />
                    Units 2-4 Trade City, Avro Way Brooklands Industrial Estate
                    Weybridge SURREY KT13 0YF
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="copyright_wrap">
          <Row className="align-items-center">
            <Col md={3}>
              <div className="footer_logo">
                <img src={Logo} alt="Logo" />
              </div>
            </Col>
            <Col md={9}>
              <div className="copyright_text">
                <p>© 2015-2023 Eventist Group :: All Rights Reserved</p>
                <p>
                  Eventist Group is a limited company trading as Best Parties
                  Ever. Registered in England. Registration Number: 3209530{' '}
                  <br />
                  Registered Office: Units 2-4 Trade City, Avro Way, Brooklands
                  Industrial Estate, Weybridge, Surrey, KT13 0YF.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="right_social_icon">
        <ul>
          <li className="facebook">
            <Link to="https://www.facebook.com/BestPartiesEver" target="_blank">
              <i className="pi pi-facebook"></i>
            </Link>
          </li>
          <li className="instagram">
            <Link
              to="https://www.instagram.com/bestpartieseveruk/"
              target="_blank"
            >
              <i className="pi pi-instagram"></i>
            </Link>
          </li>
          <li className="twitter">
            <Link to="https://twitter.com/BestPartiesEver" target="_blank">
              <i className="pi pi-twitter"></i>
            </Link>
          </li>
          <li className="linkedin">
            <Link
              to="https://www.linkedin.com/company/best-parties-ever-limited/?originalSubdomain=uk"
              target="_blank"
            >
              <i className="pi pi-linkedin"></i>
            </Link>
          </li>
        </ul>
        <GoToTop />
      </div>
    </footer>
  );
}
