import React from 'react';

const ModalA = ({ toggleA, toggleB, toggleC, onlyEven, setOnlyEven }) => {
  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal A</h5>
            <button type="button" className="close" aria-label="Close" onClick={toggleA}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Modal A Content...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-outline" style={{ border: "2px solid #46139f" }} onClick={toggleA}>Close</button>
            <button type="button" className="btn" style={{ color: "#ff7f50" }} onClick={toggleB}>US Contacts</button>
            {/* Include checkbox and other buttons here as per the requirements */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalA;
