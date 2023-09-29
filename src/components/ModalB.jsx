import React from 'react';

const ModalB = ({ toggleA, toggleB, toggleC, setOnlyEven, onlyEven }) => {
  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal B</h5>
            <button type="button" className="close" aria-label="Close" onClick={toggleB}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Modal B Content...
          </div>
          <div className="modal-footer">
            <label>
              <input type="checkbox" checked={onlyEven} onChange={() => setOnlyEven(!onlyEven)} /> Only even
            </label>
            <button type="button" className="btn btn-outline" style={{ border: "2px solid #46139f" }} onClick={toggleB}>Close</button>
            <button type="button" className="btn" style={{ color: "#ff7f50" }} onClick={toggleA}>All Contacts</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalB;
