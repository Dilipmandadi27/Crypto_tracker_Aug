import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./Selectdays.css";

export default function SelectDays({ days, handleDaysChange }) {
  return (
    <div className="selectdays">
      <p>Price Change In </p>
      <Select
        className="select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={180}>180 Days</MenuItem>
        <MenuItem value={365}>365 Days</MenuItem>
      </Select>
    </div>
  );
}
