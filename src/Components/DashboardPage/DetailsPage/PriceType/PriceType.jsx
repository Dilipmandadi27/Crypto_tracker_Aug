import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./PriceType.css";
import { useState } from "react";

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {
  return (
    <div className="PriceType">
      <ToggleButtonGroup
        value={priceType}
        className="PriceTypetoggle"
        exclusive
        onChange={handlePriceTypeChange}
        aria-label="text alignment"
      >
        <ToggleButton value="prices">Price</ToggleButton>
        <ToggleButton value="market_cap">Market Cap</ToggleButton>
        <ToggleButton value="total_volume">Volume</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
