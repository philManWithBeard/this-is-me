import React from "react"; 
import Dashboard from "../../Pages/Dashboard/Index";
import PastSalary from "../../utils/PastSalary";
import PresentSalary from "../../utils/PresentSalary";


function Chart(){
    //const location = Dashboard.searchData.results.data.attributes.cty_name
    const patSalary = PastSalary.paSalary();
    const preSalary = PresentSalary.prSalary();
    return(
        <>
        <h1>Past salary: {patSalary}</h1>
        <h1>Present salary: {preSalary}</h1>
        <div></div>
        </>
    )
    }
export default Chart;