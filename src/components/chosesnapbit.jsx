import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SnabbitSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5,mx:5 }}>
      <Typography
        variant="h4"
        component="h2"
        fontWeight="bold"
        sx={{ mb: 3 , }}
      >
        WHY CHOOSE <span style={{ color: "#ff3366" }}>SNABBIT</span>
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ p: 2, bgcolor: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Background Verified and Trusted Experts
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ p: 2, bgcolor: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Professionally Trained For Home Cleaning
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ p: 2, bgcolor: "white", borderRadius: 3, boxShadow: 3 }}>
            <Button variant="contained" sx={{ bgcolor: "#ff3366", color: "white" }}>
              Reschedule
            </Button>
            <Button variant="outlined" sx={{ ml: 2 }}>
              Cancel
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ mt: 5 }}
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ p: 2, bgcolor: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Average Service Rating
            </Typography>
            <Typography variant="h4" fontWeight="bold" color="#ff3366">
              4.5⭐
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ p: 2, bgcolor: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Trusted By
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="#ff3366">
              6000+
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ p: 2, bgcolor: "white", borderRadius: 3, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Trusted By
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="#ff3366">
              6000+
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SnabbitSection;
