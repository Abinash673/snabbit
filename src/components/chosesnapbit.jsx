import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import img1 from "../assets/chose/trusted-experts.png";
import img2 from "../assets/chose/flexible-booking.svg";
import img3 from "../assets/chose/reschedule-or-cancel.svg";
import img4 from "../assets/chose/maid.png";
import img5 from "../assets/chose/rating.svg";
import img6 from "../assets/chose/trusted-by-numbers.svg";



const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const SnabbitSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5,mx:10 }}>
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
        spacing={5}
        justifyContent="center"
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ bgcolor: "white", borderRadius: 7,overflow: "hidden",textAlign: "center",border:"1px solid rgb(236, 229, 229)",}}>
          <img src={img1} alt="Verified Experts" style={{ width: "100%"}} />
            <Typography variant="h6" fontWeight="bold" my={2}>
            Background Verified and Trusted Experts
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ bgcolor: "white", borderRadius: 7,overflow: "hidden",textAlign: "center",border:"1px solid rgb(236, 229, 229)",}}>
          <img src={img2} alt="Verified Experts" style={{ width: "100%",objectFit:"scale-down"}} />
            <Typography variant="h6" fontWeight="bold" my={2}>
              Professionally Trained For Home Cleaning
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ bgcolor: "white", borderRadius: 7,overflow: "hidden",textAlign: "center",border:"1px solid rgb(236, 229, 229)",}}>
          <img src={img3} alt="Verified Experts" style={{ width: "100%",objectFit:"scale-down"}} />
            <Typography variant="h6" fontWeight="bold" my={2}>
            Freedom to Cancel or Reschedule
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ mt: 5 }}
        component={motion.div}
        initial="hidden"
        animate="visible"
      >
         <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ bgcolor: "white", borderRadius: 7,overflow: "hidden",textAlign: "center",border:"1px solid rgb(236, 229, 229)",}}>
          <img src={img4} alt="Verified Experts" style={{ width: "100%"}} />
            <Typography variant="h6" fontWeight="bold" my={2}>
            Powered By Strong Women Workforce
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{ bgcolor: "white", borderRadius: 7,overflow: "hidden",textAlign: "center",border:"1px solid rgb(236, 229, 229)",}}>
          <img src={img5} alt="Verified Experts" style={{ width: "100%",bgcolor: "#F2F2F2",objectFit:"scale-down"}} />
            <Typography variant="h6" fontWeight="bold" my={2}>
            Quality You Can Trust
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} component={motion.div} variants={variants}>
          <Box sx={{   bgcolor: "white",borderRadius: 7,overflow: "hidden",textAlign: "center",border:"1px solid rgb(236, 229, 229)",}}>
          <img src={img6} alt="Verified Experts" style={{ width: "100%",bgcolor: "#F2F2F2",objectFit:"scale-down"}} />
            <Typography variant="h6" fontWeight="bold" my={2}>
            Trusted By 6000+ Families
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SnabbitSection;
