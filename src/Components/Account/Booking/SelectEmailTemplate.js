import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function SelectEmailTemplate({ emailTemplateHandleChange }) {
  return (
    <div className="select_email_template mb-3">
      <div className="table_header_wrap">
        <h4 className="m-0">
          <i className="pi pi-envelope me-2"></i> Select Email Template
        </h4>
        <Button
          className="btn_primary small"
          onClick={() => emailTemplateHandleChange(false)}
        >
          <i className="pi pi-times"></i>
        </Button>
      </div>
      <div className="p-3">
        <Row className="g-3">
          <Col md={6}>
            <Form.Group className="form-group">
              <Form.Select aria-label="Default select example">
                <option>Please Select Email Template</option>
                <option value="1">Hotel and Taxi Info</option>
                <option value="2">Invite Reminder</option>
                <option value="3">Party Information</option>
                <option value="4">Party Invite</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <div className="d-flex flex-wrap">
              <Button className="btn_primary small me-3 mb-1">
                <i className="pi pi-file-edit me-2"></i> Edit Email
              </Button>
              <Button className="btn_primary small mb-1">
                <i className="pi pi-send me-2"></i> Send Email
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
