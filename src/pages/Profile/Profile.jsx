import React from "react";
import { Typography, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../../components/Profile/Hero/Hero";

const Profile = () => {
  const { isMobileView, isTabletView } = useWindowSize();

  const Images = [
    {
      src: "/images/Mockup1.png",
    },
    {
      src: "/images/Mockup2.png",
    },
    {
      src: "/images/Mockup3.png",
    },
    {
      src: "/images/Mockup4.png",
    },
  ];
  return (
    <Stack
      sx={{
        mb: 16,
      }}
    >
      <Hero />

      <Stack
        width="100%"
        spacing={2}
        sx={{
          padding: "16px",
        }}
      >
        <Divider
          textAlign="left"
          sx={{
            fontSize: { xs: "24px", md: "25px", lg: "30px" },
            textAlign: { xs: "center", md: "center", lg: "start" },
            p: 3,
          }}
        >
          {" "}
          Your Curriculum vitaes
        </Divider>
        <Stack
          gap={2}
          sx={{
            marginX: isMobileView ? "0" : "32px !important",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:
              isTabletView || isMobileView ? "center" : "space-between",
          }}
        >
          {Images.map((image) => (
            <img
              key={image.src}
              style={{
                width: "auto",
                height: isMobileView ? "240px" : "300px",
                borderRadius: "20px",
              }}
              src={image.src}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
