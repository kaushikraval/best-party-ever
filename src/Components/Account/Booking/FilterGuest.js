import React from 'react';
import { Button } from 'react-bootstrap';

export default function FilterGuest({ filterGueatsHandleChange }) {
  return (
    <div className="filter_guest_wrap mb-3">
      <div className="table_header_wrap">
        <h4 className="m-0">
          <i className="pi pi-filter me-2"></i> Filter Guests
        </h4>
        <Button
          className="btn_primary small"
          onClick={() => filterGueatsHandleChange(false)}
        >
          <i className="pi pi-times"></i>
        </Button>
      </div>
      <div className="filter_guest_inner p-3">
        <h4>By Status</h4>
        <ul className="mb-3">
          <li>
            <Button className="btn_primary small">
              <i className="pi pi-users me-2"></i> All Guests
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i className="pi pi-calendar-plus me-2"></i> Invited
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i className="pi pi-calendar-times me-2"></i> Not Invited
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i className="pi pi-check-circle me-2"></i> Attending
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i className="pi pi-times-circle me-2"></i> Not Attending
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i className="pi pi-question-circle me-2"></i> Dont Know
            </Button>
          </li>
        </ul>
        <h4>By Requirement</h4>
        <ul>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-utensils me-2"></i> Dairy Free
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-utensils me-2"></i> Gluten Free
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-utensils me-2"></i> Halal
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-utensils me-2"></i> Nut Allergy
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-utensils me-2"></i> Vegan
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-utensils me-2"></i> Vegetarian
            </Button>
          </li>
          <li>
            <Button className="btn_primary small">
              <i class="fa-solid fa-wheelchair-move me-2"></i> Wheelchair User
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
