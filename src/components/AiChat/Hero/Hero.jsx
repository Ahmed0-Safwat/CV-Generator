import "./style.scss";
import HeroCard from "./HeroCard/HeroCard";
import { Stack } from "@mui/material";

const hero = [
  {
    title: `Dive into AI Awesomeness :D`,
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
          backgroundImageUrl={item.backgroundImageUrl}
        />
      ))}
    </Stack>
  );
};

export default Hero;
