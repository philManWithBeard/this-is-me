import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import "../../index.css";

const Q2 = () => {
    return (
    <div className="down-row row">
        {/* Result */}
        <div className="border col-md-6">
            Result
        </div>
    <div className="button-container col-md-6">
        <h1>County</h1>
    <Button variant="primary" size="lg" active className="custom-button">
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" active className="custom-button my-2">
        Button
      </Button>
  </div>
  </div>
  );
};

export default Q2;