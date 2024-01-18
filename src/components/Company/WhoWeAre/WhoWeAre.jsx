import { Button, Stack, Typography } from "@mui/material";
import "./style.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();
  const handleExploreProjectsClick = () => {
    window.scrollTo(0, 0);
    navigate("/projects");
  };

  return (
    <Stack className="section-container" pt="120px">
      <Stack className="section-content" spacing="120px">
        <Stack direction={{ xs: "column", md: "row" }} spacing="126px">
          <Stack
            spacing={3}
            maxWidth="794px"
            width="100%"
            justifyContent="center"
          >
            <Typography
              fontSize={{ xs: "48px", lg: "64px" }}
              fontWeight={700}
              lineHeight="76px"
              className="who-we-are-header"
              maxWidth={"487px"}
              width="100%"
            >
              Who We Are?
            </Typography>

            <Typography
              fontSize="24px"
              fontWeight={400}
              lineHeight="38px"
              color="#232932"
            >
              CV Creator was founded by a team of passionate professionals
              dedicated to providing individuals with the tools to build
              outstanding resumes.
              <br />
              <br /> Inspired by our mission to empower job seekers, CV Creator
              was established to simplify the process of crafting a standout CV.
              We are committed to delivering top-notch digital solutions
              tailored to your professional needs.
              <br />
              <br />
              While our headquarters are in Cairo, Egypt, we serve users
              globally.
            </Typography>
          </Stack>

          <Stack
            spacing={{ xs: 5, sm: "82px" }}
            direction={{ xs: "row", md: "column" }}
            useFlexGap
            flexWrap={"wrap"}
            alignItems={{ xs: "center", md: "flex-start" }}
            justifyContent="center"
            maxWidth={{ xs: "100%", md: "250px" }}
            width="100%"
          >
            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                fontSize="64px"
                lineHeight="78px"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                4<span style={{ color: "#E41469" }}>+</span>
              </Typography>

              <Typography
                fontWeight={400}
                fontSize="24px"
                color="#5D6571"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Templates
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                fontSize="64px"
                lineHeight="78px"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                70<span style={{ color: "#E41469" }}>+</span>
              </Typography>

              <Typography
                fontWeight={400}
                fontSize="24px"
                color="#5D6571"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Happy Clients
              </Typography>
            </Stack>

            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                fontSize="64px"
                lineHeight="78px"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                3<span style={{ color: "#E41469" }}>+</span>
              </Typography>

              <Typography
                fontWeight={400}
                fontSize="24px"
                color="#5D6571"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Years of Experience
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack width="100%">
          <Stack width="100%" alignItems="center" spacing={3}>
            <Stack
              width="100%"
              sx={{
                borderRadius: "16px",
                overflow: "hidden",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={"/images/colleagues-giving-fist-bump.png"}
                alt={"photo"}
                width={1220}
                height={420}
                style={{ borderRadius: "16px", objectFit: "cover" }}
              />
            </Stack>
            <Typography
              fontWeight={400}
              fontSize="24px"
              lineHeight="38px"
              color="#232932"
              align="center"
            >
              CV Creator: Your Partner in Exceptional CVs. We're dedicated to
              your career success, crafting standout CVs through research and
              collaboration. Your success, our commitment.
            </Typography>

            <Button
              size="large"
              variant="contained"
              sx={{
                maxWidth: "300px",
                width: "100%",
                borderRadius: "100px",
                height: "64px",
                fontSize: "24px",
                fontWeight: 600,
              }}
              onClick={handleExploreProjectsClick}
            >
              Explore Projects
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default WhoWeAre;
