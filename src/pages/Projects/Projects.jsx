import React from "react";
import "./style.scss";
import ProjectsPage from "../../components/Projects/Projects";
import Card from "../../components/Projects/Projects";
import Hero from "../../components/Projects/Hero/Hero";

const Projects = () => {
  return (
    <>
      <Hero />

      <Card
        title={"From inspiration to innovation"}
        backgroundImageUrl={"/images/hero-image.png"}
        hasButton={false}
        CardHeight="632px"
      />
      <div className="projects-page-wrapper">
        <ProjectsPage />
      </div>
    </>
  );
};

export default Projects;
