import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Card1 from "../assets/works/card1.png";

const HowItWorks = () => {
  return (
    <Container maxWidth="lg" sx={{ margin:"150px auto", textAlign: "center", }}>
      <Typography variant="h2" fontWeight="bold">
        HOW SNABBIT <span style={{ color: "#FF4081",fontStyle:"italic" }}>WORKS?</span>
      </Typography>
      
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          background: "#fff",
          borderRadius: "35px",
          my: 10,
          left: "50%", transform: "translateX(20%)",
          padding: "30px 25px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          maxHeight: "350px",
          maxWidth: "70%",
        }}
      >
       
        <Box sx={{ width: "40%" }}>
          <img
            src={Card1}
            alt="Service"
            style={{ width: "100%", height: "300px" }}
          />
        </Box>

       
        <Box sx={{ width: "50%", textAlign: "left" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF4081", mt: 0 }}
          >
            STEP 1
          </Button>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 1,color: "#5D0F36" }}>
            SNABBIT YOUR WAY
          </Typography>
          <Typography sx={{ mt: 1, color: "#555" }}>
            Need help now? Get a Snabbit expert at your doorstep in just 15
            minutes. Prefer a later time? Schedule what works best for you.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWorks;


// import { Box, Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import Card1 from "../assets/works/card1.png";
// import Card2 from "../assets/works/card2.png";
// import Card3 from "../assets/works/card3.png"

// const steps = [
//   {
//     id: 1,
//     title: "SNABBIT YOUR WAY",
//     description:
//       "Need help now? Get a Snabbit expert at your doorstep in just 15 minutes. Prefer a later time? Schedule what works best for you.",
//     image: Card1,
//   },
//   {
//     id: 2,
//     title: "CHOOSE YOUR SERVICE",
//     description:
//       "Select from a range of services tailored to your needs. Quick, efficient, and reliable!",
//     image: Card2,
//   },
//   {
//     id: 3,
//     title: "ENJOY THE EXPERIENCE",
//     description:
//       "Sit back and relax while our experts handle everything professionally.",
//     image: Card3,
//   },
// ];

// const AnimatedSteps = () => {
//   const [visibleStep, setVisibleStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleStep((prevStep) => (prevStep + 1) % steps.length);
//     }, 3000); // Change step every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
//       {steps.map((step, index) => (
//         <motion.div
//           key={step.id}
//           initial={{ opacity: 0, y: 80 }}
//           animate={{
//             opacity: visibleStep >= index ? 1 : 0,
//             y: visibleStep >= index ? 0 : 80,
//             scale: visibleStep === index ? 1 : 0.95,
//           }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           style={{
//             position: "absolute",
//             top: "10%",
//             left: "25%",
//             transform: "translate(-50%, -50%)",
//             zIndex: visibleStep >= index ? 10 - index : index * 5,
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "40px",
//               background: "rgba(255, 255, 255, 0.9)", // Adds slight transparency
//               borderRadius: "35px",
//               padding: "30px 25px",
//               boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
//               maxHeight: "350px",
//               maxWidth: "70%",
//               backdropFilter: "blur(10px)", // Adds a subtle glass effect
//             }}
//           >
//             <Box sx={{ width: "40%" }}>
//               <img
//                 src={step.image}
//                 alt="Service"
//                 style={{ width: "100%", height: "300px", borderRadius: "15px" }}
//               />
//             </Box>

//             <Box sx={{ width: "50%", textAlign: "left" }}>
//               <Button variant="contained" sx={{ backgroundColor: "#FF4081" }}>
//                 STEP {step.id}
//               </Button>
//               <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, color: "#5D0F36" }}>
//                 {step.title}
//               </Typography>
//               <Typography sx={{ mt: 1, color: "#555" }}>{step.description}</Typography>
//             </Box>
//           </Box>
//         </motion.div>
//       ))}
//     </Box>
//   );
// };

// export default AnimatedSteps;
