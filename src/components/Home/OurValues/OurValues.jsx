import "./style.scss";
import { Stack, Typography } from "@mui/material";
import Card from "../../Common/Card/Card";

const OurExpertiesCards = [
  {
    cardIcon: "./images/quality-icon.svg",
    cardText: "Reliable CV solutions that exceed expectations.",
    cardTitle: "Quality",
  },
  {
    cardIcon: "./images/collaboration-icon.svg",
    cardText: `We align solutions with clients' career goals, fostering partnerships for results.`,
    cardTitle: "Collaboration",
  },
  {
    cardIcon: "./images/innovation-icon.svg",
    cardText: "We stay ahead of trends and harness tech to advance your CV.",
    cardTitle: "Innovation",
  },
  {
    cardIcon: "./images/integrity-icon.svg",
    cardText: "We uphold transparency, ethics, and client satisfaction.",
    cardTitle: "Integrity",
  },
];

const OurExperties = () => {
  return (
    <Stack className="section-container" alignItems={"center"}>
      <Stack
        alignItems={"center"}
        spacing={{ xs: 5, lg: 6 }}
        className="section-content"
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          alignItems={"flex-start"}
          width="100%"
          justifyContent={"center"}
        >
          <Typography
            fontSize="64px"
            fontWeight={700}
            lineHeight="80px"
            width="100%"
            maxWidth={{ xs: "100%", lg: "300px" }}
            className="values-title"
          >
            Our Values
          </Typography>

          <Typography
            maxWidth="895px"
            width="100%"
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
          >
            Your CV is your professional story, and we are here to help you
            craft it into a compelling narrative. CV Creator is a team of
            experts dedicated to providing you with personalized CV creation
            services tailored to your unique career journey.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent={{ sm: "center", md: "flex-start", lg: "center" }}
          flexWrap="wrap"
          useFlexGap
        >
          {OurExpertiesCards.map((card) => (
            <Card
              key={card.cardTitle}
              icon={card.cardIcon}
              title={card.cardTitle}
              body={card.cardText}
              width="266px"
              height="226px"
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurExperties;
