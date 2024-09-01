import { useEffect, useState } from "react";
import Header from "../../Components/Common/Header/Header";
import SearchInput from "../../Components/DashboardPage/SearchInput/SearchInput";
import Tabs from "../../Components/DashboardPage/Tabs/Tabs";
import axios from "axios";
import PaginationComponent from "../../Components/DashboardPage/Pagination/Pagination";
import "./DashboardPage1.css";

function DashboardPage1() {
  const [allcoins, setAllCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);

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
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response);
        setAllCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="DashboardPage1">
      <Header />
      <SearchInput searchInput={searchInput} onSearchChange={onSearchChange} />
      <Tabs allcoins={searchInput ? filteredCoins : paginatedCoins} />
      {!searchInput && (
        <PaginationComponent page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
}

export default DashboardPage1;
