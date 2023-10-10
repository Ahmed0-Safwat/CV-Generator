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
    cardTitle: "Discover",
    cardText:
      "We dive deep into understanding your business goals, target audience, and market landscape to create a tailored strategy. By closely collaborating with you, we ensure our solutions align with your vision and objectives, positioning your business for success.",
  },
  {
    id: 2,
    cardTitle: "Design",
    isReversed: true,
    cardTitleNumber: "STEP 2",
    cardText: `Our team of engineers crafts a visually appealing and user-friendly interface for your digital product. We focus on creating an engaging experience that reflects your brand's identity and caters to your users' needs, resulting in increased customer satisfaction and loyalty.`,
  },
  {
    id: 3,
    cardTitle: "Develop",
    isReversed: false,
    cardTitleNumber: "STEP 3",
    cardText:
      "We bring your vision to life with robust software development and mobile app development services. Utilising agile methodologies and the latest technologies, we ensure efficient and iterative progress throughout the project, allowing us to adapt to changing requirements and deliver exceptional results.",
  },
  {
    id: 4,
    cardTitle: "Deliver",
    isReversed: true,
    cardTitleNumber: "STEP 4",
    cardText:
      "Our meticulous quality assurance process ensures a polished final product, ready for launch. We provide ongoing support, maintenance, and updates to keep your digital solutions up-to-date, secure, and optimised for peak performance.",
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
              How it works?
            </Typography>

            <Typography
              align="center"
              className="how-it-works-subtitle"
              fontSize="24px"
              fontWeight={400}
              lineHeight="32px"
            >
              Our <strong>4D</strong> digital product development process
              guarantees success.
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
