import React from "react";
import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Header({ toggleTheme }) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h3>
            Aa<span className="aajet">jet.</span>
          </h3>
        </Link>
        <div className="navigations">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>

          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>

          <Link to="/dashboard">
            <Button variant="default">DashBoard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
