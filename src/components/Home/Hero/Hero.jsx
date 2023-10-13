import "./style.scss";
import HeroCard from "./HeroCard/HeroCard";
import { Stack } from "@mui/material";

const hero = [
  {
    title: `Your Career Job,\nOur Expertise.`,
    subTitle: `Let's Elevate Your Career.`,
    backgroundImageUrl: "/images/hero-image.png",
  },
];

const Hero = () => {
  return (
    <Stack>
      {hero.map((item) => (
        <HeroCard
          key={item.title}
          title={item.title}
          subTitle={item.subTitle}
          backgroundImageUrl={item.backgroundImageUrl}
        />
      ))}
    </Stack>
  );
};

export default Hero;
