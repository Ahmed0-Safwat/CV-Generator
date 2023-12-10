import Hero from "../../components/Resume/Hero/Hero";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import ImagesCarousel from "../../components/Common/ImagesCarousel/ImagesCarousel";
import { useStore } from "../../hooks/useStore";
import shallow from "zustand/shallow";
import ResumePersonal from "../../components/Resume/ResumeForm/ResumePersonal";
import ResumeSkills from "../../components/Resume/ResumeForm/ResumeSkills";
import ResumeProjects from "../../components/Resume/ResumeForm/ResumeProjects";
import ResumeExperience from "../../components/Resume/ResumeForm/ResumeExperience";
import ResumeButtons from "../../components/Resume/ResumeForm/ResumeButtons";
import ResumeEducation from "../../components/Resume/ResumeForm/ResumeEducation";
import ResumeLanguages from "../../components/Resume/ResumeForm/ResumeLanguages";
// import Template from "../../components/Resume/Template/Template";
import ResumeExample from "../../components/Resume/ResumeForm/ResumeExample";

const projectsSectionCards = [
  {
    id: 1,
    source: "/images/temp 1.jpg",
    title: "Lina",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 2,
    source: "/images/temp 2.jpg",
    title: "Nissan",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 3,
    source: "/images/temp 3.webp",
    title: "What’s On?",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 4,
    source: "/images/temp 3.webp",
    title: "What’s On?",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 5,
    source: "/images/temp 3.webp",
    title: "What’s On?",
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

  const formControl = useForm({
    defaultValues: {
      personal: {
        firstName: "",
        middleName: "",
        lastName: "",
        img: null,
        address: "",
        email: "",
        phone: "",
      },
      education: [
        {
          university: "",
          department: "",
          startdate: "",
          enddate: "",
        },
      ],
      experience: [
        {
          jobTitle: "",
          company: "",
          location: "",
          startdate: "",
          enddate: "",
          description: "",
        },
      ],
      project: [
        {
          projectname: "",
          projectlink: "",
          description: "",
        },
      ],
      skills: [
        {
          skillName: "",
          skillLevel: "",
        },
      ],
      languages: [
        {
          languageName: "",
          languageLevel: "",
        },
      ],
    },
  });

  const getCurrentResumeComponent = () => {
    switch (activeStep) {
      case 0:
        return <ResumePersonal />;
      case 1:
        return (
          <>
            <ResumeEducation />
            <ResumeExperience />
            <ResumeProjects />
            <ResumeSkills />
            <ResumeLanguages />
          </>
        );
      case 2:
        return <ResumeExample />;
      // return <Template />;

      default:
        break;
    }
  };

  return (
    <FormProvider {...formControl}>
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
    </FormProvider>
  );
}
export default Resume;
