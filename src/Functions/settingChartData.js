import { convertDate } from "./ConvertDate";

const settingChartData = ({ setChartData, prices }) => {
  if (Array.isArray(prices)) {
    setChartData({
      labels: prices.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgba(58,128,233,0.1)",
          pointRadius: 0,
        },
      ],
    });
  } else {
    console.error("Expected prices to be an array, but received:", prices);
  }
};

export default settingChartData;
