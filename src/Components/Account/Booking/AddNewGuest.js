import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function AddNewGuest({ addNewGuestHandleChange }) {
  const [guestManager, setGuestManager] = useState(false);
  const guestManagerHandle = () => {
    setGuestManager(!guestManager);
  };
  return (
    <div className="add_new_guest_wrap mb-3">
      <div className="table_header_wrap">
        <h4 className="m-0">
          <i className="pi pi-user-plus me-2"></i> Add New Guest
        </h4>
        <Button
          className="btn_primary small"
          onClick={() => addNewGuestHandleChange(false)}
        >
          <i className="pi pi-times"></i>
        </Button>
      </div>
      <div className="add_new_guest_inner p-3">
        <Row className="g-5">
          <Col xl={4} lg={6}>
            <div className="checkbox_wrapper">
              <Form.Check
                type="checkbox"
                id="capital"
                label="I always forget about capital letters - please fix it for me!"
              />
            </div>
            <Form.Group className="mb-3 form-group">
              <Form.Label>First name*</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label>Last name*</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
            <Form.Group className="mb-3 form-group">
              <Form.Label>Email address*</Form.Label>
              <small className="d-block mb-1 text_light">
                This will be used as a login username so{' '}
                <span className="text_primary">need to be unique</span>*
              </small>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
            <div className="note_wrapper">
              <p>
                <small>
                  *If this guest does not have an email address{' '}
                  <b>please enter the word "none"</b>. Please:
                </small>
              </p>
              <ul>
                <li className="text_dark">
                  do not use the same email address as used for another person
                  (use "none")
                </li>
                <li className="text_dark">
                  do not use fake email addresses (use "none")
                </li>
              </ul>
              <p>
                <small>
                  <span className="text_primary">Note:</span> by not providing
                  an email address your guest will not be able to log in and
                  manage their place, plus you will not be able to send them
                  invites or party tickets by email.
                </small>
              </p>
            </div>
          </Col>
          <Col xl={4} lg={6}>
            <div className="guest_attending_wrap">
              <h4>
                Is Guest Attending{' '}
                <i className="pi pi-question-circle ms-2"></i>
              </h4>
              <div className="radio_wrapper mb-4">
                <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type="radio"
                  id="Yes"
                  className="check"
                />
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type="radio"
                  id="No"
                  className="cross"
                />
                <Form.Check
                  inline
                  label="Don't Know"
                  name="group1"
                  type="radio"
                  id="DontKnow"
                  className="question"
                />
              </div>
              <h4 className="mb-4" onClick={() => guestManagerHandle()}>
                Guest Manager
                <i className="pi pi-angle-down ms-2"></i>
              </h4>
              {guestManager === true && (
                <div className="guest_manager">
                  <h6 className="text_dark">Make this Guest a Manager</h6>
                  <p>
                    If you want this person to be able to manage other guests
                    then please select "Can Manage" below
                  </p>
                  <div className="radio_wrapper mb-4">
                    <Form.Check
                      inline
                      label="Yes"
                      name="group2"
                      type="radio"
                      id="Yes1"
                      className="check"
                    />
                    <Form.Check
                      inline
                      label="No"
                      name="group2"
                      type="radio"
                      id="No1"
                      className="cross"
                    />
                  </div>
                </div>
              )}
            </div>
          </Col>
          <Col xl={4} lg={12}>
            <h6 className="text_dark">Special Requirements</h6>
            <p>
              If this guest has any special requirements please select them
              here. For more complex requirements please contact a member of the
              Best Parties Ever office team on 01932 359900.
            </p>
            <Row>
              <Col sm={6}>
                <h6 className="text_dark">Dietary Requirements</h6>
                <div className="checkbox_wrapper">
                  <Form.Check
                    type="checkbox"
                    id="DairyFree"
                    label="Dairy Free"
                  />
                  <Form.Check
                    type="checkbox"
                    id="GlutenFree"
                    label="Gluten Free"
                  />
                  <Form.Check type="checkbox" id="Halal" label="Halal" />
                  <Form.Check
                    type="checkbox"
                    id="NutAllergy"
                    label="Nut Allergy"
                  />
                  <Form.Check type="checkbox" id="Vegan" label="Vegan" />
                  <Form.Check
                    type="checkbox"
                    id="Vegetarian"
                    label="Vegetarian"
                  />
                </div>
              </Col>
              <Col sm={6}>
                <h6 className="text_dark">Accessibility</h6>
                <div className="checkbox_wrapper">
                  <Form.Check
                    type="checkbox"
                    id="WheelchairUser"
                    label="Wheelchair User"
                  />
                </div>
              </Col>
            </Row>
            <div className="guest_btn_wrap mt-3">
              <div className="d-flex flex-wrap">
                <Button className="btn_primary small me-3">
                  <i className="pi pi-times me-2"></i> Cancel
                </Button>
                <Button className="btn_primary small">
                  <i className="pi pi-user-plus me-2"></i> Add Guest
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
