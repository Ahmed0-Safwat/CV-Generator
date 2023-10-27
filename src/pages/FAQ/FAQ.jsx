import React from "react";
import "./style.scss";
import Faq from "../../components/Faq/Faq";
import HeroCard from "../../components/Faq/Hero/HeroCard/HeroCard";
import { Stack } from "@mui/material";

const hero = {
  title: `All your questions,\nanswered.`,
  backgroundImageUrl: "/images/hero-image.png",
};

function FAQPage() {
  return (
    <>
      <HeroCard
        key={hero.title}
        title={hero.title}
        backgroundImageUrl={hero.backgroundImageUrl}
        hasButton={false}
        heroCardHeight="632px"
      />
      <Stack className="faq-wrapper">
        <Faq />
      </Stack>
    </>
  );
}

export default FAQPage;
