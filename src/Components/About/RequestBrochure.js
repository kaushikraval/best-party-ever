import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function RequestBrochure() {
  return (
    <div className="request_brochure_wrapper">
      <div className="inner_banner login_banner">
        <div className="container">
          <h1>Request A Brochure</h1>
        </div>
      </div>
      <div className="request_brochure_inner pt-120 pb-120">
        <div className="container">
          <p>You can select up to 3 venues to request a brochure for.</p>
          <p>
            Please select your preferred venue as the primary venue and if you
            would like any extra brochures please add them as secondary or
            tertiary venues.
          </p>
          <Row className="justify-content-center">
            <Col sm={6}>
              <Form.Group className="form-group mb-3">
                <Form.Select id="Primaryvenue">
                  <option>Please Select</option>
                  <option value="1">
                    Bicester, Bicester Heritage Park, Oxfordshire
                  </option>
                  <option value="2">Barleylands, Billericay, Essex</option>
                  <option value="3">Paintworks, Bristol</option>
                  <option value="4">Hampshire Arena, Hampshire</option>
                  <option value="5">Knowsley Safari Park, Liverpool</option>
                  <option value="6">Tobacco Dock</option>
                  <option value="7">Kent County Showground, Maidstone</option>
                  <option value="8">Old Trafford, Manchester</option>
                  <option value="9">
                    Willen Lake, Milton Keynes, Buckinghamshire
                  </option>
                  <option value="10">Newcastle Racecourse</option>
                  <option value="11">Beeston Hockey Club, Nottingham</option>
                  <option value="12">Kings Meadow, Reading, Berkshire</option>
                  <option value="13">
                    Trojans Club, Eastleigh/Southampton
                  </option>
                  <option value="14">Willows Farm, St Albans</option>
                  <option value="15">
                    Ardingly South of England, Haywards Heath, West Sussex
                  </option>
                  <option value="16">Syon Park, West London</option>
                  <option value="17">Royal Windsor Racecourse</option>
                </Form.Select>
                <Form.Label for="Primaryvenue">Primary venue*</Form.Label>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="form-group mb-3">
                <Form.Select id="Tertiaryvenue">
                  <option>Please Select</option>
                  <option value="1">
                    Bicester, Bicester Heritage Park, Oxfordshire
                  </option>
                  <option value="2">Barleylands, Billericay, Essex</option>
                  <option value="3">Paintworks, Bristol</option>
                  <option value="4">Hampshire Arena, Hampshire</option>
                  <option value="5">Knowsley Safari Park, Liverpool</option>
                  <option value="6">Tobacco Dock</option>
                  <option value="7">Kent County Showground, Maidstone</option>
                  <option value="8">Old Trafford, Manchester</option>
                  <option value="9">
                    Willen Lake, Milton Keynes, Buckinghamshire
                  </option>
                  <option value="10">Newcastle Racecourse</option>
                  <option value="11">Beeston Hockey Club, Nottingham</option>
                  <option value="12">Kings Meadow, Reading, Berkshire</option>
                  <option value="13">
                    Trojans Club, Eastleigh/Southampton
                  </option>
                  <option value="14">Willows Farm, St Albans</option>
                  <option value="15">
                    Ardingly South of England, Haywards Heath, West Sussex
                  </option>
                  <option value="16">Syon Park, West London</option>
                  <option value="17">Royal Windsor Racecourse</option>
                </Form.Select>
                <Form.Label for="Tertiaryvenue">
                  Tertiary venue (optional)
                </Form.Label>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="form-group mb-3">
                <Form.Select id="Tertiaryvenue">
                  <option>Please Select</option>
                  <option value="1">
                    Bicester, Bicester Heritage Park, Oxfordshire
                  </option>
                  <option value="2">Barleylands, Billericay, Essex</option>
                  <option value="3">Paintworks, Bristol</option>
                  <option value="4">Hampshire Arena, Hampshire</option>
                  <option value="5">Knowsley Safari Park, Liverpool</option>
                  <option value="6">Tobacco Dock</option>
                  <option value="7">Kent County Showground, Maidstone</option>
                  <option value="8">Old Trafford, Manchester</option>
                  <option value="9">
                    Willen Lake, Milton Keynes, Buckinghamshire
                  </option>
                  <option value="10">Newcastle Racecourse</option>
                  <option value="11">Beeston Hockey Club, Nottingham</option>
                  <option value="12">Kings Meadow, Reading, Berkshire</option>
                  <option value="13">
                    Trojans Club, Eastleigh/Southampton
                  </option>
                  <option value="14">Willows Farm, St Albans</option>
                  <option value="15">
                    Ardingly South of England, Haywards Heath, West Sussex
                  </option>
                  <option value="16">Syon Park, West London</option>
                  <option value="17">Royal Windsor Racecourse</option>
                </Form.Select>
                <Form.Label for="Tertiaryvenue">
                  Secondary venue (optional)
                </Form.Label>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="form-group mb-3">
                <Form.Control type="number" placeholder="Approx Places" />
                <Form.Label for="Tertiaryvenue">Approx Places*</Form.Label>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="form-group mb-3">
                <Form.Check
                  type="checkbox"
                  id="capital"
                  label="I always forget about capital letters - please fix it for me!"
                />
              </Form.Group>
              <div className="submit_btn">
                <Button className="btn_primary w-100">Submit</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
