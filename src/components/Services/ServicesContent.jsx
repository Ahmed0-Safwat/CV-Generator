import "./style.scss";
import React from "react";
import { Stack, Typography } from "@mui/material";

const SERVICES_CARDS = [
  {
    icon: "/images/web-design-icon.svg",
    text: `We create stunning and user-friendly websites that convert.`,
    title: "Web Design",
  },
  {
    icon: "/images/web-app-icon.svg",
    text: "We develop custom web apps that streamline your business.",
    title: "Web Applications",
  },
  {
    icon: "/images/mobile-app-icon.svg",
    text: `We build engaging mobile apps that capture attention.`,
    title: "Mobile Applications",
  },

  {
    icon: "/images/modules-icon.svg",
    text: "We develop custom extensions that enhance digital products.",
    title: "Modules/Addons",
  },
  {
    icon: "/images/web-games-icon.svg",
    text: `We create captivating web games that engage and entertain.`,
    title: "Web Games",
  },
  {
    icon: "/images/consulting-icon.svg",
    text: `We help you maximize your digital potential through consultation`,
    title: "Consulting & Advisory",
  },
  {
    icon: "/images/vr-icon.svg",
    text: "Captivating VR solutions for training, marketing, and entertainment.",
    title: "VR Solutions",
  },
];

const ServicesContent = () => {
  const BackgroundImageUrl = "/images/expertise-deminsions-bg.png";

  return (
    <Stack className="section-container">
      <Stack
        className="section-content"
        id="services-page-expertise-section"
        spacing={"100px"}
        padding={0}
        paddingBottom={2}
      >
        <Stack
          pt="100px"
          maxWidth="1200px"
          direction={{ xs: "column", lg: "row" }}
          alignItems={{ xs: "flex-start", lg: "center" }}
          width="100%"
          spacing={{ xs: 2, lg: "105px" }}
          px={4}
        >
          <Typography
            fontSize={{ xs: "48px", lg: "64px" }}
            fontWeight={700}
            lineHeight="80px"
            className="services-expertise-header"
            width="100%"
            maxWidth={{ xs: "100%", lg: "306px" }}
            alignSelf="flex-start"
          >
            Our Expertise
          </Typography>

          <Typography
            fontSize="24px"
            fontWeight={400}
            lineHeight="38px"
            width="100%"
            maxWidth={{ xs: "100%", lg: "791px" }}
            color="#232932"
          >
            At WeXcute, we offer a wide range of software development and app
            solutions, catering to the unique needs of startups, SMEs, and large
            corporations. Explore our comprehensive services below to discover
            how we can help your business thrive in the digital landscape.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={3}
          width="100%"
          className="solutions-section-wrapper"
          alignItems="center"
        >
          <Stack
            spacing={3}
            maxWidth="794px"
            width="100%"
            alignItems={{ xs: "center", lg: "flex-start" }}
          >
            <Stack
              maxWidth={{ xs: "383px", lg: "792px" }}
              width="100%"
              direction={{ xs: "column", lg: "row" }}
              sx={{
                padding: "24px",
                border: "1px solid #DFE6F0",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
              spacing={2}
            >
              <Stack
                maxWidth="360px"
                sx={{ borderRadius: "20px", overflow: "hidden" }}
                width="100%"
                alignItems="center"
              >
                <img
                  src={"/images/start-up-solution-image.png"}
                  alt={"photo"}
                  width={360}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Stack>

              <Stack
                maxWidth="364px"
                width="100%"
                spacing="30px"
                textAlign="left"
              >
                <Typography
                  fontSize="32px"
                  fontWeight={700}
                  lineHeight="50px"
                  width="100%"
                >
                  Startup Solutions
                </Typography>

                <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="30px"
                  width="100%"
                >
                  Transform your vision into reality with our tailored startup
                  solutions. Our experienced team will guide you through every
                  step of the digital product development process, ensuring your
                  business hits the ground running.
                </Typography>
              </Stack>
            </Stack>

            <Stack
              maxWidth={{ xs: "383px", lg: "792px" }}
              width="100%"
              direction={{ xs: "column", lg: "row" }}
              sx={{
                padding: "24px",
                border: "1px solid #DFE6F0",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
              spacing={2}
            >
              <Stack
                maxWidth="360px"
                sx={{ borderRadius: "20px", overflow: "hidden" }}
                width="100%"
                alignItems="center"
              >
                <img
                  src={"/images/corporate-solution-image.png"}
                  alt={"photo"}
                  width={360}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Stack>

              <Stack maxWidth="364px" width="100%" spacing="30px">
                <Typography
                  fontSize="32px"
                  fontWeight={700}
                  lineHeight="50px"
                  maxWidth="330px"
                  width="100%"
                >
                  Corporate Solutions
                </Typography>

                <Typography
                  fontSize="16px"
                  fontWeight={400}
                  lineHeight="30px"
                  width="100%"
                >
                  Empower your business with our custom corporate solutions. We
                  offer smart IT solutions that streamline your operations,
                  enhance productivity, and strengthen your digital
                  infrastructure, enabling your organisations to scale with
                  ease.
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack
            maxWidth="383px"
            width="100%"
            direction="column"
            sx={{
              paddingX: "24px",
              paddingY: "32px",
              border: "1px solid #DFE6F0",
              borderRadius: "20px",
              backgroundColor: "white",
            }}
            spacing={2}
          >
            <Stack
              maxWidth="335px"
              sx={{ borderRadius: "20px", overflow: "hidden" }}
              alignItems="center"
              width="100%"
            >
              <img
                src={"/images/app-development-image.png"}
                alt={"photo"}
                width={335}
                height={412}
                style={{
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </Stack>

            <Stack maxWidth="345px" width="100%" spacing="30px">
              <Typography
                fontSize="32px"
                fontWeight={700}
                lineHeight="50px"
                maxWidth="330px"
                width="100%"
              >
                App Development
              </Typography>

              <Typography fontSize="16px" fontWeight={400} lineHeight="30px">
                Stay ahead with our app development services. We create
                seamless, user-friendly experiences that drive engagement and
                boost your digital presence.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          className="expertise-dimensions-wrapper"
          direction="row"
          maxWidth="1200px"
          flexWrap="wrap"
          sx={{
            paddingX: "40px",
            paddingTop: "64px",
            paddingBottom: "80px",
            backgroundImage: `url(${BackgroundImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "16px",
            alignItems: "center",
            justifyContent: { xs: "center", lg: "start" },
            gap: "48px",
          }}
        >
          <Stack maxWidth="340px" width="100%">
            <Typography
              className="expertise-dimensions-title"
              fontWeight={700}
              fontSize="48px"
              lineHeight="56px"
              sx={{ width: "100%", maxWidth: "308px" }}
            >
              Expertise Dimensions
            </Typography>
          </Stack>

          {SERVICES_CARDS.map((card) => (
            <Stack
              key={card.id}
              maxWidth="340px"
              width="100%"
              direction="row"
              alignItems="flex-start"
              spacing="20px"
            >
              <img src={card.icon} alt={"icon"} width="70" height="64" />
              <Stack spacing={2}>
                <Typography
                  fontSize="20px"
                  fontWeight={600}
                  lineHeight="24px"
                  color="#232932"
                >
                  {card.title}
                </Typography>
                <Typography
                  fontSize="14px"
                  fontWeight={400}
                  lineHeight="24px"
                  color="#232932"
                >
                  {card.text}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ServicesContent;
