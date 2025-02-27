import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is Snabbit?",
    answer: "Snabbit is India's first on-demand services platform, offering quick and reliable home chore assistance right to your doorstep within 15 minutes."
  },
  {
    question: "How do I book a service with Snabbit?",
    answer: "Booking a service is easy! Just download our app, choose your preferred service and time, and confirm your booking."
  },
  {
    question: "Can we get multiple tasks done in one booking?",
    answer: "All our service professionals are rigorously vetted, background-checked, and trained to deliver top-quality service. Our stringent verification process require government IDs, such as Aadhaar and PAN cards, and passing police verification to ensure no criminal records. Your safety and satisfaction are our top priorities."
  },
  {
    question: "",
    answer: "All our service professionals are rigorously vetted, background-checked, and trained to deliver top-quality service. Our stringent verification process require government IDs, such as Aadhaar and PAN cards, and passing police verification to ensure no criminal records. Your safety and satisfaction are our top priorities."
  },
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: ""
  },
  {
    question: "",
    answer: "With Snabbit, you can get a service professional to your home within 15 minutes, depending on availability and your location."
  },
  {
    question: "",
    answer: "We currently do not offer services over a longer duration. You can book with us whenever you have a requirement, and we will ensure a home help arrives within 15 minutes."
  },
];

const FAQSection = () => {
  return (
    <Box sx={{ maxWidth: 1000, margin: "auto", py: 4 }}>
      <Typography variant="h4" fontWeight="bold" align="center" color="secondary" gutterBottom>
        FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2, boxShadow: 3, borderRadius: 4 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight="bold">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
