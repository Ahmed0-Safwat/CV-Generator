import "./style.scss";
import { Stack, Typography } from "@mui/material";
import WexcuteCard from "../../Common/Card/WexcuteCard";

const OurExpertiesCards = [
  {
    cardIcon: "./images/quality-icon.svg",
    cardText: "Reliable digital solutions that exceed expectations.",
    cardTitle: "Quality",
  },
  {
    cardIcon: "./images/collaboration-icon.svg",
    cardText: `We align solutions with clients' goals, fostering partnerships for results.`,
    cardTitle: "Collaboration",
  },
  {
    cardIcon: "./images/innovation-icon.svg",
    cardText: "We stay ahead of trends and harness tech to drive growth.",
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
            WeXcute is a team of passionate software engineers who are dedicated
            to creating smart solutions that help businesses thrive in the
            digital world. We provide personalized, cutting-edge digital product
            development services to businesses of all sizes.
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
            <WexcuteCard
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
