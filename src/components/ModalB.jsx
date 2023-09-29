import React, { useEffect, useState } from 'react';

const ModalB = ({ toggleA, toggleB, toggleC, setOnlyEven, onlyEven }) => {
    


    const [data, setData] = useState();
    const [country, setCountry] = useState("bangladesh");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [page_size, setPageSize] = useState(10);
    const [isEven, setIsEven] = useState(false)
  
  
  const fetchData = async () => {
    try {
     
      const response = await fetch('https://contact.mediusware.com/api/contacts/');
      if (!response) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchData(); // Call the fetchData function when the component mounts
  }, []);
  
  console.log("data",data)
  
  
  useEffect(() => {
    fetchData();
  }, [country])
  
  
  const useData = isEven?filteredData:data
  
  
  const table = data.filter((d) => d.country.name==='United States').map((row, index) => (
                                    <tr key={index}>
                                    <th>{row.id}</th>
                                    <th>{row.phone}</th>
                                    <th>{row.country?.name}</th>
                                    </tr>
                                ))
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
          <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Country</th>
                        </tr>
                        </thead>
                        <tbody>
                          {table}
                        </tbody>
                    </table>
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
