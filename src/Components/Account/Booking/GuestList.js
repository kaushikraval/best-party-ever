import React, { useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import AddNewGuest from './AddNewGuest';
import FilterGuest from './FilterGuest';
import ImportGuest from './ImportGuest';
import ImportPreviousguests from './ImportPreviousguests';
import SearchForGuest from './SearchForGuest';

export default function GuestList() {
  const [importGueats, setImportGueats] = useState(false);
  const importGueatHandleChange = () => {
    setImportGueats(!importGueats);
  };
  const [searchGueats, setSearchGueats] = useState(false);
  const searchGueatsHandleChange = () => {
    setSearchGueats(!searchGueats);
  };
  const [filterGueats, setFilterGueats] = useState(false);
  const filterGueatsHandleChange = () => {
    setFilterGueats(!filterGueats);
  };
  const [addNewGuest, setAddNewGuest] = useState(false);
  const addNewGuestHandleChange = () => {
    setAddNewGuest(!addNewGuest);
  };
  const [importPreviousguests, setImportPreviousguests] = useState(false);
  const importPreviousguestsHandleChange = () => {
    setImportPreviousguests(!importPreviousguests);
  };
  const [trExpanded, setTrExpanded] = useState(false);
  const trExpandedHandleChange = () => {
    setTrExpanded(!trExpanded);
  };
  return (
    <div className="guest_list_wrapper">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="text_dark fw_500 m-0">Guest List Management</h2>
        </Col>
        <Col md={6}>
          <div className="filter_button_right">
            <ul>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setSearchGueats(false);
                    setFilterGueats(false);
                    setAddNewGuest(false);
                    setImportPreviousguests(false);
                    importGueatHandleChange();
                  }}
                >
                  <i className="pi pi-upload"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setSearchGueats(false);
                    setFilterGueats(false);
                    setAddNewGuest(false);
                    setImportGueats(false);
                    importPreviousguestsHandleChange();
                  }}
                >
                  <i className="pi pi-user-plus"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setImportGueats(false);
                    setFilterGueats(false);
                    setAddNewGuest(false);
                    setImportPreviousguests(false);
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
                    setImportGueats(false);
                    setAddNewGuest(false);
                    setImportPreviousguests(false);
                    filterGueatsHandleChange();
                  }}
                >
                  <i className="pi pi-filter"></i>
                </Button>
              </li>
              <li>
                <Button
                  className="btn_primary small"
                  onClick={() => {
                    setSearchGueats(false);
                    setImportGueats(false);
                    setFilterGueats(false);
                    setImportPreviousguests(false);
                    addNewGuestHandleChange();
                  }}
                >
                  <i className="pi pi-user-plus me-2"></i> Add Guest
                </Button>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <div className="guest_total_wrap mb-3">
        <ul>
          <li>
            No of places booked:<span>10</span>
          </li>
          <li>
            No of guests:<span>2</span>
          </li>
          <li>
            No of places accepted:<span>0</span>
          </li>
          <li>
            Left to accept:<span>10</span>
          </li>
        </ul>
      </div>
      {importGueats === true && (
        <ImportGuest importGueatHandleChange={importGueatHandleChange} />
      )}
      {searchGueats === true && (
        <SearchForGuest searchGueatsHandleChange={searchGueatsHandleChange} />
      )}
      {filterGueats === true && (
        <FilterGuest filterGueatsHandleChange={filterGueatsHandleChange} />
      )}
      {addNewGuest === true && (
        <AddNewGuest addNewGuestHandleChange={addNewGuestHandleChange} />
      )}
      {importPreviousguests === true && (
        <ImportPreviousguests
          importPreviousguestsHandleChange={importPreviousguestsHandleChange}
        />
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
              setImportGueats(false);
              setAddNewGuest(false);
              setImportPreviousguests(false);
              filterGueatsHandleChange();
            }}
          >
            <i className="pi pi-filter me-2"></i> Filter Guest
          </Button>
        </div>
      </div>
      <div className="table_design_one guest_table_wrapper">
        <Table striped hover>
          <thead>
            <tr>
              <th>Places</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Managed By</th>
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
            <tr onClick={() => trExpandedHandleChange()}>
              <td className="places">&nbsp;</td>
              <td className="first_name">Hardik</td>
              <td className="last_name">Ranapariya</td>
              <td className="manage_by">&nbsp;</td>
              <td className="invited">&nbsp;</td>
              <td className="attending">
                <i className="pi pi-question"></i>
              </td>
              <td className="wheelchair">&nbsp;</td>
              <td className="vegetarian">&nbsp;</td>
            </tr>
            {trExpanded === true && (
              <tr className="expanded">
                <td colSpan={8}>
                  <AddNewGuest />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
