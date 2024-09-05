import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage1 from "./Pages/DashboardPage2/DashboardPage1";
import LandingPage from "./Pages/LandingPage2/LandingPage";
import DetailsPage from "./Components/DashboardPage/DetailsPage/DetailsPage";
import ComparePage from "./Pages/ComparePage/ComparePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage1 />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/coin/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
