import React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useStore } from "../../../hooks/useStore";
import { useFormContext } from "react-hook-form";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { shallow } from "zustand/shallow";

const ResumeButtons = () => {
  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );
  const { activeStep } = globalState;
  const { handleSubmit } = useFormContext();

  const handleNextFunction = (data) => {
    console.log("data", data);
    useStore.setState({
      globalState: {
        ...globalState,
        activeStep: activeStep + 1,
      },
    });
  };

  const submit = (data) => {
    console.log("data", data);
  };

  const handleNext = handleSubmit(handleNextFunction);
  const handleSubmitFunction = handleSubmit(submit);

  const handleBack = () => {
    useStore.setState({
      globalState: {
        ...useStore.getState().globalState,
        activeStep: useStore.getState().globalState.activeStep - 1,
      },
    });
  };

  const handleReset = () => {
    useStore.setState({
      globalState: {
        ...useStore.getState().globalState,
        activeStep: 0,
      },
    });
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
    <Stack direction="row" justifyContent="space-between" width="80%">
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{
          fontSize: { xs: "17px", sm: "18px", md: "21px", lg: "24px" },
        }}
        variant="contained"
        startIcon={
          <NavigateNextIcon
            sx={{
              transform: "rotate(180deg)",
            }}
          />
        }
      >
        Back
      </Button>
      <Stack>
        {activeStep < 2 ? (
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
            onClick={handleNext}
          >
            {activeStep >= 1 ? "Generate" : "Next"}
          </Button>
        ) : (
          <Stack direction="row" spacing={2}>
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
              onClick={handleSubmitFunction}
            >
              Save
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
        )}
      </Stack>
    </Stack>
  );
};

export default ResumeButtons;
