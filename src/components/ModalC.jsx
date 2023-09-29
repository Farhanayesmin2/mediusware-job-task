import React from 'react';

const ModalC = ({ toggleC, contact }) => {
  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal C - {contact ? contact.name : ''}</h5>
            <button type="button" className="close" aria-label="Close" onClick={toggleC}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Modal C Content...
            {contact && <p>{contact.details}</p>}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline" style={{ border: "2px solid #46139f" }} onClick={toggleC}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalC;
