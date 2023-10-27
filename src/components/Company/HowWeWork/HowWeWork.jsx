import { Stack, Typography } from "@mui/material";
import "./style.scss";
import React from "react";
import Card from "../../Common/Card/Card";

const HowWeWorkCards = [
  {
    cardIcon: "/images/consultation-icon.svg",
    cardText: `Start your journey with a consultation to discuss your project goals and expectations. We'll work with you to understand your business and create a tailored digital solution.`,
    cardTitle: "Initial Consultation",
  },
  {
    cardIcon: "/images/project-proposal-icon.svg",
    cardText: `Based on our initial consultation, we'll create a comprehensive project proposal that outlines the scope, timeline, and costs. Once we've agreed on the details, we'll sign a contract and begin developing your digital solution.`,
    cardTitle: "Project Proposal & Agreement",
  },
  {
    cardIcon: "/images/discovery-icon.svg",
    cardText: `We'll work with you to develop a strategic plan for your digital product development process, ensuring your solution meets your business objectives and user needs.`,
    cardTitle: "Discovery & Strategy",
  },
  {
    cardIcon: "/images/design-icon.svg",
    cardText: `We create a visually appealing and user-friendly interface for your digital product. We'll gather feedback and refine the design until you're satisfied.`,
    cardTitle: "Design & Prototyping",
  },
  {
    cardIcon: "/images/development-icon.svg",
    cardText:
      "Before launching your digital product, we perform a rigorous quality assurance process to ensure a polished and reliable final product.",
    cardTitle: "Development & Testing",
  },
  {
    cardIcon: "/images/deployment-icon.svg",
    cardText:
      "We deploy your digital solution and assist in its launch, ensuring a smooth transition and providing guidance on management.",
    cardTitle: "Deployment & Launch",
  },
  {
    cardIcon: "/images/support-icon.svg",
    cardText:
      "We offer ongoing support and maintenance to keep your digital solutions performing at their best. Contact us today to start your journey towards digital success.",
    cardTitle: "Ongoing Support & Maintenance",
  },
];

const HowWeWork = () => {
  return (
    <Stack className="section-container">
      <Stack
        alignItems={"center"}
        spacing={{ xs: 5, lg: "112px" }}
        className="section-content"
        padding={0}
        paddingBottom={2}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems={"flex-start"}
          width="100%"
          justifyContent={"center"}
          spacing={2}
          px={4}
        >
          <Typography
            fontSize={{ xs: "48px", lg: "64px" }}
            fontWeight={700}
            lineHeight="80px"
            width="100%"
            maxWidth={{ xs: "100%", lg: "282px" }}
            className="how-we-work-title"
          >
            How we Work ?
          </Typography>

          <Typography
            maxWidth="893px"
            width="100%"
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
          >
            WeXcute's customer-centric approach delivers exceptional digital
            solutions through a detailed work process rooted in software
            engineering best practices. We foster collaborative partnerships and
            go above and beyond to provide a seamless experience.
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          justifyContent={{ xs: "center", md: "flex-start" }}
          flexWrap="wrap"
          useFlexGap
        >
          {HowWeWorkCards.map((card, index) => (
            <Card
              key={index}
              icon={card.cardIcon}
              title={card.cardTitle}
              body={card.cardText}
              width="100%"
              align="start"
              justify="start"
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HowWeWork;
