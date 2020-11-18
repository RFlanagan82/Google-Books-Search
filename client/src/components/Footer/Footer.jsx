import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer mt-auto py-1 bg-info footertext">
        <div className="container-fluid">
          <div className="row">
            <span className="col-sm-12 text-white text-center my-auto">
              Copyright&copy; 2020 - Ryan Flanagan
            </span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;