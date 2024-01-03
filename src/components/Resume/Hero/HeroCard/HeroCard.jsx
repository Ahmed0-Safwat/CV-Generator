import React from "react";
import { Stack, Typography } from "@mui/material";
import "./style.scss";
import { useWindowSize } from "../../../../hooks/useWindowSize";

const HeroCard = ({ title, subTitle, backgroundImageUrl, styleProps }) => {
  const { isMobileView } = useWindowSize();

  return (
    <Stack
      id="hero-card"
      direction={{ xs: "column", md: "column", lg: "row" }} // Change direction based on screen size
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
      {/* Image component moved up */}
      <Stack
        mt={5}
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent={{ sm: "center", md: "flex-start", lg: "center" }}
        flexWrap="wrap"
        useFlexGap
      >
        <img
          src={"/images/resume home image.png"}
          alt={"photo"}
          width={410}
          height={400}
          style={{
            objectFit: "cover",
          }}
        />
      </Stack>

      {/* Text component */}
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
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeroCard;
