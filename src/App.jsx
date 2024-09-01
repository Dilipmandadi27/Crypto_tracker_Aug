import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import DashboardPage1 from "./Pages/DashboardPage2/DashboardPage1";
import LandingPage from "./Pages/LandingPage2/LandingPage";
import DetailsPage from "./Components/DashboardPage/DetailsPage/DetailsPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage toggleTheme={toggleTheme} />} />
          <Route path="/dashboard" element={<DashboardPage1 />} />
          <Route path="/compare" element={<LandingPage />} />
          <Route path="/coin/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
