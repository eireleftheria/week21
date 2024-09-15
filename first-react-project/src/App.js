import "./App.css";
// import { Box, TextField, Button } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 5],
  ["Eat", 2],
  ["Sports", 1.5],
  ["ITGirls study", 4],
  ["Sleep", 7.5],
  ["Read a book", 2],
  ["Relax", 2],
];

export const options = {
  title: "My Daily Activities",
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"700px"}
      />
    </div>
  );
}

export default App;
