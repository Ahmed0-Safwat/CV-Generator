import React from "react";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./style.scss";

const WhyHireUsData = {
  title: `Why you should hire us?`,
  body: `We have the expertise and experience to help you with all of your tech needs. Whether you are looking to develop a new product,
  improve your existing IT infrastructure, or create a more efficient workflow, we can help you achieve your goals.`,
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
