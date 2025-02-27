import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const testimonials = [
  {
    name: "Shraddha Musale",
    location: "Powai",
    text: "I recently started using Snabbit for weekly cleaning and I'm extremely impressed. They deliver quality services quickly at pocket-friendly rates. I now rely on them for weekly cleanings instead of a deep clean every 3 months.",
    image: "shraddha.jpg",
  },
  {
    name: "Sapana Jain",
    location: "Powai",
    text: "As a working professional, I struggle big time whenever my maid is on leave. Snabbit’s services have been a game changer. From dusting to bathroom cleaning, they take care of everything while I focus on my work.",
    image: "sapana.jpg",
  },
  {
    name: "Video Testimonial",
    location: "",
    video: "testimonial.mp4",
  },
  {
    name: "Sunny Gala",
    location: "Powai",
    text: "My regular house help doesn’t clean fans or bathrooms, so I tried Snabbit. It’s super convenient, and they pay attention to details my maid overlooks. I couldn’t be happier!",
    image: "sunny.jpg",
  },
  
  
];

const Testimonials = () => {
  return (
    <Box
      sx={{
        marginY:"50px",
        justifyContent: "center",
        gap: 2,
        overflowX: "auto",
        p: 2,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        fontWeight="bold"
        sx={{ mb: 10, textAlign: "center" }}
      >
        DON'T JUST TAKE OUR <br /> WORD FOR IT
      </Typography>
      <Box sx={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{ width: 300, p: 5, borderRadius: 3, boxShadow: 3 }}
          >
            {testimonial.image && (
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{ width: 80, height: 80, margin: "auto" }}
              />
            )}
            {testimonial.video && (
              <video width="100%" controls>
                <source src={testimonial.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <CardContent>
              <Typography variant="body1" color="textPrimary" gutterBottom>
                {testimonial.text}
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                {testimonial.name}
              </Typography>
              {testimonial.location && (
                <Typography
                  variant="caption"
                  sx={{ background: "#f5f5f5", px: 1, borderRadius: 1 }}
                >
                  {testimonial.location}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
