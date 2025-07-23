import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Location() {
  return (
    <div className="location_section pt-120">
      <div className="container">
        <div className="text-center location_title">
          <h2>LOCATION</h2>
          <h3 className="fw_400 mb-5">
            GREEN ENTRANCE, LOWER QUAYSIDE, WAPPING LANE, LONDON E1W 2SF
          </h3>
        </div>
        <div className="location_in mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2905940069772!2d-0.06130072296959134!3d51.50788451066745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603d352b9b301%3A0x177a9385d32ab9fb!2sQuayside%20Bar%20At%20Tobacco%20Dock!5e0!3m2!1sen!2sin!4v1682917378900!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Location"
          ></iframe>
        </div>
        <div className="location_content pb-80">
          <p>Green Entrance, Lower Quayside, Wapping Lane, London E1W 2SF</p>
          <p>
            Tobacco Dock is located at the junction of Wapping Lane and
            Pennington Street, E1. Nearest rail and DLR stations are at Shadwell
            and at Wapping both no more than a 5 minute walk from our venue.
          </p>
          <h3 className="fw_400 mb-3">HOW TO GET TO TOBACCO DOCK FROM:</h3>
          <h6>Paddington Station</h6>
          <p>
            Walk to Lancaster Gate, Central line to Bank, DLR to Shadwell
            (journey time 30 minutes).
          </p>
          <h6>Kings Cross</h6>
          <p>
            Northern line to line to Bank, followed by the DLR to Shadwell
            (journey time 19 minutes).
          </p>
          <h6>Waterloo</h6>
          <p>
            Waterloo & City to Bank, DLR to Shadwell (journey time 13 minutes).
          </p>
          <h6>Victoria Station</h6>
          <p>
            District line to Monument, DLR to Shadwell (journey time 26
            minutes).
          </p>
          <h6>Liverpool Street Station</h6>
          <p>
            Central line to Bank, DLR to Shadwell (journey time 10 minutes).
          </p>
          <h6>Arriving by Coach?:</h6>
          <p>
            If you are arriving by coach(es) or organizing specific transport
            then you need to let us know at least 1 week before your arrival.
            This enables us to help the safest and easiest route for your guests
            - please email abigail.toghill@tobaccodocklondon.com with your
            arrangements/needs
          </p>
        </div>
      </div>
      <div className="hire_exclusive pt-80 pb-80">
        <div className="container">
          <Row>
            <Col xl={6} lg={8}>
              <h2>HIRE THIS VENUE EXCLUSIVELY</h2>
              <p>
                Book any of our venues for your private and exclusive use on a
                range of nights.
              </p>
              <ul>
                <li>
                  <Link to="/exclusiveparties" className="btn_border">
                    Find Out More
                  </Link>
                </li>
                <li>
                  <span>OR CALL</span>
                </li>
                <li>
                  <Link to="tel:01932359900" className="phone">
                    <i className="pi pi-phone"></i> 01932 359900
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
