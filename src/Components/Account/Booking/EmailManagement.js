import React, { useState } from 'react';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import FilterGuest from './FilterGuest';
import SearchForGuest from './SearchForGuest';
import SelectEmailTemplate from './SelectEmailTemplate';

export default function EmailManagement() {
  const [searchGueats, setSearchGueats] = useState(false);
  const searchGueatsHandleChange = () => {
    setSearchGueats(!searchGueats);
  };
  const [filterGueats, setFilterGueats] = useState(false);
  const filterGueatsHandleChange = () => {
    setFilterGueats(!filterGueats);
  };
  const [emailTemplate, setEmailTemplate] = useState(false);
  const emailTemplateHandleChange = () => {
    setEmailTemplate(!emailTemplate);
  };
  return (
    <div className="email_management_wrap">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="text_dark fw_500 m-0">Email Management</h2>
        </Col>
        <Col md={6}>
          <div className="filter_button_right">
            <ul>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setFilterGueats(false);
                    setSearchGueats(false);
                    emailTemplateHandleChange();
                  }}
                >
                  <i className="pi pi-envelope"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setFilterGueats(false);
                    setEmailTemplate(false);
                    searchGueatsHandleChange();
                  }}
                >
                  <i className="pi pi-search"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setSearchGueats(false);
                    setEmailTemplate(false);
                    filterGueatsHandleChange();
                  }}
                >
                  <i className="pi pi-filter"></i>
                </Button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      {emailTemplate === true && (
        <SelectEmailTemplate
          emailTemplateHandleChange={emailTemplateHandleChange}
        />
      )}
      {searchGueats === true && (
        <SearchForGuest searchGueatsHandleChange={searchGueatsHandleChange} />
      )}
      {filterGueats === true && (
        <FilterGuest filterGueatsHandleChange={filterGueatsHandleChange} />
      )}
      <div className="guest_list_table_wrap">
        <div className="table_design_two">
          <Table>
            <thead>
              <tr>
                <th>
                  <i className="pi pi-users me-2"></i> Guest List
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="no_data">(click on guest to edit)</p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div className="guest_list_table_wrap mb-3">
        <div className="text-end">
          <Button
            className="btn_primary small"
            onClick={() => {
              setSearchGueats(false);
              setEmailTemplate(false);
              filterGueatsHandleChange();
            }}
          >
            <i className="pi pi-filter me-2"></i> Filter Guest
          </Button>
        </div>
      </div>
      <div className="table_design_one guest_table_wrapper">
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Selected</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Address</th>
              <th>
                <i className="pi pi-envelope me-1"></i> Invited
              </th>
              <th>
                <i className="pi pi-check-square me-1"></i> Attending
              </th>
              <th>
                <i className="fa-solid fa-wheelchair-move"></i>
              </th>
              <th>
                <i className="fa-solid fa-utensils"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="selected">
                <div className="checkbox_wrapper">
                  <Form.Check type="checkbox" id="capital" label="&nbsp;" />
                </div>
              </td>
              <td className="first_name">Hardik</td>
              <td className="last_name">Ranapariya</td>
              <td className="email_address">ranapariyahardik@gmail.com</td>
              <td className="invited">
                <i className="pi pi-envelope"></i>
              </td>
              <td className="attending">
                <i className="pi pi-question"></i>
              </td>
              <td className="wheelchair">&nbsp;</td>
              <td className="vegetarian">&nbsp;</td>
            </tr>
            <tr>
              <td>
                <div className="checkbox_wrapper">
                  <Form.Check type="checkbox" id="capital2" label="&nbsp;" />
                </div>
              </td>
              <td className="first_name">Test</td>
              <td className="last_name">Test</td>
              <td className="email_address">test@gmail.com</td>
              <td className="invited">
                <i className="pi pi-envelope"></i>
              </td>
              <td className="attending">
                <i className="pi pi-question"></i>
              </td>
              <td className="wheelchair">&nbsp;</td>
              <td className="vegetarian">&nbsp;</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
