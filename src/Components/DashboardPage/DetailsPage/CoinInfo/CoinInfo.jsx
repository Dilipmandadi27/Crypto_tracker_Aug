import React, { useState } from "react";
import "./CoinInfo.css";

function CoinInfo({ heading, desc }) {
  const description = typeof desc === "string" ? desc : "";

  const shortDesc =
    description.slice(0, 350) +
    "<span style='color:#1976d2'> Read More...</span>";
  const longDesc =
    description + "<span style='color:#1976d2'> Read Less...</span>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="CoinInfo">
      <h2>{heading || "No Title Available"}</h2>
      <p
        onClick={() => setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
      />
    </div>
  );
}

export default CoinInfo;
