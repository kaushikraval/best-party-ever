import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function SearchForGuest({ searchGueatsHandleChange }) {
  return (
    <div className="search_for_guest_wrap mb-3">
      <div className="table_header_wrap">
        <h4 className="m-0">
          <i className="pi pi-search me-2"></i> Search For Guests
        </h4>
        <Button
          className="btn_primary small"
          onClick={() => searchGueatsHandleChange(false)}
        >
          <i className="pi pi-times"></i>
        </Button>
      </div>
      <div className="search_for_guest_inner p-3">
        <Row className="g-3">
          <Col md={6}>
            <Form.Group className="form-group">
              <Form.Control type="search" placeholder="Search for guests" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-wrap">
              <Button className="btn_primary small me-3 mb-1">
                <i className="pi pi-search me-2"></i> Search Guests
              </Button>
              <Button className="btn_primary small mb-1">
                <i className="pi pi-times me-2"></i> Clear Search
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
