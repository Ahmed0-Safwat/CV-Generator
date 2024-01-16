import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import { useWindowSize } from "../../hooks/useWindowSize";
import Hero from "../../components/Profile/Hero/Hero";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
import { useSnackbar } from "notistack";
import Template from "../../components/Resume/ProfileResumes/Template";

const Profile = () => {
  const { isMobileView, isTabletView } = useWindowSize();
  const { enqueueSnackbar } = useSnackbar();

  const [cvData, setCvData] = useState(
    JSON.parse(localStorage.getItem("cvData"))
  );
  const [open, setOpen] = React.useState(false);
  const [deleteIdx, setDeleteIdx] = useState(null);

  const navigate = useNavigate();

  const routeToCvPage = () => {
    navigate("/resume");
  };

  useEffect(() => {
    const sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));

    if (!sessionStorageUser) {
      navigate("/");
    }
  }, [navigate]);

  const getCorrectCV = (cvData) => {
    switch (cvData.selectedCV) {
      case 1:
        return <Template data={cvData} />;
      case 2:
        return <ResumeExample1 data={cvData} />;
      default:
        return <ResumeExample2 data={cvData} />;
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

    enqueueSnackbar("PDF Downloaded Successfully!", { variant: "success" });
  };

  const handleClickOpen = (idx) => {
    setDeleteIdx(idx);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteResume = () => {
    const existingData = JSON.parse(localStorage.getItem("cvData")) || [];
    const updatedData = existingData.filter((_, index) => index !== deleteIdx);

    localStorage.setItem("cvData", JSON.stringify(updatedData));
    setCvData(updatedData);
    enqueueSnackbar("CV Deleted Successfully!", { variant: "success" });

    handleClose();
  };

  const DeleteConfirmationModal = () => (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete CV?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit" variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteResume}
            variant="contained"
            color="error"
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

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
                          background: "white",
                        }}
                      >
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
                          onClick={() => handleClickOpen(idx)}
                        >
                          Delete
                        </Button>
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
                You Have No Curriculum vitaes
              </Typography>

              <Button variant="contained" size="large" onClick={routeToCvPage}>
                Create Your First Curriculum vitae
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
      <DeleteConfirmationModal />
    </Stack>
  );
};

export default Profile;
