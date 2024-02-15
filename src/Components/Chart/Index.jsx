import React from "react"; 
import PastSalary from "../../utils/PastSalary";
import PresentSalary from "../../utils/PresentSalary";
import PastPrice from "../../utils/PastPrice";
import PresentPrice from "../../utils/PresentPrice";
import {Data1} from "./Data/data1";
import {Data2} from "./Data/data2";



function Chart(props){
    //const location = Dashboard.searchData.results.data.attributes.cty_name
    const patSalary = PastSalary.paSalary();
    const preSalary = PresentSalary.prSalary();
    let loc = '';
    if (props.county) {
        loc = props.county;
    } else {
        loc = props.pfa
    }
    
    const pastPrice = PastPrice.paPrice(loc.toUpperCase()); 
    const prePrice = PresentPrice.prePrice(loc.toUpperCase())
    if (props.county === null) {
        loc = props.pfa;
    }
    const a = patSalary.replace(',', '');
    const d1Salary = Number(a)

    const b = pastPrice.replace(',', '');
    const d1Price = Number(b)

    while(Data1.length > 0) {
        Data1.pop();
    }
    Data1.push({name: 'Past Salary', value: d1Salary})
    Data1.push({name: 'Past Price', value: d1Price})

    const c = preSalary.replace(',', '');
    const d2Salary = Number(c)

    const d = prePrice.replace(',', '');
    const d2Price = Number(d)

    while(Data2.length > 0) {
        Data2.pop();
    }
    Data2.push({name: 'Past Salary', value: d2Salary})
    Data2.push({name: 'Past Price', value: d2Price})


    return(
        <>
        <h1>Past salary: £{patSalary}</h1>
        <h1>Present salary: £{preSalary}</h1>
        <h1>Past House Price: £{pastPrice}</h1>
        <h1>Present House Price: £{prePrice}</h1>
        
        </>   
    )
    }
export default Chart;