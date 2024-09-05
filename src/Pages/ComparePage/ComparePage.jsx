import React from "react";
import Header from "../../Components/Common/Header/Header";
import Footer from "../../Components/Common/Footer/Footer";
import Lists from "../../Components/DashboardPage/Lists/Lists";
import LineChart from "../../Components/DashboardPage/DetailsPage/LineChart/LineChart";
import SelectCoins from "./SelectCoins/SelectCoins";

function ComparePage() {
  return (
    <div className="ComparePage">
      <Header />
      <SelectCoins />
      <Footer />
    </div>
  );
}

export default ComparePage;
