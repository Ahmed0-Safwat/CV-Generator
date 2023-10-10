import { Button, Stack, Typography, Box } from "@mui/material";
import { useWindowSize } from "../../../hooks/useWindowSize";

const SecondComponent = () => {
  const { isMobileView, isTabletView } = useWindowSize();
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-between" },
          width: "100%",
          margin: "auto",
          maxWidth: "80%",
          gap: 3,
          paddingTop: 3,
        }}
      >
        <Stack
          spacing="10px"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
          }}
        >
          <Stack>
            <Typography
              variant="h4"
              gutterBottom
              textAlign={{ xs: "center", lg: "start" }}
            >
              Why CV is important ?
            </Typography>

            {isTabletView && !isMobileView && (
              <Box margin="auto">
                <img
                  style={{
                    borderRadius: "10px",
                    width: "520px",
                    height: "450px",
                  }}
                  src="/assets/selector.gif"
                  alt=""
                  srcSet=""
                />
              </Box>
            )}
          </Stack>

          <Stack
            width="100%"
            alignItems={{ xs: "center", lg: "flex-start" }}
            justifyContent="center"
            spacing={2}
          >
            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} A journey to join a company begins with a well-crafted
                CV, where every detail is thoughtfully arranged, and every piece
                of information is strategically presented. It is through this
                document that their capabilities and potential are showcased,
                leaving no doubt that they are the perfect fit for the
                organizations success.
              </Typography>
            </Stack>

            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} Embarking on the path to joining a company as an engineer
                requires more than just technical prowess. It starts with a
                meticulously constructed CV, where each aspect is thoughtfully
                arranged and every morsel of information is strategically
                conveyed. This document becomes a powerful testament to their
                skills, expertise, and unwavering commitment, leaving an
                indelible impression that they are the catalyst for the companys
                triumph and innovation.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {!isTabletView && (
          <Box>
            <img
              style={{
                borderRadius: "10px",
                width: "520px",
                height: "450px",
              }}
              src="/assets/New Searching Zoom GIF.gif"
              alt=""
              srcSet=""
            />
          </Box>
        )}
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-between" },
          width: "100%",
          margin: "auto",
          maxWidth: "80%",
          paddingY: 3,
          gap: 3,
        }}
      >
        <Stack>
          {!isTabletView && (
            <Box>
              <img
                style={{
                  borderRadius: "10px",
                }}
                src="/assets/Red Girl No Background.gif"
                alt=""
              />
            </Box>
          )}
        </Stack>

        <Stack
          spacing={2}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
          }}
        >
          <Stack alignItems="center" justifyContent="center">
            <Typography
              variant="h4"
              gutterBottom
              textAlign={{ xs: "center", lg: "center" }}
            >
              Why Skills is important in CV?
            </Typography>

            {isTabletView && !isMobileView && (
              <Box margin="auto">
                <img
                  style={{
                    borderRadius: "10px",
                  }}
                  src="/assets/Red Girl No Background.gif"
                  alt=""
                />
              </Box>
            )}
          </Stack>

          <Stack
            width="100%"
            alignItems={{ xs: "center", lg: "flex-end" }}
            justifyContent="center"
            spacing={2}
          >
            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} Skills are crucial in a CV because they provide a concise
                summary of an individuals abilities and qualifications.
              </Typography>
            </Stack>
            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} Overall, skills play a pivotal role in communicating an
                individuals abilities, matching job requirements, and setting
                them apart from other candidates, making them an essential
                component of an effective CV.
              </Typography>
            </Stack>
            <Stack width="85%">
              <Button
                style={{
                  width: "115px",
                  margin: "20px auto",
                }}
                variant="contained"
              >
                create CV
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: { xs: "center", lg: "space-between" },
          width: "100%",
          margin: "auto",
          maxWidth: "80%",
          paddingTop: 3,
          paddingBottom: 4,
          gap: 3,
        }}
      >
        <Stack
          spacing="10px"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
          }}
        >
          <Stack>
            <Typography
              variant="h4"
              gutterBottom
              textAlign={{ xs: "center", lg: "start" }}
            >
              Why the Interviewer Should Select You in The Interview?
            </Typography>

            {isTabletView && !isMobileView && (
              <Box margin="auto">
                <img
                  style={{
                    borderRadius: "10px",
                    width: "520px",
                    height: "450px",
                  }}
                  src="/assets/selector.gif"
                  alt=""
                  srcSet=""
                />
              </Box>
            )}
          </Stack>

          <Stack
            width="100%"
            alignItems={{ xs: "center", lg: "flex-start" }}
            justifyContent="center"
            spacing={2}
          >
            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} Expertise: I bring a wealth of knowledge and expertise in
                [relevant field/industry]. With [number] years of experience, I
                have developed a deep understanding of industry trends, best
                practices, and innovative solutions.
              </Typography>
            </Stack>

            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} Versatility: I possess a versatile skill set that allows
                me to adapt and excel in various roles and responsibilities.
                Whether its [specific skills], I am confident in my ability to
                contribute effectively and make a significant impact.
              </Typography>
            </Stack>
            <Stack
              style={{
                background: "linear-gradient(to left bottom, #074c88, #81a9d1)",
                color: "white",
                width: "85%",
                borderRadius: "10px",
                padding: "16px",
                boxShadow: "10px 10px 10px gray",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                {">>"} Strong Work Ethic: I am highly motivated and dedicated to
                achieving excellence in everything I do. I take pride in my work
                and consistently strive for continuous improvement. I am known
                for my reliability, attention to detail, and ability to meet
                deadlines under pressure.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {!isTabletView && (
          <Box>
            <img
              style={{
                borderRadius: "10px",
                width: "520px",
                height: "450px",
              }}
              src="/assets/selector.gif"
              alt=""
              srcSet=""
            />
          </Box>
        )}
      </Stack>
    </>
  );
};

export default SecondComponent;
