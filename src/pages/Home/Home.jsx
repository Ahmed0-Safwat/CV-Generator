import { Box } from "@mui/material";
import Hero from "../../components/Home/Hero/Hero";
import WhyHireUs from "../../components/Home/WhyHireUs/WhyHireUs";
import OurExpertise from "../../components/Home/OurExpertise/OurExpertise";
import FeaturedProjects from "../../components/Home/FeaturedProjects/FeaturedProjects";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import OurValues from "../../components/Home/OurValues/OurValues";

function Home() {
  return (
    <Box>
      <Hero />
      <WhyHireUs />
      <OurExpertise />
      <FeaturedProjects />
      <HowItWorks />
      <OurValues />
    </Box>
  );
}

export default Home;
