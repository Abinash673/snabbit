import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "swiper/css";
import "swiper/css/autoplay";
import { Box, Typography, Card, CardMedia, Container } from "@mui/material";
import mobileImage from "../assets/details/phone-mockup.png";
import service1 from "../assets/details/Dishwashing.png";
import service2 from "../assets/details/Dishwashing.png";
import service3 from "../assets/details/Dishwashing.png";
import { Margin } from "@mui/icons-material";

const TasksSection = () => {
  const { scrollYProgress } = useScroll();

  const yPosition = useTransform(scrollYProgress, [0, 1], ["480px", "920px"]);

  const widthSize = useTransform(scrollYProgress, [0, 1], ["300px", "250px"]);

  return (
    <Box
      sx={{
        backgroundColor: "#4D0E24",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        height: "140vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem" },
          mt: 15,
        }}
      >
        ONE BOOKING,{" "}
        <Typography
          component="span"
          variant="h4"
          sx={{
            color: "#E91E63",
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            fontStyle: "italic",
          }}
        >
          MANY
        </Typography>{" "}
        <br />
        TASKS
      </Typography>

      <Container
        disableGutters
        maxWidth="100%"
        sx={{
          mt: 30,
          position: "relative",
        }}
      >
        <Splide
          options={{
            type: "loop",
            perPage: 5,
            perMove: 1,
            gap: "40px",
            autoplay: true,
            interval: 3000,
            speed: 1000,
            pauseOnHover: false,
            resetProgress: false,
            arrows: false,
            pagination: false,
            drag: "free",
            focus: "center",
            breakpoints: {
              320: { perPage: 1 },
              640: { perPage: 2 },
              1024: { perPage: 4 },
            },
          }}
          
        >
          {[service1, service2, service3, service1, service2, service3].map(
            (image, index) => (
              <SplideSlide key={index}>
                <Card
                  sx={{
                    width: 190,
                    height: 280,
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image}
                    alt="Service"
                    sx={{ width: "100%", height: "75%", objectFit: "cover" }}
                  />
                </Card>
              </SplideSlide>
            )
          )}
        </Splide>
      </Container>

      <motion.img
        src={mobileImage}
        alt="Mobile"
        style={{
          position: "absolute",
          width: widthSize,
          top: yPosition,
          transform: "translateX(-50%)",
        }}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </Box>
  );
};

export default TasksSection;
