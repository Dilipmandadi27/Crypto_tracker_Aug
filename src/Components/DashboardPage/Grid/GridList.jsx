import React from "react";
import "./GridList.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

const GridList = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        className={`card-container  ${
          coin.price_change_percentage_24h < 0 && "grid-box-red"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <div className="card-items">
          <img src={coin.image} alt="coin-1" />
          <div className="item-info">
            <p className="Coin_symbol">{coin.symbol}</p>
            <p className="Coin_Name">{coin.name}</p>
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip">
            <div className="grid-percentage">
              <p>{coin.price_change_percentage_24h + " %"}</p>
            </div>
            <div className="img">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip red-indicators">
            <div className="grid-percentage ">
              <p>{coin.price_change_percentage_24h + " %"}</p>
            </div>
            <div className="img graph_red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}

        <div
          className={
            coin.price_change_percentage_24h > 0 ? "price" : "red-price"
          }
        >
          <p>{"$" + coin.current_price}</p>
        </div>
        <div className="qty">
          <p>{"Total Volume : $" + coin.total_volume}</p>
          <p>{"Market Cap : $" + coin.market_cap}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default GridList;
