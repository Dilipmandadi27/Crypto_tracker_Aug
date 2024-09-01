import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tabs.css";
import GridList from "../Grid/GridList";
import Lists from "../Lists/Lists";

export default function TabsComponent({ allcoins, filteredCoins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 500,
    textTransform: "capitalize",
  };

  return (
    <div className="TabsComponent">
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="GridList">
            {allcoins.map((coin, i) => {
              return <GridList coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          {allcoins.map((coin, i) => {
            return <Lists coin={coin} key={i} />;
          })}
        </TabPanel>
      </TabContext>
    </div>
  );
}
