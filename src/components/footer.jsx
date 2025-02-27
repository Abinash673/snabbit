import React from "react";
import { Box, Typography, Button } from "@mui/material";
import GooglePlay from "../assets/download-app/google-play.svg";
import AppStore from "../assets/download-app/apple-app-store.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#5B1030",
        color: "white",
        textAlign: "center",
        padding: "4rem 2rem",
        borderRadius: "50px 50px 0 0",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        INDIA'S FIRST <span style={{ color: "#FF4A8D" }}>QUICK</span> SERVICE APP
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        On-demand home services to empower urban households
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 3 }}>
        <Button>
          <img src={GooglePlay} alt="Google Play" width={150} />
        </Button>
        <Button>
          <img src={AppStore} alt="App Store" width={150} />
        </Button>
      </Box>
      <Typography variant="body2" sx={{ marginTop: 5, opacity: 0.7 }}>
        © 2025 MaestroEdge Solutions Pvt. Ltd. All rights reserved.
      </Typography>
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center", gap: 2, fontSize: "0.875rem" }}>
        <Typography component="a" href="#" color="white" sx={{ textDecoration: "none" }}>Terms of Use</Typography>
        <Typography component="a" href="#" color="white" sx={{ textDecoration: "none" }}>Privacy Policy</Typography>
        <Typography component="a" href="#" color="white" sx={{ textDecoration: "none" }}>Equal Opportunity Policy</Typography>
        <Typography component="a" href="#" color="white" sx={{ textDecoration: "none" }}>Refund & Cancellation Policy</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
