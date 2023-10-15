import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";

const howWeWorkCards = [
  {
    id: 1,
    isStyled: true,
    isImageStyled: true,
    cardIcon: "/images/how-we-work-1.svg",
    cardTitle: "Initial Consultation",
    cardText: `Your journey with WeXcute begins with an initial consultation
          with our team of engineers and app developers. During this
          meeting, we discuss your project goals, requirements, and
          expectations. We take the time to understand your business,
          target audience, and market landscape, laying the groundwork for
          a tailored digital solution.`,
  },
  {
    id: 2,
    isStyled: false,
    isImageStyled: false,
    cardIcon: "/images/how-we-work-2.svg",
    cardTitle: "Project Proposal & Agreement",
    cardText: `Based on our initial consultation, our software development team
    creates a comprehensive project proposal that outlines the
    scope, timeline, and estimated costs. Once we've agreed on the
    project details, we sign a contract and begin the exciting
    process of bringing your digital vision to life.`,
  },
  {
    id: 3,
    isStyled: true,
    isImageStyled: true,
    cardIcon: "/images/how-we-work-3.svg",
    cardTitle: "Discovery & Strategy",
    cardText: `In this phase, we dive deeper into your project requirements and
          conduct thorough research on your industry, competitors, and
          target audience. We then develop a strategic plan that serves as
          a roadmap for your digital product development process, ensuring
          your solution meets your business objectives and user needs.`,
  },
  {
    id: 4,
    isStyled: false,
    isImageStyled: false,
    cardIcon: "/images/how-we-work-4.svg",
    cardTitle: "Design & Prototyping",
    cardText: `Our skilled designers craft a visually appealing and
          user-friendly interface for your digital product, whether it's a
          web application, game or mobile app development project. We
          create wireframes and mockups to visualize the user experience
          and gather feedback from you to refine the design. Once you're
          satisfied with the prototype, we move on to the development
          phase.`,
  },
  {
    id: 5,
    isStyled: true,
    isImageStyled: true,
    cardIcon: "/images/how-we-work-7.svg",
    cardTitle: "Development & Testing",
    cardText: `Before launching your digital product, we perform a rigorous
    quality assurance process that includes functionality,
    usability, and compatibility testing. This meticulous approach
    guarantees a polished and reliable final product, ready for
    deployment.`,
  },
  {
    id: 6,
    isStyled: false,
    isImageStyled: false,
    cardIcon: "/images/how-we-work-5.svg",
    cardTitle: "Deployment & Launch",
    cardText: `With your approval, we deploy your digital solution on the
          desired platform and assist in its launch. We ensure a smooth
          transition and provide guidance on managing your new digital
          product effectively.`,
  },
  {
    id: 7,
    isStyled: true,
    isImageStyled: true,
    cardIcon: "/images/how-we-work-6.svg",
    cardTitle: "Ongoing Support & Maintenance",
    cardText: `Our relationship doesn't end at launch. We offer ongoing support
    and maintenance services to keep your digital solutions
    up-to-date, secure, and optimised for peak performance. As your
    dedicated partner in smart IT solutions, we're committed to your
    long-term success and are here to assist you as your business
    grows and evolves. With our transparent, structured, and
    collaborative approach, WeXcute guarantees a smooth digital
    product development process and exceptional results that elevate
    your business. Reach out to us today to start your journey
    towards digital success.`,
  },
];

const HowWeWorkContent = () => {
  const { isMobileView } = useWindowSize();
  return (
    <Stack spacing={10} sx={{ maxWidth: 1200, width: "100%" }}>
      <Stack spacing={3} sx={{ padding: "0 24px" }}>
        <Typography variant="h4" align="center" fontWeight={500}>
          The Process - From Start to Finish
        </Typography>

        <Typography variant="body2" align="center">
          At WeXcute, our customer-centric approach ensures a seamless
          experience from the moment you reach out to us until your digital
          solution is launched and beyond. Our detailed work process, rooted in
          software engineering best practices, is designed to deliver
          exceptional results while fostering a collaborative partnership with
          you. We're proud of our 4D development process, but in the spirit of
          full transparency, we want you to know about the additional steps that
          make our process even more comprehensive. So, let's dive into the
          intricate stages of our workflow, where we leave no stone unturned.
        </Typography>
      </Stack>

      <Stack sx={{ padding: "0 24px" }}>
        {howWeWorkCards.map((card) => (
          <Card
            key={card.id}
            sx={{
              maxWidht: 1200,
              width: "100%",
              backgroundColor: card.isStyled ? "#F0F0F0" : "",
              borderRadius: "16px",
              minHeight: "244px",
              display: "flex",
              alignItems: "center",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Stack direction={isMobileView ? "column" : "row"} spacing={4}>
                <Stack
                  direction={
                    isMobileView
                      ? "column"
                      : card.isImageStyled
                      ? "row"
                      : "row-reverse"
                  }
                  alignItems="center"
                  justifyContent="space-around"
                  sx={{ maxWidht: 560, width: "100%" }}
                >
                  <Image
                    src={card.cardIcon}
                    alt="card image"
                    width={120}
                    height={120}
                  />
                  <Typography
                    variant="h5"
                    sx={{ color: "#E41469", maxWidth: "320px" }}
                    align="center"
                  >
                    {card.cardTitle}
                  </Typography>
                </Stack>

                <Stack
                  sx={{
                    maxWidht: 560,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Typography align="left" variant="body1">
                    {card.cardText}
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Stack sx={{ padding: "0 24px" }}>
        <Typography
          variant="body1"
          sx={{ color: "#E41469" }}
          align="center"
          fontWeight={500}
        >
          With our transparent, structured, and collaborative approach, WeXcute
          guarantees a smooth digital product development process and
          exceptional results that elevate your business. Reach out to us today
          to start your journey towards digital success.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HowWeWorkContent;
