import React from "react";
import "./style.scss";
import ServicesContent from "../../components/Services/ServicesContent";
import HeroCard from "../../components/Services/Hero/HeroCard/HeroCard";

const Services = () => {
  return (
    <>
      <HeroCard
        title={"Crafting the Future,\n today"}
        backgroundImageUrl={"/images/hero-image.png"}
        hasButton={false}
        heroCardHeight="632px"
      />
      <ServicesContent />
    </>
  );
};

export default Services;
