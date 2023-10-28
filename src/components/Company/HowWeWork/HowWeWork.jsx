import { Stack, Typography } from "@mui/material";
import "./style.scss";
import React from "react";
import Card from "../../Common/Card/Card";

const HowWeWorkCards = [
  {
    cardIcon: "/images/consultation-icon.svg",
    cardText: `Begin your CV creation journey with a consultation to discuss your goals and expectations. We'll work with you to understand your background and career aspirations, ensuring your CV meets your needs. `,
    cardTitle: "Initial Consultation",
  },
  {
    cardIcon: "/images/project-proposal-icon.svg",
    cardText: `Based on our initial consultation, we'll create a comprehensive CV draft that outlines your skills, experiences, and achievements. We'll collaborate with you to refine and tailor the content to match your career goals.`,
    cardTitle: "CV Crafting & Review",
  },
  {
    cardIcon: "/images/discovery-icon.svg",
    cardText: `We'll focus on creating a visually appealing and effective CV format. We'll gather feedback and make revisions until you're satisfied with the design`,
    cardTitle: "Design & Formatting",
  },
  {
    cardIcon: "/images/design-icon.svg",
    cardText: `Before finalizing your CV, we perform a thorough editing and proofreading process to ensure accuracy and professionalism.`,
    cardTitle: "Editing & Proofreading",
  },
  {
    cardIcon: "/images/deployment-icon.svg",
    cardText:
      "We'll deliver your polished CV, and you can review it to ensure it meets your expectations.",
    cardTitle: "Delivery & Review",
  },
  {
    cardIcon: "/images/support-icon.svg",
    cardText:
      "We offer ongoing support and updates to keep your CV up-to-date and effective in your job search. Contact us today to start creating your standout CV.",
    cardTitle: "Ongoing Support",
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
            Our user-centric approach ensures exceptional CV solutions through a
            detailed process rooted in industry best practices. We prioritize
            collaboration and go the extra mile to deliver a seamless experience
            for our users.
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
