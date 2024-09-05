import { useEffect, useState } from "react";
import Header from "../../Components/Common/Header/Header";
import SearchInput from "../../Components/DashboardPage/SearchInput/SearchInput";
import Tabs from "../../Components/DashboardPage/Tabs/Tabs";
import axios from "axios";
import PaginationComponent from "../../Components/DashboardPage/Pagination/Pagination";
import "./DashboardPage1.css";
import Footer from "../../Components/Common/Footer/Footer";
import get100Coins from "../../Functions/get100Coins";

function DashboardPage1() {
  const [allcoins, setAllCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(allcoins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  var filteredCoins = allcoins.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.symbol.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setAllCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
  };

  return (
    <div className="DashboardPage1">
      <Header />
      <SearchInput searchInput={searchInput} onSearchChange={onSearchChange} />
      <Tabs allcoins={searchInput ? filteredCoins : paginatedCoins} />
      {!searchInput && (
        <PaginationComponent page={page} handlePageChange={handlePageChange} />
      )}
      <div className="Dashboard_Footer">
        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage1;
