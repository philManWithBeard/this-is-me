import React from "react";

// displays questions in a specific style
const Question = ({ children }) => {
  return <h2 className="display-4">{children}</h2>;
};

export default Question;
