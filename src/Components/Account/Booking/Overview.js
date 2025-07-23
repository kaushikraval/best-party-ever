import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function Overview() {
  return (
    <div className="overview_wrapper">
      <Row>
        <Col md={2}>
          <div className="overview_action_wrap">
            <div className="table_design_two">
              <Table>
                <thead>
                  <tr>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to="/">
                        <i className="pi pi-angle-double-right"></i> Pay Online
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="/">
                        <i className="pi pi-angle-double-right"></i> Pay by Bank
                        Transfer/BACS
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="contact_detail mb-3">
            <div className="table_design_two">
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <i className="pi pi-user me-2"></i> Contact Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Your Reference:</td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>151</span>
                        <Button className="btn_primary extra_small">
                          Change
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Organisation:</td>
                    <td>Buckingham Palace</td>
                  </tr>
                  <tr>
                    <td>Contact Name:</td>
                    <td>Mr Test Test</td>
                  </tr>
                  <tr>
                    <td>Contact Email:</td>
                    <td>test@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="contact_detail">
            <div className="table_design_two">
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <i className="pi pi-tag me-2"></i> Coupons
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Add Coupon:</td>
                    <td>
                      <div className="d-flex justify-content-between">
                        <Form.Group className="form-group">
                          <Form.Control type="email" />
                        </Form.Group>
                        <Button className="btn_primary extra_small">Add</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="contact_detail">
            <div className="table_design_two">
              <Table>
                <thead>
                  <tr>
                    <th colSpan={2}>
                      <i className="pi pi-calendar me-2"></i> Party Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Provisional Places:</td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>151</span>
                        <Button className="btn_primary extra_small">
                          Change
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Party Date:</td>
                    <td>Wednesday, 13th December 2023</td>
                  </tr>
                  <tr>
                    <td>Party Venue:</td>
                    <td>Tobacco Dock</td>
                  </tr>
                  <tr>
                    <td>Party Theme:</td>
                    <td>FUTURUM</td>
                  </tr>
                  <tr>
                    <td>Ticket Price:</td>
                    <td>
                      £131.40 p/p{' '}
                      <span className="text_light text_small">
                        (£109.50 ex VAT)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Ticket Price::</td>
                    <td>
                      10 places <b className="d-block text_big">£1314.00</b>
                      <span className="d-block text_light text_small">
                        (£1095.00 ex VAT)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
        <Col md={12}>
          <div className="table_design_two">
            <Table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <i className="pi pi-file me-2"></i> Booking Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>05/05/23</td>
                  <td>test</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="need_help_wrap ">
            <h2 className="text_dark fw_500 mb-3">I need help!</h2>
            <p>
              We are working hard to make our online booking management as easy
              as possible but we understand that sometimes it is just easier to
              talk to someone. So if you need help with your booking in any way
              please call us on{' '}
              <Link to="tel:01932359900" className="text_dark fw-bold">
                01932 359900
              </Link>
              or email
              <Link
                to="mailto:bookings@bestpartiesever.com"
                className="text_primary"
              >
                bookings@bestpartiesever.com
              </Link>
            </p>
            <p>
              If you do not want to manage your guests individually but need to
              inform us of dietary requirements then you can disable the Guest
              List facility however you will no longer be able to email your
              guests or manage etickets individually plus your guests will not
              be able to log in and download their own etickets. To disable your
              Guest List:{' '}
              <Button className="btn_primary extra_small">Click Here</Button>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
