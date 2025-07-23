import React from 'react';
import { Button } from 'react-bootstrap';

export default function ImportPreviousguests({
  importPreviousguestsHandleChange,
}) {
  return (
    <div className="import_prev_guest_wrap mb-3">
      <div className="table_header_wrap">
        <h4 className="m-0">
          <i className="pi pi-file-import me-2"></i> Import Previous guests
        </h4>
        <Button
          className="btn_primary small"
          onClick={() => importPreviousguestsHandleChange(false)}
        >
          <i className="pi pi-times"></i>
        </Button>
      </div>
      <div className="p-3">
        <Button className="btn_primary small">
          <i className="pi pi-file-import me-2"></i> Import
        </Button>
      </div>
    </div>
  );
}
