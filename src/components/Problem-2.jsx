import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Problem2 = () => {
    const [isModalAOpen, setModalAOpen] = useState(false);
    const [isModalBOpen, setModalBOpen] = useState(false);
    const [isModalCOpen, setModalCOpen] = useState(false);
    const [onlyEven, setOnlyEven] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const history = useHistory();

    const toggleModalA = () => {
        setModalAOpen(!isModalAOpen);
        history.push(isModalAOpen ? '/' : '/modal-a');
      };
    
      const toggleModalB = () => {
        setModalBOpen(!isModalBOpen);
        history.push(isModalBOpen ? '/' : '/modal-b');
      };
    
      const toggleModalC = (contact) => {
        setSelectedContact(contact);
        setModalCOpen(!isModalCOpen);
      };
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
                <Link to="/all-contact"  type="button" className="btn " style={{color:" #46139f"}}  >
                  US Contact
                </Link>
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
                  className="btn btn-outline" 
                  onClick={() => setModalUSOpen(false)}
                  style={{  border:" 2px solid #46139f"}}
                >
                  Close
                </button>
                <button type="button" className="btn"  style={{color:" #ff9f50"}}>
                  All Contact
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
