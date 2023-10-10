import Stack from "@mui/material/Stack";
import HeroContent from "./HeroContent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";

const Content = () => {
  return (
    <Stack width="100%">
      <HeroContent />
      <SecondComponent />
      <ThirdComponent />
    </Stack>
  );
};

export default Content;