import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useStore } from "../../../hooks/useStore";
import shallow from "zustand/shallow";

const steps = ["Personal info", "Skills info", "Your CV"];

export default function HorizontalLinearStepper() {
  const { globalState } = useStore(
    (state) => ({
      globalState: state.globalState,
    }),
    shallow
  );

  const { activeStep } = globalState;

  //   const handleReset = () => {
  //     useStore.setState({
  //       globalState: {
  //         ...useStore.getState().globalState,
  //         activeStep: 0,
  //       },
  //     });
  //   };

  return (
    <Box sx={{ width: "65%", color: "white" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                color="white"
                {...labelProps}
                sx={{
                  color: "white",
                  "& .MuiStepLabel-label": {
                    color: "white !important",
                  },
                  "& .MuiStepIcon-root": {
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
