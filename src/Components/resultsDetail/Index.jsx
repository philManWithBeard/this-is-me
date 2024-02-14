import React from "react";

function ResultsDetail(props) {
  return (
    <div className="text-center">
      <h3>County: {props.county}</h3>
      <h3>PFA: {props.pfa}</h3>
    </div>
  );
}

export default ResultsDetail;
