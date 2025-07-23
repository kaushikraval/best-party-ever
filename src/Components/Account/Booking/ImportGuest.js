import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { FileUpload } from 'primereact/fileupload';

export default function ImportGuest({ importGueatHandleChange }) {
  return (
    <div className="import_gueast_wrap">
      <div className="table_header_wrap">
        <h4 className="m-0">
          <i className="pi pi-upload me-2"></i> Import Guests
        </h4>
        <Button
          className="btn_primary small"
          onClick={() => importGueatHandleChange(false)}
        >
          <i className="pi pi-times"></i>
        </Button>
      </div>
      <div className="import_gueast_body">
        <Row>
          <Col md={3}>
            <div className="file_upload">
              <FileUpload
                name="demo[]"
                url={'/api/upload'}
                multiple
                accept="image/*"
                maxFileSize={1000000}
                emptyTemplate={
                  <p className="m-0">Drag and drop files to here to upload.</p>
                }
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="center_content p-3">
              <p>
                If you have lots of guests to add then add them all to an Excel
                spreadsheet with First Name in the first column, Surname in the
                second column and Email address in the third.{' '}
                <span className="text_primary">
                  Email addresses need to be unique or set to "none".
                </span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div className="download_Wrap_right">
              <Button className="btn_primary small mb-2">
                <i className="pi pi-download me-2"></i> Download Example
              </Button>
              <p>
                Download an example spreadsheet template you can update and
                upload.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
