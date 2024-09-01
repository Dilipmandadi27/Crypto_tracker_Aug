import React, { useState } from "react";
import "./CoinInfo.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 350) + "<span style='color:#1976d2'> Read More...</span>";
  const longDesc = desc + "<span style='color:#1976d2'> Read Less...</span>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="CoinInfo">
      <h2>{heading}</h2>
      <p
        onClick={() => setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
      />
    </div>
  );
}

export default CoinInfo;
