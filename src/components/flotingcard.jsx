import React from "react";
import { Box, Typography, Button } from "@mui/material";
import playStore from "../assets/download-app/google-play.svg";
import appStore from "../assets/download-app/apple-app-store.svg";

const FloatingCard = ({ position, content }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        [position]: "30px",
        bottom: "50px",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <FloatingCard
        position="left"
        content={
          <>
            <Typography variant="body1" fontWeight="bold">
              DOWNLOAD THE <span style={{ color: "#FF4081" }}>Snabbit</span>
            </Typography>
            <img src={playStore} alt="Play Store" style={{ width: "120px", marginTop: "10px",backgroundColor:"black" }} />
            <img src={appStore} alt="App Store" style={{ width: "120px", marginTop: "10px" ,backgroundColor:"black"}} />
          </>
        }
      />

      <FloatingCard
        
        position="right"
        content={
          <>
            <Button
              variant="outlined"
              startIcon={<span>💬</span>}
              sx={{ borderRadius: "40px", px: 2, py: 1,height:"40px" }}
            >
              Write to us
            </Button>
          </>
        }
      />
    </Box>
  );
};

export default FloatingCard;
