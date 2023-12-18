import "./style.scss";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";

const HeroCard = ({ title, backgroundImageUrl, styleProps }) => {
  const { isMobileView, isTabletView } = useWindowSize();

  const scrollToTargetById = (id) => {
    const element = document.getElementById(id);
    const headerOffset = 76;
    const elementPosition = element?.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleContactUs = () => {
    if (isTabletView) {
      //
    } else {
      scrollToTargetById("footer");
    }
  };

  return (
    <Stack
      id="hero-card"
      className="section-container"
      sx={{
        minHeight: "0px",
        height: "250px",
        maxHeight: { sm: "90%", lg: "900px" },
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", // Add this line to center the background image
        borderRadius: {
          xs: "0px 0px 40px 40px",
          sm: "0px 0px 80px 80px",
          lg: "0px 0px 100px 100px",
        },
      }}
    >
      <Stack
        className="section-content"
        justifyContent="center"
        alignItems={{ xs: "flex-start", lg: "flex-start" }}
        gap={7}
        sx={{
          textAlign: { xs: "start", lg: "start" },
          whiteSpace: isMobileView ? "normal" : "break-spaces",
          ...styleProps,
        }}
      >
        <Stack
          className="hero-content-wrapper"
          gap={3}
          alignSelf={"center"}
          pt="56px"
        >
          <Typography
            variant="h1"
            className="content-title"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", xl: "3.5rem" },
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroCard;
