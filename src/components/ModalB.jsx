
  import React, { useEffect, useState } from 'react';

  const ModalB = ({ toggleA, toggleB, toggleC, onlyEven, setOnlyEven }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            'https://contact.mediusware.com/api/country-contacts/United%20States/'
          );
          if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
          }
          const result = await response.json();
          setData(result.results || []);
        } catch (error) {
          console.error('There has been a problem with your fetch operation:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal B</h5>
              <button type="button" className="close" aria-label="Close" onClick={toggleA}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id}>
                        <th>{row.id}</th>
                        <th>{row.phone}</th>
                        <th>{row.country?.name}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline"
                style={{ border: "2px solid #46139f" }}
                onClick={toggleA}
              >
                Close
              </button>
              <button
                type="button"
                className="btn"
                style={{ color: "#ff7f50" }}
                onClick={toggleA}
              >
                All Countries
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalB;
      // const [data, setData] = useState();
    // const [country, setCountry] = useState("bangladesh");
    // const [search, setSearch] = useState("");
    // const [page, setPage] = useState(1);
    // const [page_size, setPageSize] = useState(10);
    // const [isEven, setIsEven] = useState(false)
  
  
    // const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://contact.mediusware.com/api/country-contacts/bangladesh/');
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const jsonData = await response.json();
    //       setData(jsonData.results);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
