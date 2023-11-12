import Hero from "../../components/Resume/Hero/Hero";
import React from "react";
import Stack from "@mui/material/Stack";
import ImagesCarousel from "../../components/Common/ImagesCarousel/ImagesCarousel";
import { useStore } from "../../hooks/useStore";
import shallow from "zustand/shallow";
import ResumePersonal from "../../components/Resume/ResumeForm/ResumePersonal";
import ResumeSkills from "../../components/Resume/ResumeForm/ResumeSkills";
import ResumeButtons from "../../components/Resume/ResumeForm/ResumeButtons";

const projectsSectionCards = [
  {
    id: 1,
    source: "/images/Mockup1.png",
    title: "Lina",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 2,
    source: "/images/Mockup2.png",
    title: "Nissan",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 3,
    source: "/images/Mockup3.png",
    title: "What’s On?",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 4,
    source: "/images/Mockup4.png",
    title: "Jeep KSA",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 5,
    source: "/images/Mockup4.png",
    title: "Jeep KSA",
    subtitle: "Design, Mobile App, Web",
  },
];

function Resume() {
  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );

  const { shouldShowStepper, activeStep } = globalState;

  const getCurrentResumeComponent = () => {
    switch (activeStep) {
      case 0:
        return <ResumePersonal />;
      case 1:
        return <ResumeSkills />;
      case 2:
        return <ResumePersonal />;
      default:
        break;
    }
  };

  return (
    <>
      <Hero />

      <Stack
        my={5}
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent={{ sm: "center", md: "flex-start", lg: "center" }}
        flexWrap="wrap"
        useFlexGap
        width="100%"
      >
        {shouldShowStepper ? (
          <Stack width="85%" alignItems="center">
            {getCurrentResumeComponent()}
            <ResumeButtons />
          </Stack>
        ) : (
          <ImagesCarousel carouselImages={projectsSectionCards} shouldClick />
        )}
      </Stack>
    </>
  );
}
export default Resume;
