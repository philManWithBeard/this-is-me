import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import ResultsDetail from "../../Components/resultsDetail/Index.jsx";
import Chart from "../../Components/Chart/Index.jsx";
import Input from "../../Components/Input/Index.jsx";

    
function Dashboard(){
    const [searchData, setSearchData] = useState({
        search: '',
        results: [],
      });
    
      const searchPostcode = (query) => {
        API.search(query)
          .then((res) => setSearchData({ ...searchData, results: res.data }))
          
          .catch((err) => console.log(err));
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setSearchData({
          ...searchData,
          [name]: value,
        });
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        searchPostcode(searchData.search);
      };
    return(
        <>
        <div className="row justify-content-center" id="input-container">
        <Input
        value={searchData.search}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        />
        </div>
        <div>
        <Chart/>

        {searchData.results.data ? (
            <ResultsDetail
            county={searchData.results.data.attributes.cty_name}
            pfa={searchData.results.data.attributes.pfa_name}
            />
        ) : (
            <h3>No Results to Display</h3> 
        )}
        </div>
        </>
    )
}

export default Dashboard;