import React, { useState } from 'react';

const Problem2 = () => {
  const [isModalContactOpen, setModalContactOpen] = useState(false);
  const [isModalUSOpen, setModalUSOpen] = useState(false);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>
        <div className="d-flex justify-content-center gap-3">
          <button 
            className="btn btn-lg btn-outline-primary" 
            type="button" 
            onClick={() => setModalContactOpen(true)}
          >
            All Contacts
          </button>
          <button 
            className="btn btn-lg btn-outline-warning" 
            type="button" 
            onClick={() => setModalUSOpen(true)}
          >
            US Contacts
          </button>
        </div>
      </div>

      {isModalContactOpen && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal Contact</h5>
                <button 
                  type="button" 
                  className="close" 
                  aria-label="Close" 
                  onClick={() => setModalContactOpen(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Contact Modal Content...
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setModalContactOpen(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalUSOpen && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal US</h5>
                <button 
                  type="button" 
                  className="close" 
                  aria-label="Close" 
                  onClick={() => setModalUSOpen(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                US Modal Content...
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setModalUSOpen(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Problem2;
