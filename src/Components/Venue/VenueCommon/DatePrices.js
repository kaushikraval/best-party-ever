import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';

export default function DatePrices() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [availability, setAvailability] = useState(true);
  const showMoreHandle = () => {
    setShowMore(!showMore);
  };
  const closeHandle = () => {
    setShowMore(false);
  };
  const availabilityHandle = () => {
    setAvailability(!availability);
  };
  console.log('availability', availability);

  return (
    <>
      <div className="date_wrapper pt-120 pb-120">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="mb-4">BOOK YOUR PLACES NOW</h2>
            <Link to="/login" className="btn_primary">
              Already Booked? Log In Here
            </Link>
          </div>
          <div className="booking_celender_wrapper">
            <Row className="g-4">
              <Col xxl={2} xl={3} md={4} xs={6}>
                <div
                  className="booking_celender_box"
                  onClick={() => setVisibleModal(true)}
                >
                  <div className="booking_date">
                    <h5>
                      Wed <span>6</span> Dec
                    </h5>
                  </div>
                  <p>Exclusive Use of the Venue</p>
                  <div className="booking_price">
                    <h6>POA</h6>
                    <span>+VAT</span>
                  </div>
                </div>
              </Col>
              <Col xxl={2} xl={3} md={4} xs={6}>
                <div
                  className="booking_celender_box"
                  onClick={() => setVisibleModal(true)}
                >
                  <div className="booking_date">
                    <h5>
                      Sat <span>9</span> Dec
                    </h5>
                  </div>
                  <p>All Inc Mixed Group Night</p>
                  <div className="booking_price">
                    <h6>£121.50</h6>
                    <span>+VAT</span>
                  </div>
                </div>
              </Col>
              <Col xxl={2} xl={3} md={4} xs={6}>
                <div
                  className="booking_celender_box"
                  onClick={() => setVisibleModal(true)}
                >
                  <div className="booking_date">
                    <h5>
                      Wed <span>13</span> Dec
                    </h5>
                  </div>
                  <p>All Inc Mixed Group Night</p>
                  <div className="booking_price">
                    <h6>£109.50</h6>
                    <span>+VAT</span>
                  </div>
                </div>
              </Col>
              <Col xxl={2} xl={3} md={4} xs={6}>
                <div
                  className="booking_celender_box"
                  onClick={() => setVisibleModal(true)}
                >
                  <div className="booking_date">
                    <h5>
                      Thu <span>14</span> Dec
                    </h5>
                  </div>
                  <p>Exclusive Use of the Venue</p>
                  <div className="booking_price">
                    <h6>POA</h6>
                    <span>+VAT</span>
                  </div>
                </div>
              </Col>
              <Col xxl={2} xl={3} md={4} xs={6}>
                <div
                  className="booking_celender_box"
                  onClick={() => setVisibleModal(true)}
                >
                  <div className="booking_date">
                    <h5>
                      Fri <span>15</span> Dec
                    </h5>
                  </div>
                  <p>All Inc Mixed Group Night</p>
                  <div className="booking_price">
                    <h6>POA</h6>
                    <span>+VAT</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="more_content">
            <div className="text-center">
              <div onClick={() => showMoreHandle()} className="show_more_btn">
                <i className="pi pi-angle-down me-2"></i>{' '}
                <span>Find out more about the nights</span>
              </div>
            </div>
            {showMore === true && (
              <div className="more_content_innner mt-4">
                <div className="close_btn" onClick={() => closeHandle()}>
                  <i className="pi pi-times"></i>
                </div>
                <h4>Mixed Group</h4>
                <p>
                  Everyone’s welcome! Book for your company or group of friends
                  – minimum booking of 10 guests.
                </p>
                <h4>All Inclusive</h4>
                <p>
                  Mixed Group Party with Arrival Drink followed by Unlimited
                  Beer, House Wine, Prosecco and Soft Drinks included in the
                  ticket price.
                </p>
                <h4>Standing Mixed (Tobacco Dock London only)</h4>
                <p>
                  Mixed Group Party with a difference! Standing street food
                  party instead of seated dinner. Each group will get a reserved
                  base area for the evening.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Dialog
        header="CHECK AVAILABILITY"
        visible={visibleModal}
        onHide={() => setVisibleModal(false)}
        style={{ width: '600px' }}
        draggable={false}
        position="top"
        resizable={false}
        className="availability_popup"
      >
        <div className="check_availability_wrap">
          <p>
            Tobacco Dock - The Gallery : FUTURUM - Wednesday 13th December 2023
          </p>
          {availability === true && (
            <>
              <Form.Group className="form-group mb-3">
                <Form.Label for="Tertiaryvenue">How many places?</Form.Label>
                <Form.Control type="number" />
                <small>8 tickets minimum</small>
              </Form.Group>
              <div className="text-center">
                <Button
                  className="btn_primary"
                  onClick={() => availabilityHandle()}
                >
                  Fingers Crossed!
                </Button>
              </div>
            </>
          )}
          {availability === false && (
            <div className="place_reserved_Wrap text-center">
              <Alert key="success" variant="success">
                We have availability! Whoop!
              </Alert>
              <h4>Do you want to reserve these places?</h4>
              <p>
                We can hold these places for you for 7 days without obligation -
                just click the button below to start, it only takes a minute!
              </p>
              <Button
                className="btn_primary"
                onClick={() => navigate('/account')}
              >
                Let's Do It!
              </Button>
            </div>
          )}
        </div>
      </Dialog>
    </>
  );
}
