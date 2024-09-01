import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Common/Header/Header";
import Loader from "../../Common/Loader/Loader";
import { coinObject } from "../../../Functions/covertObjects";
import "./DetailsPage.css";
import Lists from "../Lists/Lists";
import CoinInfo from "./CoinInfo/CoinInfo";
import { getCoinData } from "../../../Functions/getCoinData";
import getCoinPrice from "../../../Functions/getCoinPrice";
import LineChart from "./LineChart/LineChart";
import { convertDate } from "../../../Functions/ConvertDate";
import { settingChartData } from "../../../Functions/SettingChartData";
import SelectDays from "./SelectDays/SelectDays";

function DetailsPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(60);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id, days]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrice(id, days);
      if (prices && prices.length > 0) {
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
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);

    const prices = await getCoinPrice(id, days);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setDays(event.target.value);
  };

  return (
    <div className="DetailsPage">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="DetailsPage_list">
            <Lists coin={coinData} />
          </div>
          <div className="DetailsPage_list">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default DetailsPage;
