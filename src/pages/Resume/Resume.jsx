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
import ResumeExample1 from "../../components/Resume/ResumeForm/ResumeExample1";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const projectsSectionCards = [
  {
    id: 1,
    source: "/images/temp 1.png",
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
    source: "/images/temp 3.jpg",
    title: "What’s On?",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 4,
    source: "/images/temp 1.png",
    title: "What’s On?",
    subtitle: "Design, Mobile App, Web",
  },
  {
    id: 5,
    source: "/images/temp 2.jpg",
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

  const personalSchema = Yup.object().shape({
    personal: Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Email must be a valid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      img: Yup.mixed().required("Image is required"),
      jobTitle: Yup.string().required("Job Title is required"),
      aboutMe: Yup.string().required("About Me is required"),
    }),
  });

  const otherSchema = Yup.object().shape({
    education: Yup.array().of(
      Yup.object().shape({
        university: Yup.string().required("University is required"),
        department: Yup.string().required("Department is required"),
        startdate: Yup.date().required("Start date is required"),
        enddate: Yup.date().required("End date is required"),
      })
    ),
    experience: Yup.array().of(
      Yup.object().shape({
        jobTitle: Yup.string().required("Job title is required"),
        company: Yup.string().required("Company is required"),
        location: Yup.string().required("Location is required"),
        startdate: Yup.date().required("Start date is required"),
        enddate: Yup.date().required("End date is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
    project: Yup.array().of(
      Yup.object().shape({
        projectname: Yup.string().required("Project name is required"),
        projectlink: Yup.string().required("Project link is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
    skills: Yup.array().of(
      Yup.object().shape({
        skillName: Yup.string().required("Skill name is required"),
        skillLevel: Yup.string().required("Skill level is required"),
      })
    ),
    languages: Yup.array().of(
      Yup.object().shape({
        languageName: Yup.string().required("Language name is required"),
        languageLevel: Yup.string().required("Language level is required"),
      })
    ),
  });

  const currentSchema = activeStep === 0 ? personalSchema : otherSchema;

  const formControl = useForm({
    resolver: yupResolver(currentSchema),

    defaultValues: {
      personal: {
        firstName: "",
        jobTitle: "",
        aboutMe: "",
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
        return <ResumeExample1 />;
      // return <ResumeExample4 />;
      // return <ResumeExample3 />;
      // return <ResumeExample2 />;
      // return <ResumeExample1 />;
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
