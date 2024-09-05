import React from "react";
import Header from "../../Components/Common/Header/Header";
import Main from "../../Components/LandingPage/Main/Main";

import "./LandingPage.css";
import Footer from "../../Components/Common/Footer/Footer";

const LandingPage = () => {
  return (
    <div className="land">
      <Header />
      <Main />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
