import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const ResumeEducation = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    const baseFieldName = field.toLowerCase().replace(/\s/g, "");
    const fieldName = `education[${sectionIndex}].${baseFieldName}`;

    const error = Boolean(errors.education?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.education?.[sectionIndex]?.[baseFieldName]?.message;

    if (baseFieldName === "startdate" || baseFieldName === "enddate") {
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns} key={fieldName}>
          <DesktopDatePicker
            label={field}
            inputFormat="MM/dd/yyyy"
            value={watch(fieldName)}
            onChange={(newValue) => setValue(fieldName, newValue)}
            sx={{ width: "49%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                required
                error={error}
                helperText={helperText}
              />
            )}
          />
        </LocalizationProvider>
      );
    }

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "49%" }}
      />
    );
  };

  const educationFields = [
    "University",
    "Department",
    "Start Date",
    "End Date",
  ];
  return (
    <Stack width="100%" spacing={4} sx={{ mb: 4, mt: 4 }}>
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "#1e2532",
          color: "white",
          margin: "5px auto",
          p: 1.5,
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: "22px", fontWeight: "400" }}>
          EDUCATION
        </Typography>
      </Stack>
      <Stack gap={2} sx={{ margin: "0 auto" }} direction="row" flexWrap="wrap">
        {educationFields.map((field, index) => renderTextField(field, 0))}
      </Stack>
    </Stack>
  );
};

export default ResumeEducation;
