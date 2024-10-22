import React, { useState } from "react";
import Header from "../../Components/Common/Header/Header";
import Footer from "../../Components/Common/Footer/Footer";
import Lists from "../../Components/DashboardPage/Lists/Lists";
import SelectCoins from "./SelectCoins/SelectCoins";
import { getCoinData } from "../../Functions/getCoinData";
import "./ComparePage.css";
import settingChartData from "../../Functions/settingChartData";
import { coinObject } from "../../Functions/covertObjects";
import { useEffect } from "react";
import Loader from "../../Components/Common/Loader/Loader";
import getCoinPrice from "../../Functions/getCoinPrice";
import CoinInfo from "../../Components/DashboardPage/DetailsPage/CoinInfo/CoinInfo";

function ComparePage() {
  const [multipleCoins, setMultipleCoins] = useState([]);
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState(null);
  const [crypto2Data, setCrypto2Data] = useState(null);
  const [days, setDays] = useState(120);
  const [priceType, setPriceType] = useState("prices");
  const [isLoading, setIsLoading] = useState(true);

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
  };

  useEffect(() => {
    getData();
  }, [crypto1, crypto2, days]);

  async function getData() {
    setIsLoading(true);
    try {
      const data1 = await getCoinData(crypto1);
      const data2 = await getCoinData(crypto2);
      setCrypto1Data(data1);
      setCrypto2Data(data2);
    } catch (error) {
      console.error("Error fetching coin data:", error);
      setCrypto1Data(null);
      setCrypto2Data(null);
    }
    setIsLoading(false);

    // if (data1) {
    //   coinObject(setCrypto1Data, data1);
    // }
    // if (data2) {
    //   coinObject(setCrypto2Data, data2);
    // }
    // if (data1 && data2) {
    //   const prices1 = await getCoinPrice(crypto1, days, "prices");
    //   const prices2 = await getCoinPrice(crypto2, days, "prices");
    //   if (prices1.length > 0 && prices2.length > 0) {
    //     setIsLoading(false);
    //   }
    // }
  }

  const handleCoinsChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto2Data, data);
        const prices = await getCoinPrice(event.target.value, days, "prices");
        if (prices && prices.length > 0) {
          setIsLoading(false);
        }
      }
    } else {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value);
      if (data) {
        coinObject(setCrypto1Data, data);
        const prices = await getCoinPrice(event.target.value, days, "prices");
        if (prices && prices.length > 0) {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <div className="ComparePage">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="days_select">
            <SelectCoins
              crypto1={crypto1}
              setCrypto1={setCrypto1}
              setCrypto2={setCrypto2}
              crypto2={crypto2}
              handleCoinsChange={handleCoinsChange}
              setMultipleCoins={setMultipleCoins}
              handleDaysChange={handleDaysChange}
            />
          </div>
        </>
      )}

      <div className="Compare_coins">
        <div className="Compare_coin1">
          {crypto1Data && <Lists coin={crypto1Data} />}
        </div>

        <div className="Compare_coin1">
          {crypto2Data && <Lists coin={crypto2Data} />}
        </div>
      </div>

      <div className="compare_desc">
        {crypto1Data && (
          <CoinInfo heading={crypto1Data?.name} desc={crypto1Data?.desc} />
        )}
        {crypto2Data && (
          <CoinInfo heading={crypto2Data?.name} desc={crypto2Data?.desc} />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ComparePage;
