import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="btn">
      <Link to="/dashboard">
        <button className="db-Btn">Dashboard</button>
      </Link>
    </div>
  );
};

export default Button;
