import { Box, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const ThresholdConfiguration = ({ thresholds, setThresholds }) => {
  const handleChange = (name, type, value) => {
    const updatedThresholds = { ...thresholds };
    updatedThresholds[name][type] = parseFloat(value);
    setThresholds(updatedThresholds);
  };

  return (
    <div className="App">
       <Box
        sx={{
          background: "skyblue",
          padding: "10px",
          textAlign: "center",
          borderRadius: "10px",
          margin: "10px", 
        }}
      >
        <h2>Threshold Configuration</h2>
      </Box>
      {Object.keys(thresholds).map((key) => (
        <Box
          key={key}
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id={`${key}-min`}
            label={`${key} Min`}
            variant="outlined"
            type="number"
            value={thresholds[key].min}
            onChange={(e) => handleChange(key, "min", e.target.value)}
          />
          <TextField
            id={`${key}-max`}
            label={`${key} Max`}
            variant="outlined"
            type="number"
            value={thresholds[key].max}
            onChange={(e) => handleChange(key, "max", e.target.value)}
          />
        </Box>
      ))}
    </div>
  );
};

export default ThresholdConfiguration;
