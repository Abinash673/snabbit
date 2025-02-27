// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@mui/material";

// import phone from './assets/phone-mockup.png';


// const sections = [
//   { id: "hero", title: "India's First Quick Service App" },
//   { id: "services", title: "One Booking, Many Services" },
//   { id: "download", title: "Download the Snabbit App" },
// ];

// export default function SnabbitLanding() {
//   const [currentSection, setCurrentSection] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       if (scrollY < 500) setCurrentSection(0);
//       else if (scrollY < 1000) setCurrentSection(1);
//       else setCurrentSection(2);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-gray-100 text-center overflow-hidden">
//       <nav className="p-4 bg-white shadow-md fixed w-full flex justify-between px-10 z-50">
//         <div className="text-xl font-bold text-pink-600">Snabbit</div>
//         <div>
//           <Button variant="text">Services</Button>
//           <Button variant="text">How it Works</Button>
//           <Button variant="text">Why Us?</Button>
//           <Button variant="text">FAQs</Button>
//         </div>
//       </nav>
      
//       <div className="relative h-screen w-full flex flex-col items-center justify-center text-3xl font-bold">
//         {sections.map((section, index) => (
//           <motion.div
//             key={section.id}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: currentSection === index ? 1 : 0, y: currentSection === index ? 0 : 100 }}
//             transition={{ duration: 0.5 }}
//             className="absolute w-full flex flex-col items-center"
//           >
//             <h1 className="text-pink-600 text-4xl">{section.title}</h1>
//             {index === 2 && (
//               <div className="mt-4 flex space-x-4">
//                 <Button variant="contained" color="primary">Google Play</Button>
//                 <Button variant="contained" color="secondary">App Store</Button>
//               </div>
//             )}
//           </motion.div>
//         ))}
//         <motion.img
//           src={phone}
//           className="absolute bottom-0"
//           animate={{ y: currentSection * -200 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           style={{ width: "20%" }}
//         />
//       </div>
//     </div>
//   );
// }


import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import Details from "./components/details";
import HowItWorks from "./components/works";
import ChoseSnabbit from "./components/chosesnapbit";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <HowItWorks />
      <ChoseSnabbit />
    </>
  );
};

export default App;
