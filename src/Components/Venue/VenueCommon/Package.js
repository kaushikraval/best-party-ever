import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default function Package() {
  useEffect(() => {
    $('.book_event_button .btn_primary').click(function () {
      var offset = 100;
      $('html, body').animate(
        {
          scrollTop: $('#date').offset().top - offset,
        },
        100,
      );
      return false;
    });
  }, []);
  return (
    <div className="package_wrapper pt-120 pb-80">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-3">THE PACKAGE</h2>
          <h3 className="fw_400 mb-5">PRICES INCLUDE:</h3>
        </div>
        <Row>
          <Col md={4}>
            <ul className="list_ul">
              <li>
                Unlimited House Beers, House Wines, Prosecco & Soft Drinks
              </li>
              <li>Spectacular Instagrammable parties</li>
              <li>Glass of Prosecco or Mocktail on arrival</li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className="list_ul">
              <li>Delicious selection of pre-dinner canapes</li>
              <li>
                Award-winning three course dining, featuring bespoke dessert
                platters
              </li>
              <li>Survivor's Breakfast</li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className="list_ul">
              <li>Sustainable LED centre-pieces</li>
              <li>World-class entertainment to excite and amaze</li>
              <li>Exclusive Champagne and gin bars</li>
              <li>Live DJ</li>
            </ul>
          </Col>
        </Row>
        <div className="text-center mt-5 book_event_button">
          <Link to="#date" className="btn_primary">
            BOOK YOUR EVENT NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
