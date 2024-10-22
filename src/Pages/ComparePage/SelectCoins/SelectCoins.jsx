import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import get100Coins from "../../../Functions/get100Coins";
import "./SelectCoins.css";
import SelectDays from "../../../Components/DashboardPage/DetailsPage/SelectDays/SelectDays";

function SelectCoins({
  crypto1,
  crypto2,
  handleCoinsChange,
  handleDaysChange,
  multipleCoins,
  setMultipleCoins,
  days,
}) {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const myCoins = await get100Coins();
      if (Array.isArray(myCoins)) {
        setMultipleCoins(myCoins);
      } else {
        console.error("Expected an array but got:", myCoins);
        setMultipleCoins([]);
      }
    } catch (error) {
      console.error("Error fetching coins:", error);
      setMultipleCoins([]);
    }

    setCoins(myCoins);
    setMultipleCoins(myCoins);
  }

  return (
    <div className="container_select">
      <div className="SelectCoins">
        <p>Crypto 1</p>
        <Select
          className="select"
          value={crypto1}
          onChange={(e) => handleCoinsChange(e, true)}
        >
          {multipleCoins.length > 0 ? (
            multipleCoins
              .filter((coin) => coin.id != crypto2)
              .map((coin) => (
                <MenuItem value={coin.id} key={coin.name}>
                  {coin.name}
                </MenuItem>
              ))
          ) : (
            <MenuItem disabled>No coins available</MenuItem>
          )}
        </Select>
      </div>

      <div className="SelectCoins">
        <p>Crypto 2</p>
        <Select className="select" value={crypto2} onChange={handleCoinsChange}>
          {multipleCoins.length > 0 ? (
            multipleCoins
              .filter((coin) => coin.id != crypto1)
              .map((coin, index) => (
                <MenuItem value={coin.id} key={coin.name}>
                  {coin.name}
                </MenuItem>
              ))
          ) : (
            <MenuItem disabled>No coins available</MenuItem>
          )}
        </Select>
      </div>

      <div className="select_Days">
        <SelectDays days={days} handleDaysChange={(e) => handleDaysChange(e)} />
      </div>
    </div>
  );
}

export default SelectCoins;
