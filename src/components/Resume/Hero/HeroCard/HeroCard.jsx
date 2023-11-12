import "./style.scss";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import React from "react";
import { Stack, Typography } from "@mui/material";

const HeroCard = ({ title, subTitle, backgroundImageUrl, styleProps }) => {
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

  return (
    <Stack
      id="hero-card"
      direction="row"
      className="section-container"
      sx={{
        height: "90vh",
        minHeight: { xs: "500px", sm: "600px" },
        maxHeight: "600px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: {
          xs: "0px 0px 40px 40px",
          sm: "0px 0px 80px 80px",
          lg: "0px 0px 100px 100px",
        },
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Stack>
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
          </Stack>
        </Stack>
      </Stack>

      <Stack
        mt={5}
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent={{ sm: "center", md: "flex-start", lg: "center" }}
        flexWrap="wrap"
        useFlexGap
      >
        <img
          src={"/images/Mockup1.png"}
          alt={"photo"}
          width={360}
          height={300}
          style={{
            objectFit: "cover",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default HeroCard;
