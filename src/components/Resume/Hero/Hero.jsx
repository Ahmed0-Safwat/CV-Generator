import "./style.scss";
import HeroCard from "./HeroCard/HeroCard";
import { Stack } from "@mui/material";
import React from "react";
import { useStore } from "../../../hooks/useStore";
import shallow from "zustand/shallow";
import HorizontalNonLinearStepper from "../Stepper/Stepper";

const hero = [
  {
    title: `Cv Generator`,
    subTitle: `Create a Professional CV,Online in No Time.`,
    backgroundImageUrl: "/images/hero-image.png",
  },
];

const Hero = () => {
  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );

  const { shouldShowStepper } = globalState;

  return (
    <Stack>
      {shouldShowStepper ? (
        <Stack
          id="hero-card"
          direction="row"
          className="section-container"
          sx={{
            height: "90vh",
            minHeight: { xs: "500px", sm: "600px" },
            maxHeight: "600px",
            backgroundImage: `url(/images/hero-image.png)`,
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
          <HorizontalNonLinearStepper />
        </Stack>
      ) : (
        hero.map((item) => (
          <HeroCard
            key={item.title}
            title={item.title}
            subTitle={item.subTitle}
            backgroundImageUrl={item.backgroundImageUrl}
          />
        ))
      )}
    </Stack>
  );
};

export default Hero;
