import "./style.scss";
import { Stack, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { useWindowSize } from "../../../hooks/useWindowSize";

const HowItWorksCards = [
  {
    id: 1,
    isReversed: false,
    cardTitleNumber: "STEP 1",
    cardTitle: "Explore",
    cardText:
      "We explore your background and career goals, aligning our tools to your needs for effective, tailored solutions.",
  },
  {
    id: 2,
    cardTitle: "Design",
    isReversed: true,
    cardTitleNumber: "STEP 2",
    cardText: `Our team creates visually appealing, user-friendly templates that reflect your professional brand.`,
  },
  {
    id: 3,
    cardTitle: "Build",
    isReversed: false,
    cardTitleNumber: "STEP 3",
    cardText:
      "We bring your CV to life with agile development, using the latest technologies to deliver exceptional results.",
  },
  {
    id: 4,
    cardTitle: "Deliver",
    isReversed: true,
    cardTitleNumber: "STEP 4",
    cardText:
      "We provide polished digital resumes with meticulous quality assurance, ongoing support, and updates.",
  },
];

const BackgroundImageUrl = "/images/how-it-works-bg.png";

const HowItWorks = () => {
  const { isMobileView } = useWindowSize();
  const timelinePosition = isMobileView ? "right" : "alternate";

  return (
    <Stack className="section-container">
      <Stack
        spacing={6}
        justifyContent="center"
        alignItems="center"
        className="section-content"
      >
        <Stack
          sx={{
            backgroundImage: `url(${BackgroundImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "16px",
            py: "56px",
          }}
        >
          <Stack spacing={2} px={2}>
            <Typography
              align="center"
              fontSize="48px"
              lineHeight="52px"
              fontWeight={700}
              className="how-it-works-title"
            >
              How It Happens?
            </Typography>

            <Typography
              align="center"
              className="how-it-works-subtitle"
              fontSize="24px"
              fontWeight={400}
              lineHeight="32px"
            >
              Our <strong>4D</strong> Comprehensive CV Creation Process Ensures
              Your Success.
            </Typography>
          </Stack>

          <Timeline
            position={timelinePosition}
            sx={
              isMobileView
                ? {
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }
                : {}
            }
          >
            {HowItWorksCards.map((card) => (
              <TimelineItem key={card.id}>
                <TimelineSeparator>
                  <TimelineDot
                    variant="outlined"
                    sx={{
                      width: "24px",
                      height: "24px",
                      borderColor: "#5d6571",
                    }}
                  ></TimelineDot>
                  <TimelineConnector
                    sx={{
                      background: "transparent",
                      border: "1px dashed",
                      borderColor: "#5d6571",
                    }}
                  />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack spacing={1}>
                    <Typography
                      color="#000000"
                      align={
                        isMobileView
                          ? "left"
                          : card.isReversed
                          ? "right"
                          : "left"
                      }
                      fontWeight={400}
                      fontSize="14px"
                      lineHeight="22px"
                    >
                      {card.cardTitleNumber}
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize="24px"
                      lineHeight="22px"
                      align={
                        isMobileView
                          ? "left"
                          : card.isReversed
                          ? "right"
                          : "left"
                      }
                      color="#000000"
                    >
                      {card.cardTitle}
                    </Typography>
                    <Typography
                      fontSize="16px"
                      fontWeight={400}
                      lineHeight="22px"
                      align={
                        isMobileView
                          ? "left"
                          : card.isReversed
                          ? "right"
                          : "left"
                      }
                      color="#333333"
                    >
                      {card.cardText}
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HowItWorks;
