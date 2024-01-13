import React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useStore } from "../../../hooks/useStore";
import { useFormContext } from "react-hook-form";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { shallow } from "zustand/shallow";
import { useSnackbar } from "notistack";

const ResumeButtons = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );
  const { activeStep, selectedCV } = globalState;
  const { handleSubmit } = useFormContext();

  const handleNextFunction = (data) => {
    useStore.setState({
      globalState: {
        ...globalState,
        activeStep: activeStep + 1,
      },
    });
  };

  const submit = async (data) => {
    const existingData = localStorage.getItem("cvData");
    let cvDataArray = existingData ? JSON.parse(existingData) : [];

    if (data.personal.img && data.personal.img[0]) {
      const imgFile = data.personal.img[0];
      const reader = new FileReader();

      reader.onloadend = function () {
        const base64String = reader.result;
        const newData = {
          selectedCV: selectedCV.id,
          ...data,
          personal: { ...data.personal, img: base64String },
        };

        cvDataArray.push(newData);
        localStorage.setItem("cvData", JSON.stringify(cvDataArray));
      };

      reader.readAsDataURL(imgFile);
    } else {
      cvDataArray.push({ selectedCV: selectedCV.id, ...data });
      localStorage.setItem("cvData", JSON.stringify(cvDataArray));
    }

    enqueueSnackbar("CV Created Successfully!", { variant: "success" });
  };

  const handleNext = handleSubmit(handleNextFunction);
  const handleSubmitFunction = handleSubmit(submit);

  const handleBack = () => {
    if (activeStep === 0) {
      useStore.setState({
        globalState: {
          ...useStore.getState().globalState,
          activeStep: 0,
          shouldShowStepper: false,
        },
      });
    } else {
      useStore.setState({
        globalState: {
          ...useStore.getState().globalState,
          activeStep: useStore.getState().globalState.activeStep - 1,
        },
      });
    }
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

        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = imgWidth / aspectRatio; // image height in mm
        let heightLeft = imgHeight; // remaining height to be printed
        let position = 0; // initial position of the image

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight); // add first page
        heightLeft -= pageHeight; // subtract the height of the first page

        while (heightLeft >= 0) {
          // while there is still height left to be printed
          position = heightLeft - imgHeight; // calculate the position of the next page
          pdf.addPage(); // add a new page
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight); // add the image to the new page
          heightLeft -= pageHeight; // subtract the height of the new page
        }

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

  return (
    <Stack direction="row" justifyContent="space-between" width="80%">
      <Button
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
