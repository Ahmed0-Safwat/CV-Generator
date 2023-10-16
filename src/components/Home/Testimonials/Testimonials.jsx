import React from "react";
import "./style.scss";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Carousel from "react-material-ui-carousel";
import { Box, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const testimonialsCards = [
  {
    id: 1,
    cardTitle: "Web Design",
    cardSubtitle: "Startup (Small Business)",
    cardFooter: "Osama El-Mondy",
    cardSubfooter: "PumpTech",
    cardText: `As a startup, we needed a website that could showcase our unique
            products and services and help us stand out from the crowd. The
            team at Cv-Creator delivered just that! They designed an
            attractive, user-friendly website that perfectly represents our
            brand, and their attention to detail and support throughout the
            process was exceptional. We couldn't be happier with the
            results!`,
  },
  {
    id: 2,
    cardTitle: "Mobile App Development",
    cardSubtitle: "Medium Sized Company",
    cardFooter: "James Wilson",
    cardSubfooter: "Operations Manager, Baddel",
    cardText: `We approached WeXcute to develop a mobile app that would streamline our internal processes and improve communication across our teams. They listened to our needs and developed a custom app that exceeded our expectations. The app has significantly improved our operations, and we've received excellent feedback from our employees. We highly recommend WeXcute for app development projects!`,
  },
  {
    id: 3,
    cardTitle: "VR Solutions",
    cardSubtitle: "Large Corporation",
    cardFooter: "Sarah Patel",
    cardSubfooter: "Head of Innovation, Telecom Egypt",
    cardText: `Working with WeXcute on our virtual reality project was a game-changer for our company. Their team of experts developed an immersive and engaging VR experience that has transformed our training programs and allowed us to reach new levels of customer engagement. We are incredibly impressed with their professionalism and technical expertise, and we look forward to working with them on future projects!`,
  },
  {
    id: 4,
    cardTitle: "Consulting",
    cardSubtitle: "Large Corporation",
    cardFooter: "Sarah Patel",
    cardSubfooter: "Head of Innovation, Telecom Egypt",
    cardText: `We engaged WeXcute's consulting services to help us navigate the rapidly changing digital landscape and identify new opportunities for growth. Their strategic guidance, industry insights, and project management expertise were invaluable in helping us make informed decisions and implement effective digital solutions. We're grateful for their partnership and highly recommend their consulting services to other large corporations.`,
  },
];

const Testimonials = () => {
  const { isMobileView, isTabletView } = useWindowSize();
  return (
    <Stack
      spacing={5}
      bgcolor="primary.blue"
      paddingY={"80px"}
      width={"100%"}
      paddingX={"24px"}
    >
      <Stack alignItems="center" spacing={1}>
        <Typography variant="h4" color="neutral.main">
          Testimonials
        </Typography>
        <Typography className="content-subTitle" color="neutral.main">
          What our clients have to say about us.
        </Typography>
      </Stack>

      <Box>
        <Carousel
          navButtonsAlwaysVisible={
            !isMobileView && !isTabletView ? true : false
          }
          autoPlay={false}
          fullHeightHover={true}
          animation="slide"
          NextIcon={<PlayArrowIcon sx={{ color: "#F5F5F5" }} />}
          PrevIcon={
            <PlayArrowIcon
              sx={{ color: "#F5F5F5", transform: "rotate(180deg)" }}
            />
          }
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(35, 41, 50, 0.2)",
              borderRadius: 0,
              height: "80px",
              width: "48px",
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "translate(0, -50%)",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {},
          }}
          indicatorIconButtonProps={{
            style: {
              padding: "15px",
            },
          }}
        >
          {testimonialsCards.map((card) => (
            <TestimonialCard
              key={card.id}
              cardTitle={card.cardTitle}
              cardSubtitle={card.cardSubtitle}
              cardFooter={card.cardFooter}
              cardSubfooter={card.cardSubfooter}
              cardText={card.cardText}
            />
          ))}
        </Carousel>
      </Box>
    </Stack>
  );
};

export default Testimonials;
