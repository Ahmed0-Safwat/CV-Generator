import React from "react";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./style.scss";

const WhyHireUsData = {
  title: `Why you should hire us?`,
  body: `We possess the knowledge and experience to assist you 
  with all your CV-related needs. Whether you want to craft a
   new CV, enhance your existing one, or optimize your professional profile, we have the expertise
    to support your objectives.`,
};

const WhyHireUs = () => {
  return (
    <Stack id="why-hire-us-section" className="section-container">
      <Stack
        className="section-content"
        direction={{ xs: "column", lg: "row" }}
        spacing={5}
      >
        <Typography
          fontWeight={700}
          fontSize="48px"
          lineHeight="76px"
          className="hire-us-header"
          sx={{ width: { xs: "100%", lg: "345px" } }}
        >
          {WhyHireUsData.title}
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ display: { xs: "none", lg: "flex" } }}
        />

        <Typography
          fontWeight={400}
          fontSize="24px"
          sx={{
            maxWidth: { xs: "100%", lg: "794px" },
            width: "100%",
            height: "100%",
          }}
          lineHeight="38px"
        >
          {WhyHireUsData.body}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default WhyHireUs;
