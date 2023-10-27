import "./style.scss";
import HeroCard from "./HeroCard/HeroCard";
import { Stack } from "@mui/material";

const hero = [
  {
    title: `From inspiration to innovation`,
    subTitle: ``,
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
