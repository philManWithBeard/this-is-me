import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../../index.css";
const QuestionOne = ({ setCurrentQuestion }) => {
  const [postcode, setPostcode] = useState(""); 
  const handleInputChange = (e) => {
    
    setPostcode(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentQuestion(2)
  };

  return (
    <div className="center-container">
        <div className="form-container">
    <h2>Question 1: Lets first input your Postcode</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="postcode">
          <Form.Label className="text-center">Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your postcode"
            value={postcode}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button className="mx-auto my-2" id="next-button" variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </div>
      </div>
  );
};
export default QuestionOne;
