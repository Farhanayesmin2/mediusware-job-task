import React, { useState } from 'react';

import ModalA from './ModalA';
import ModalB from './ModalB';
import ModalC from './ModalC';

const Problem2 = () => {
  const [isModalAOpen, setModalAOpen] = useState(false);
  const [isModalBOpen, setModalBOpen] = useState(false);
  const [isModalCOpen, setModalCOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [onlyEven, setOnlyEven] = useState(false);
//    const history = useHistory();

  const toggleModalA = () => {
    setModalAOpen(!isModalAOpen);
   // history.push(isModalAOpen ? '/' : '/modal-a');
  };

  const toggleModalB = () => {
    setModalBOpen(!isModalBOpen);
   // history.push(isModalBOpen ? '/' : '/modal-b');
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
          <button className="btn btn-lg btn-outline-primary" onClick={toggleModalA}>All Contacts</button>
          <button className="btn btn-lg btn-outline-warning" onClick={toggleModalB}>US Contacts</button>
        </div>
      </div>

      {isModalAOpen && <ModalA toggleA={toggleModalA} toggleB={toggleModalB} toggleC={toggleModalC} onlyEven={onlyEven} setOnlyEven={setOnlyEven} />}
      {isModalBOpen && <ModalB toggleA={toggleModalA} toggleB={toggleModalB} toggleC={toggleModalC} onlyEven={onlyEven} setOnlyEven={setOnlyEven} />}
      {isModalCOpen && <ModalC contact={selectedContact} toggleC={toggleModalC} />}
    </div>
  );
};

export default Problem2;
