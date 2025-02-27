import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import YourStoryLogo from "../assets/spotlight/yourstory.svg";
import Inc42Logo from "../assets/spotlight/inc42.svg";
import MoneyControlLogo from "../assets/spotlight/money-control.svg";
import EconomicTimesLogo from "../assets/spotlight/economic-times.svg";



const Spotlight = () => {
  return (
    <Box textAlign="center" py={4}>
      <Typography variant="h4" fontWeight="bold" color="#5D0F36">
        IN THE <span style={{ color: "#FF2E6D" }}>SPOTLIGHT</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={2}>
        {[YourStoryLogo, Inc42Logo, MoneyControlLogo, EconomicTimesLogo].map((logo, index) => (
          <Grid item key={index}>
            <img src={logo} alt="Logo" style={{ height: 50 }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Spotlight;
