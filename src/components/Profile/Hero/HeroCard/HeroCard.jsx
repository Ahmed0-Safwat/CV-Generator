import "./style.scss";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroCard = ({ title, subTitle, backgroundImageUrl, styleProps }) => {
  const { isMobileView, isTabletView } = useWindowSize();
  const navigate = useNavigate();

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
  const routeToCvPage = () => {
    navigate("/resume");
  };
  return (
    <Stack
      id="hero-card"
      className="section-container"
      sx={{
        height: "90vh",
        minHeight: { xs: "500px", sm: "700px" },
        maxHeight: "900px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          alignSelf={"flex-start"}
          pt="56px"
        >
          <Typography
            variant="h1"
            className="content-title"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem", xl: "7rem" },
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            className="content-subTitle"
            color="white"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem", xl: "2.5rem" },
              fontWeight: 500,
            }}
          >
            {subTitle}
          </Typography>
          <Stack mt="32px">
            <Button
              onClick={routeToCvPage}
              variant="contained"
              sx={{
                display: "flex",
                width: { xs: "180px", sm: "220px", md: "300px" },
                height: { xs: "36px", sm: "42px", md: "64px" },
                padding: "8px 24px",
                borderRadius: "100px",
                boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)",
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: 600,
              }}
            >
              Let's Begin
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroCard;
