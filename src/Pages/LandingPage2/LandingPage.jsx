import React from "react";
import Header from "../../Components/Common/Header/Header";
import Main from "../../Components/LandingPage/Main/Main";

import "./LandingPage.css";

const LandingPage = ({ toggleTheme }) => {
  return (
    <div className="land">
      <Header toggleTheme={toggleTheme} />
      <Main />
    </div>
  );
};

export default LandingPage;
