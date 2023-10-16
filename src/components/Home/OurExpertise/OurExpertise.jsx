import "./style.scss";
import { Stack, Typography } from "@mui/material";
import WexcuteCard from "../../Common/Card/WexcuteCard";

const SERVICES_CARDS = [
  {
    cardIcon: "./images/web-design-icon.svg",
    cardText: `We craft captivating and user-friendly CVs that impress.`,
    cardTitle: "CV Design",
  },
  {
    cardIcon: "/images/mobile-app-icon.svg",
    cardText: `We design mobile-friendly CVs that capture attention.`,
    cardTitle: "Mobile Applications",
  },
  {
    cardIcon: "/images/web-games-icon.svg",
    cardText: `We design compelling resume templates that enhance your CV.`,
    cardTitle: "Resume Templates",
  },
  {
    cardIcon: "/images/web-app-icon.svg",
    cardText: "We create personalized CVs that stand out.",
    cardTitle: "CV Maker",
  },
  {
    cardIcon: "/images/modules-icon.svg",
    cardText: "We provide tips and tools to enhance your CV.",
    cardTitle: "Skills Enhancement",
  },
  {
    cardIcon: "/images/consulting-icon.svg",
    cardText: `We offer consultation to maximize your professional potential.`,
    cardTitle: "Career Advice",
  },
];

const OurExpertise = () => {
  return (
    <Stack
      className="section-container"
      direction={{ xs: "column", lg: "row" }}
    >
      <Stack
        className="section-content"
        direction={{ xs: "column", lg: "row" }}
        spacing={6}
      >
        <Stack
          direction="column"
          spacing={2}
          alignItems={{ xs: "flex-start", lg: "center" }}
          justifyContent={"center"}
          maxWidth={{ xs: "100%", lg: "450px" }}
        >
          <Typography
            fontSize="64px"
            fontWeight={700}
            lineHeight="80px"
            className="services-header"
            width="100%"
            maxWidth={{ xs: "445px", lg: "345px" }}
            alignSelf="flex-start"
          >
            Our Expertise
          </Typography>

          <Typography
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
            width="100%"
          >
            CV Creator provides a wide range of CV-building solutions for
            professionals at all career stages. Explore our services to discover
            how we can help you succeed in your job search.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          <Stack direction="column" spacing={3} justifyContent="center">
            {SERVICES_CARDS.map(
              (card, index) =>
                index < Math.ceil(SERVICES_CARDS.length / 2) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                  />
                )
            )}
          </Stack>
          <Stack
            sx={{ mt: { xs: "0px", md: "128px !important" } }}
            direction="column"
            spacing={3}
            justifyContent="center"
          >
            {SERVICES_CARDS.map(
              (card, index) =>
                index >= Math.ceil(SERVICES_CARDS.length / 2) && (
                  <WexcuteCard
                    icon={card.cardIcon}
                    title={card.cardTitle}
                    body={card.cardText}
                    key={index}
                  />
                )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OurExpertise;
