import React from "react";
import Divider from "@mui/material/Divider";
import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../../components/Profile/Hero/Hero";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import ResumeExample1 from "../../components/Resume/ProfileResumes/ResumeExample1";
import ResumeExample2 from "../../components/Resume/ProfileResumes/ResumeExample2";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Profile = () => {
  const { isMobileView, isTabletView } = useWindowSize();

  const cvData = JSON.parse(localStorage.getItem("cvData"));
  console.log("cvData", cvData);
  const navigate = useNavigate();

  const routeToCvPage = () => {
    navigate("/resume");
  };

  const getCorrectCV = (cvData) => {
    console.log("cvData.selectedCV", cvData);
    switch (cvData.selectedCV) {
      case 1:
        console.log("HEREEEEEEEE111");

        return <ResumeExample1 data={cvData} />;
      case 2:
        console.log("HEREEEEEEEE");
        return <ResumeExample1 data={cvData} />;
      default:
        console.log("HEREEEEEEEE222");

        return <ResumeExample1 data={cvData} />;
    }
  };

  const downloadPdfDocument = () => {
    const element = document.getElementById("resume");

    const captureAndSavePdf = () => {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const aspectRatio = canvas.width / canvas.height;

        const imgWidth = 210;

        const imgHeight = imgWidth / aspectRatio;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

        pdf.save("advanced-styled-page.pdf");
      });
    };

    // Ensure that styles have rendered before capturing content and saving PDF
    if (document.readyState === "complete") {
      captureAndSavePdf();
    } else {
      window.onload = captureAndSavePdf;
    }
  };

  return (
    <Stack
      sx={{
        mb: 16,
      }}
    >
      <Hero />
      <Stack
        width="100%"
        spacing={2}
        sx={{
          padding: "16px",
        }}
      >
        <Divider
          textAlign="left"
          sx={{
            fontSize: { xs: "24px", md: "25px", lg: "30px" },
            textAlign: { xs: "center", md: "center", lg: "start" },
            p: 3,
          }}
        >
          {" "}
          Your Curriculum vitaes
        </Divider>
        <Stack
          gap={2}
          sx={{
            marginX: isMobileView ? "0" : "32px !important",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:
              isTabletView || isMobileView ? "center" : "space-between",
          }}
        >
          {cvData?.length ? (
            <Stack
              id="faq-content"
              className="section-content"
              alignItems={"center"}
              gap={3}
            >
              {cvData?.map((data, idx) => (
                <Accordion
                  disableGutters
                  key={idx}
                  variant="outlined"
                  sx={{ border: `1px solid #DFE6F0`, padding: "0 !important" }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore sx={{ color: "#E41469", width: "32px" }} />
                    }
                  >
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ fontSize: "20px" }}
                    >
                      CV {idx + 1}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      padding: "0 !important",
                    }}
                  >
                    <Stack>
                      {getCorrectCV(data)}

                      <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="flex-end"
                        p={2}
                        sx={{
                          background: "#ebdbdb !important",
                        }}
                      >
                        {/* <Button
                          sx={{
                            fontSize: {
                              xs: "17px",
                              sm: "18px",
                              md: "21px",
                              lg: "24px",
                            },
                          }}
                          variant="contained"
                          endIcon={<NavigateNextIcon />}
                        >
                          Delete
                        </Button> */}
                        <Button
                          sx={{
                            fontSize: {
                              xs: "17px",
                              sm: "18px",
                              md: "21px",
                              lg: "24px",
                            },
                          }}
                          variant="contained"
                          endIcon={<NavigateNextIcon />}
                          onClick={downloadPdfDocument}
                        >
                          Download
                        </Button>
                      </Stack>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          ) : (
            <Stack
              spacing={6}
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  backgroundImage:
                    "linear-gradient(302deg, #03adb5 8.02%, #e41469 78.29%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                  userSelect: "none",
                }}
              >
                You Have No Your Curriculum vitaes
              </Typography>

              <Button variant="contained" size="large" onClick={routeToCvPage}>
                Create Your First Curriculum vitae
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Profile;
