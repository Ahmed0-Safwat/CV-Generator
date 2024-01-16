import Hero from "../../components/Resume/Hero/Hero";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import ImagesCarousel from "../../components/Common/ImagesCarousel/ImagesCarousel";
import { useStore } from "../../hooks/useStore";
import shallow from "zustand/shallow";
import ResumePersonal from "../../components/Resume/ResumeForm/ResumePersonal";
import ResumeSkills from "../../components/Resume/ResumeForm/ResumeSkills";
import ResumeReferences from "../../components/Resume/ResumeForm/ResumeReferences";
import ResumeExperience from "../../components/Resume/ResumeForm/ResumeExperience";
import ResumeButtons from "../../components/Resume/ResumeForm/ResumeButtons";
import ResumeEducation from "../../components/Resume/ResumeForm/ResumeEducation";
import ResumeLanguages from "../../components/Resume/ResumeForm/ResumeLanguages";
import ResumeExample1 from "../../components/Resume/ResumeForm/ResumeExample1";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ResumeExample2 from "../../components/Resume/ResumeForm/ResumeExample2";
import Template from "../../components/Resume/Template/Template";
import { useEffect } from "react";
import AcademicEducation from "../../components/Resume/Template/ResumeAcademicEducation";
import ResumeAcademicPersonalInfo from "../../components/Resume/Template/ResumeAcademicPersonalInfo";
import AcademicExperience from "../../components/Resume/Template/ResumeAcademicExperience";
import AcademicReferences from "../../components/Resume/Template/ResumeAcademicReferences";
import ResumeAcademicInterests from "../../components/Resume/Template/ResumeAcademicInterests";
import ResumeAcademicPublications from "../../components/Resume/Template/ResumeAcademicPublications";
import ResumeAcademicCertificates from "../../components/Resume/Template/ResumeAcademicCertificates";
import ResumeAcademicTeaching from "../../components/Resume/Template/ResumeAcademicTeaching";
import ResumeAcademicCourses from "../../components/Resume/Template/ResumeAcademicCourses";

const projectsSectionCards = [
  {
    id: 1,
    source: "/images/temp 1.png",
    title: "First Template",
  },
  {
    id: 2,
    source: "/images/temp 2.jpg",
    title: "Second Template",
  },
  {
    id: 3,
    source: "/images/temp 3.jpg",
    title: "Third Template",
  },
  {
    id: 1,
    source: "/images/temp 1.png",
    title: "First Template",
  },
  {
    id: 2,
    source: "/images/temp 2.jpg",
    title: "Second Template",
  },
];

function Resume() {
  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );

  const { shouldShowStepper, activeStep, selectedCV } = globalState;

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

  const academicSchema = Yup.object().shape({
    personalInfo: Yup.array().of(
      Yup.object().shape({
        academicrank: Yup.string().nullable(),
        department: Yup.string().nullable(),
        specialization: Yup.string().nullable(),
        googlescholar: Yup.string().nullable(),
        researchgate: Yup.string().nullable(),
        orcidrecord: Yup.string().nullable(),
        scopusid: Yup.string().nullable(),
      })
    ),
    education: Yup.array().of(
      Yup.object().shape({
        degree: Yup.string().required("Degree is required"),
        discipline: Yup.string().required("Discipline is required"),
        institution: Yup.string().required("Institution is required"),
        year: Yup.string().required("Year is required"),
      })
    ),
    experience: Yup.array().of(
      Yup.object().shape({
        institution: Yup.string().required("Institution is required"),
        rank: Yup.string().required("Rank is required"),
        year: Yup.string().required("Year is required"),
      })
    ),
    researchInterests: Yup.array().of(
      Yup.object().shape({
        researchinterest: Yup.string().nullable(),
      })
    ),
    publications: Yup.array().of(
      Yup.object().shape({
        description: Yup.string().nullable(),
      })
    ),
    certificates: Yup.array().of(
      Yup.object().shape({
        description: Yup.string().nullable(),
        startdate: Yup.string().nullable(),
        enddate: Yup.string().nullable(),
      })
    ),
    teachingExp: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        startdate: Yup.string().nullable(),
        enddate: Yup.string().nullable(),
      })
    ),
    courses: Yup.array().of(
      Yup.object().shape({
        courses: Yup.string().required("Courses is required"),
      })
    ),
  });

  const otherSchema = Yup.object().shape({
    education: Yup.array().of(
      Yup.object().shape({
        university: Yup.string().required("University is required"),
        department: Yup.string().required("Department is required"),
        startdate: Yup.string().required("Start date is required"),
        enddate: Yup.string().required("End date is required"),
      })
    ),
    experience: Yup.array().of(
      Yup.object().shape({
        jobTitle: Yup.string().required("Job title is required"),
        company: Yup.string().required("Company is required"),
        location: Yup.string().required("Location is required"),
        startdate: Yup.string().required("Start date is required"),
        enddate: Yup.string().required("End date is required"),
        description: Yup.string().required("Description is required"),
      })
    ),
    references: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Email must be a valid email address")
          .required("Email is required"),
        phone: Yup.string().required("Phone number is required"),
        jobTitle: Yup.string().required("Job Title is required"),
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

  function getDefaultFormValues(selectedCVId) {
    return {
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        img: null,
        jobTitle: "",
        aboutMe: "",
      },

      ...(selectedCVId === 1 && {
        education: [{ degree: "", discipline: "", institution: "", year: "" }],
      }),
      ...(selectedCVId === 3 && {
        education: [
          { university: "", department: "", startdate: "", enddate: "" },
        ],
      }),

      ...(selectedCVId === 1 && {
        experience: [{ institution: "", rank: "", year: "" }],
      }),
      ...(selectedCVId === 3 && {
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
      }),
      ...((selectedCVId === 3 || selectedCVId === 1) && {
        references: [{ name: "", email: "", phone: "", jobTitle: "" }],
      }),
      ...(selectedCVId !== 1 && {
        skills: [{ skillName: "", skillLevel: "" }],
      }),
      ...(selectedCVId !== 1 && {
        languages: [{ languageName: "", languageLevel: "" }],
      }),
      ...(selectedCVId === 1 && {
        personalInfo: [
          {
            academicrank: "",
            department: "",
            specialization: "",
            googlescholar: "",
            researchgate: "",
            orcidrecord: "",
            scopusid: "",
          },
        ],
      }),
      ...(selectedCVId === 1 && {
        researchInterests: [{ researchinterest: "" }],
      }),
      ...(selectedCVId === 1 && {
        publications: [{ description: "" }],
      }),
      ...(selectedCVId === 1 && {
        certificates: [{ description: "", startdate: "", enddate: "" }],
      }),
      ...(selectedCVId === 1 && {
        teachingExp: [
          { title: "", description: "", startdate: "", enddate: "" },
        ],
      }),
      ...(selectedCVId === 1 && {
        courses: [{ courses: "" }],
      }),
    };
  }

  const [formDefaultValues, setFormDefaultValues] = React.useState(
    getDefaultFormValues(selectedCV?.id || 1)
  );

  useEffect(() => {
    formControl.reset(getDefaultFormValues(selectedCV?.id || 1));
    setFormDefaultValues(getDefaultFormValues(selectedCV?.id || 1));
  }, [selectedCV?.id]);

  const currentSchema =
    activeStep === 0
      ? personalSchema
      : activeStep === 1 && selectedCV?.id === 1
      ? academicSchema
      : otherSchema;

  const formControl = useForm({
    resolver: yupResolver(currentSchema),
    defaultValues: formDefaultValues,
  });

  useEffect(() => {
    useStore.setState({
      globalState: {
        ...useStore.getState().globalState,
        activeStep: 0,
        shouldShowStepper: false,
      },
    });
  }, []);

  const getCurrentResumeComponent = () => {
    switch (activeStep) {
      case 0:
        return <ResumePersonal />;
      case 1:
        return selectedCV.id === 1 ? (
          <>
            <ResumeAcademicPersonalInfo />
            <AcademicEducation />
            <AcademicExperience />
            <ResumeAcademicInterests />
            <ResumeAcademicPublications />
            <ResumeAcademicCertificates />
            <ResumeAcademicTeaching />
            <ResumeAcademicCourses />
            <AcademicReferences />
          </>
        ) : (
          <>
            <ResumeEducation />
            <ResumeExperience />
            {selectedCV.id === 3 && <ResumeReferences />}
            <ResumeSkills />
            <ResumeLanguages />
          </>
        );
      case 2:
        if (globalState.selectedCV.id === 2) {
          return <ResumeExample1 />;
        }
        if (globalState.selectedCV.id === 3) {
          return <ResumeExample2 />;
        }

        return <Template />;

      default:
        return <ResumePersonal />;
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
