import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Q1 from "./Questions/Q1";
import Q2 from "./Questions/Q2";

const Header = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1)
  return (
    <>
      <Navbar className="custom-navbar" variant="dark" fixed="top">
      <Navbar.Brand className="mx-auto header-font">This-Is-Me</Navbar.Brand>
    </Navbar>   
   
   
{currentQuestion=== 1 ? <Q1 setCurrentQuestion={setCurrentQuestion}/> : ""}
{currentQuestion=== 2 ? <Q2  setCurrentQuestion={setCurrentQuestion}/> : ""}
{/* {currentQuestion=== 3 ? <Q3 /> : ""} */}
    </>
  );
};

export default Header;
