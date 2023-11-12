import React from "react";
import "./style.scss";
import ProjectsCards from "../../components/Projects/Projects";
import Hero from "../../components/Projects/Hero/Hero";

const Projects = () => {
  return (
    <>
      <Hero />

      <ProjectsCards
        title={"From inspiration to innovation"}
        backgroundImageUrl={"/images/hero-image.png"}
        hasButton={false}
        CardHeight="632px"
      />
    </>
  );
};

export default Projects;
