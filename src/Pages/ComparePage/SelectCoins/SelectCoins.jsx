import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import get100Coins from "../../../Functions/get100Coins";
import "./SelectCoins.css";

function SelectCoins() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [multipleCoins, setMultipleCoins] = useState([]);

  const handleCoinsChange = (event) => {
    setCrypto1(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const myCoins = await get100Coins();
    setMultipleCoins(myCoins);
    if (myCoins.length > 0) {
      setCrypto1(myCoins[0].id);
    }
  }

  return (
    <div className="container_select">
      <div className="SelectCoins">
        <p>Crypto 1</p>
        <Select className="select" value={crypto1} onChange={handleCoinsChange}>
          {multipleCoins.map((coin) => (
            <MenuItem value={coin.id} key={coin.name}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="SelectCoins">
        <p>Crypto 2</p>
        <Select className="select" value={crypto2} onChange={handleCoinsChange}>
          {multipleCoins.map((coin) => (
            <MenuItem value={coin.id} key={coin.name}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div className="SelectCoins">
        <Select className="select" value={crypto2} onChange={handleCoinsChange}>
          {multipleCoins.map((coin) => (
            <MenuItem value={coin.id} key={coin.name}>
              {coin.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
}

export default SelectCoins;
