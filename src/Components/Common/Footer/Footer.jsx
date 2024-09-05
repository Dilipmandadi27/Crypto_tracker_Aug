import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="contents_1">
        <Link to="/">
          <h2>@Aajet.</h2>
        </Link>

        <div className="contents_2">
          <h2>Contact Us </h2>
          <a className="contactUS" href="mailto:dilipmandadi123@gmail.com ">
            Mail : dilipmandadi123@gmail.com
          </a>
          <p>Call us: 12345678</p>
        </div>
      </div>
      <p className="Copyrights">
        © 2024 Aajet. All rights reserved. Dilipaa@Aajet-{" "}
      </p>
    </div>
  );
}

export default Footer;
