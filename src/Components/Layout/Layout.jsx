import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const Layout = ({ children }) => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
