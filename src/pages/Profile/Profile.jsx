import React from "react";
import { Typography, Stack, Divider, Box } from "@mui/material";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import OurValues from "../../components/Home/OurValues/OurValues";

const Profile = () => {
  return (
    <Stack
      direction="row"
      sx={{
        transform: "translateY(90px)",
        mb: 10,
      }}
    >
      <Stack width="100%">
        <Typography variant="h4">Profile</Typography>

        <Stack
          direction="row"
          style={{ alignItems: "center", height: "100px" }}
        >
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "primary.main", mx: 2 }}
          />
        </Stack>

        <HowItWorks />
        <OurValues />
      </Stack>

      <Stack width="100%">new stuff</Stack>
    </Stack>
  );
};

export default Profile;
