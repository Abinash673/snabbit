import React from "react";
import { Box, Typography, Button } from "@mui/material";
import googlePlay from "../assets/download-app/google-play.svg";
import appStore from "../assets/download-app/apple-app-store.svg";
import leftGirl from "../assets/download-app/cleaner1.svg";
import rightGirl from "../assets/download-app/cleaner2.svg";
import starIcon from "../assets/download-app/star.svg";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "150px 20px",
        position: "relative",
        background: "#F5F5F5",
        height:"580px",
      }}
    >
      <img
        src={starIcon}
        alt="Star"
        style={{
          position: "absolute",
          top: "180px",
          left: "380px",
          maxWidth: "40px",
        }}
      />
      <img
        src={starIcon}
        alt="Star"
        style={{
          position: "absolute",
          top: "260px",
          right: "365px",
          width: "30px",
        }}
      />
      <img
        src={starIcon}
        alt="Star"
        style={{
          position: "absolute",
          top: "340px",
          left: "570px",
          maxWidth: "30px",
        }}
      />
      
      {/* Left Side Girl Image */}
      <img
        src={leftGirl}
        alt="Cleaning Girl Left"
        style={{
          position: "absolute",
          top: "250px",
          left: "240px",
          bottom: "0",
          maxWidth: "360px",
        }}
      />

      {/* Main Content */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: "900",
          color: "#3D093C",
          textTransform: "uppercase",
          fontFamily: "Sofia Sans Extra Condensed",
          letterSpacing: "-0.01em",
        }}
      >
        INDIA'S FIRST <br />
        <Typography
          variant="h2"
          sx={{
            fontWeight: "900",
            color: "#3D093C",
            fontFamily: "Sofia Sans Extra Condensed",
            letterSpacing: "-0.01em",
          }}
        >
          <span style={{ color: "#E4006D", fontStyle: "italic" }}>QUICK</span>{" "}
          SERVICE APP
        </Typography>
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="subtitle1"
        sx={{ color: "#803C61", marginTop: "10px" }}
      >
        On-demand home services to empower
        <br /> urban households
      </Typography>

      {/* App Store & Play Store Buttons */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Button sx={{ backgroundColor: "black", borderRadius: "10px" }}>
          <img
            src={googlePlay}
            alt="Get it on Google Play"
            style={{ width: "150px" }}
          />
        </Button>
        <Button sx={{ backgroundColor: "black", borderRadius: "10px" }}>
          <img
            src={appStore}
            alt="Download on the App Store"
            style={{ width: "150px" }}
          />
        </Button>
      </Box>

      {/* Right Side Girl Image */}
      <img
        src={rightGirl}
        alt="Cleaning Girl Right"
        style={{
          position: "absolute",
          top: "250px",
          right: "240px",
          bottom: "0",
          maxWidth: "300px",
        }}
      />
    </Box>
  );
};

export default HeroSection;
