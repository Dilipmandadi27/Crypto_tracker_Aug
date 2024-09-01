import React from "react";
import "./Lists.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";

function Lists({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <table className="Lists">
        <tr className="list-container">
          <div className="list-card-items">
            <td>
              <img src={coin.image} alt="coin-1" />
            </td>
            <div className="list-item-info">
              <td>
                <p className="Coin_symbol">{coin.symbol}</p>
              </td>

              <td>
                <p className="Coin_Name">{coin.name}</p>
              </td>
            </div>
          </div>

          {coin.price_change_percentage_24h > 0 ? (
            <div className="indicator">
              <td className="list-indicators">
                <p>{coin.price_change_percentage_24h + " %"}</p>
              </td>
              <td className="list-img ">
                <TrendingUpRoundedIcon />
              </td>
            </div>
          ) : (
            <div className="indicator">
              <td className="list-indicators red-indi">
                <p>{coin.price_change_percentage_24h + " %"}</p>
              </td>
              <td className="list-img red_img">
                <TrendingDownRoundedIcon />
              </td>
            </div>
          )}

          <div
            className={
              coin.price_change_percentage_24h > 0 ? "price" : "red-price"
            }
          >
            <td>
              <p>{"$" + coin.current_price}</p>
            </td>
          </div>

          <td className="list-qty">
            <p>{"$" + coin.total_volume}</p>
          </td>
          <td className="list-qty">
            <p>{"$" + coin.market_cap}</p>
          </td>
        </tr>
      </table>
    </Link>
  );
}

export default Lists;

// <div className="list-container">
//         <div className="card-items">
//           <img src={coin.image} alt="coin-1" />
//           <div className="item-info">
//             <p className="Coin_symbol">{coin.symbol}</p>
//             <p className="Coin_Name">{coin.name}</p>
//           </div>
//         </div>
//         <div className="indicators">
//           <p>{coin.price_change_percentage_24h + " %"}</p>
//           <div className="img">
//             <TrendingUpRoundedIcon />
//             <img src="TrendingDownRoundedIcon" alt="indicator" />
//           </div>
//         </div>
//         <div className="price">
//           <p>{"$" + coin.current_price}</p>
//         </div>
//         <div className="qty">
//           <p>{"Total Volume : $" + coin.total_volume}</p>
//           <p>{"Market Cap : $" + coin.market_cap}</p>
//         </div>
//       </div>
