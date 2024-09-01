import axios from "axios";

const getCoinPrice = (id, days) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log("Prices>>>>", response.data.prices);
      return response.data.prices;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
    });
  return prices;
};

export default getCoinPrice;
