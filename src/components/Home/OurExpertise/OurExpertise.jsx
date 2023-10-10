import "./style.scss";
import { Stack, Typography } from "@mui/material";
import WexcuteCard from "../../Common/Card/WexcuteCard";

const SERVICES_CARDS = [
  {
    cardIcon: "./images/web-design-icon.svg",
    cardText: `We create stunning and user-friendly websites that convert.`,
    cardTitle: "Web Design",
  },
  {
    cardIcon: "/images/mobile-app-icon.svg",
    cardText: `We build engaging mobile apps that capture attention.`,
    cardTitle: "Mobile Applications",
  },
  {
    cardIcon: "/images/web-games-icon.svg",
    cardText: `We create captivating web games that engage and entertain.`,
    cardTitle: "Web Games",
  },
  {
    cardIcon: "/images/web-app-icon.svg",
    cardText: "We develop custom web apps that streamline your business.",
    cardTitle: "Web Applications",
  },
  {
    cardIcon: "/images/modules-icon.svg",
    cardText: "We develop custom extensions that enhance digital products.",
    cardTitle: "Modules/Addons",
  },
  {
    cardIcon: "/images/consulting-icon.svg",
    cardText: `We help you maximize your digital potential through consultation`,
    cardTitle: "Consulting & Advisory",
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
            WeXcute offers a wide range of software development and app
            solutions for startups, SMEs, and large corporations. Explore our
            services to discover how we can help your business thrive in the
            digital landscape.
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
