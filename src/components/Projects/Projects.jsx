import React from "react";
import "./style.scss";
import { Stack, Typography } from "@mui/material";

const projectsCards = [
  {
    id: 2,
    isReversed: true,
    cardIcon: "/images/nissan.svg",
    cardTitle: "Nissan",
    cardSecondaryTitle: "Automobile Self-Service",
    cardTertiaryTitle: "Maintenance Tracking and Reminders",
    cardBackground: "#e0e0e0",
    cardSecondaryText: `Take control of your car's needs with self-service options, putting you in the driver's seat of your vehicle's care.`,
    cardTertiaryText:
      "Keep your Nissan running smoothly with automated maintenance tracking and timely reminders.",
    cardText: `Nissan's application has undergone a significant transformation from its previous, more traditional form, which was used by Nissan Egypt. The updated version introduces a range of brand-new functions, enhancing your experience with Nissan.`,
    innerText: "The car app that does it all.",
  },
  {
    id: 3,
    isReversed: false,
    cardIcon: "/images/whats-on-2.svg",
    cardTitle: "What’s On?",
    cardSecondaryTitle: "Complete Programming Schedules",
    cardTertiaryTitle: "Set Reminders",
    cardBackground: "#ffebee",
    cardSecondaryText:
      "Gain access to the complete programming schedules of various channels, ensuring you never miss a moment of your favorite shows.",
    cardTertiaryText:
      "Stay on top of your must-watch shows by setting reminders directly within the app. Never miss an episode again.",
    cardText: `The "What's On?" app is tailor-made for avid television viewers, especially those who indulge in entertainment networks. It offers a comprehensive suite of features to enhance your TV-watching experience.`,
    innerText: "The magic of movies, on the go.",
  },
  {
    id: 1,
    isReversed: false,
    cardIcon: "/images/lina-mockup-2.svg",
    cardTitle: "Lina",
    cardSecondaryTitle: "Job Offering and Searching Tool",
    cardTertiaryTitle: "Q&A Sessions",
    cardBackground: "#e0f2f1",
    cardSecondaryText:
      "Find job opportunities or post job listings, tailored to your needs and the local job market.",
    cardTertiaryText:
      "Join insightful Q&A sessions conducted by subject matter experts, expanding your knowledge and connecting with industry leaders.",
    cardText:
      "Lina is the first social networking application to come out of Egypt, specifically designed to cater to users in Egypt and the Middle East. It offers more than just a typical social media experience. With Lina, you can access a range of useful features.",
    innerText: "Connect with the world, one click.",
  },
  {
    id: 4,
    isReversed: true,
    cardIcon: "/images/jeep-new.png",
    cardTitle: "Jeep",
    cardSecondaryTitle: "Digital Transformation",
    cardTertiaryTitle: "Effortless Component Ordering",
    cardBackground: "#fffde7",
    cardSecondaryText:
      "Witness a full-fledged digital transformation within the Jeep service landscape in KSA. Our app brings innovation to the forefront.",
    cardTertiaryText: `Experience the convenience of ordering Jeep-specific components and accessories right from your mobile device. We've simplified the process of enhancing your Jeep.`,
    cardText: `At Wexcute, we're proud to present a remarkable project: the Jeep KSA Mobile App. This project redefines the Jeep experience in Saudi Arabia (KSA) by seamlessly merging technology and adventure. Explore the key highlights of this exceptional endeavor.`,
    innerText: "Jeep, at your fingertips.",
  },
  {
    id: 5,
    isReversed: false,
    cardIcon: "/images/we.svg",
    cardTitle: "Telecom Egypt",
    cardSecondaryTitle: "Streamlined SIM Card Issuance",
    cardTertiaryTitle: "Comprehensive Service Support",
    cardBackground: "#f3e5f5",
    cardSecondaryText:
      "Our web application simplifies the issuance of SIM cards. Customers can effortlessly complete the process using their IDs or passports, ensuring a seamless experience.",
    cardTertiaryText:
      "Beyond SIM card issuance, our application extends its capabilities to support a range of additional services, making it a versatile tool for both customers and Telecom Egypt.",
    cardText:
      "We are thrilled to spotlight one of our standout projects: the Telecom Egypt Web Application. This exceptional web application was meticulously crafted to enhance customer experiences at self-service kiosks within WE branches. Discover how it redefines convenience and service.",
    innerText: "Connect to what matters",
  },
  {
    id: 6,
    isReversed: true,
    cardIcon: "/images/baddel-mobile-2.svg",
    cardTitle: "Baddel",
    cardSecondaryTitle: "Unlock and Go",
    cardTertiaryTitle: "Account Management",
    cardBackground: "#e8f5e9",
    cardSecondaryText:
      "Our user-friendly application enables quick and easy bike and scooter rentals. With just a few taps, you can unlock your preferred mode of transport and embark on your journey.",
    cardTertiaryText:
      "Take control of your mobility experience. Manage your user account effortlessly, ensuring a smooth and personalized experience every time you ride.",
    cardText:
      "Baddel is a cutting-edge micro-mobility system that transforms city navigation. Rent regular bikes, electric bikes, and scooters from any station and return them to any other station in the network.",
    innerText: "Your Micro Mobility Solution",
  },
];

const ProjectsPage = () => {
  const innerBackgroundImageUrl = "/images/projects-card-inner-bg.png";

  return (
    <Stack className="section-container">
      <Stack className="section-content" spacing={7}>
        <Stack maxWidth="1200px" width="100%" className="projects-text-wrapper">
          <Typography fontSize="24px" fontWeight={400} lineHeight="46px">
            Our diverse portfolio showcases our expertise across various
            industries, highlighting our commitment to delivering exceptional
            results for businesses of all sizes. Explore our standout projects
            and see how we've transformed ideas into successful digital
            solutions.
          </Typography>
        </Stack>

        <Stack
          className="projects-cards-wrapper"
          maxWidth="1200px"
          width="100%"
          spacing={9}
        >
          {projectsCards.map((card) => (
            <Stack
              key={card.id}
              sx={{
                borderRadius: "20px",
                maxWidth: "1200px",
                width: "100%",
                padding: "32px",
                backgroundColor: `${card.cardBackground}`,
                justifyContent: "space-between",
              }}
              id={card.id}
              direction={{
                xs: "column-reverse",
                lg: card.isReversed ? "row" : "row-reverse",
              }}
              spacing={3}
            >
              <Stack
                sx={{ width: "100%", maxWidth: { xs: "100%", lg: "760px" } }}
                spacing={3}
              >
                <img
                  alt="image"
                  src={card.cardIcon}
                  width={750}
                  height={488}
                  style={{
                    borderRadius: "20px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={3}
                  width="100%"
                  justifyContent="space-between"
                >
                  <Stack maxWidth={{ xs: "100%", lg: "352px" }} width="100%">
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="38px"
                      sx={{ minHeight: { xs: "", lg: "76px" } }}
                    >
                      {card.cardSecondaryTitle}
                    </Typography>

                    <Typography
                      fontSize="20px"
                      fontWeight={400}
                      lineHeight="38px"
                    >
                      {card.cardSecondaryText}
                    </Typography>
                  </Stack>

                  <Stack maxWidth={{ xs: "100%", lg: "380px" }} width="100%">
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="38px"
                      sx={{ minHeight: { xs: "", lg: "76px" } }}
                    >
                      {card.cardTertiaryTitle}
                    </Typography>

                    <Typography
                      fontSize="20px"
                      fontWeight={400}
                      lineHeight="38px"
                    >
                      {card.cardTertiaryText}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                maxWidth={{ xs: "100%", lg: "368px" }}
                width="100%"
                spacing={8}
                justifyContent="flex-start"
              >
                <Stack spacing={2}>
                  <Typography
                    fontWeight={700}
                    fontSize="40px"
                    lineHeight="38px"
                  >
                    {card.cardTitle}
                  </Typography>

                  <Typography
                    fontWeight={400}
                    fontSize="20px"
                    lineHeight="38px"
                  >
                    {card.cardText}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    backgroundImage: `url(${innerBackgroundImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    alignItems: "center",
                    height: 364,
                    justifyContent: "center",
                    borderRadius: "20px",
                    padding: "24px",
                    display: { xs: "none", lg: "flex" },
                  }}
                >
                  <Typography
                    fontSize="56px"
                    fontWeight={300}
                    lineHeight="64px"
                  >
                    <i>{card.innerText}</i>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectsPage;
