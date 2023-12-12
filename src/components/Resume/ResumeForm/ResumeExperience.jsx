import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const ResumeExperience = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    let baseFieldName = field.toLowerCase().replace(/\s/g, "");
    if (baseFieldName === "company/organization") baseFieldName = "company";
    if (field === "Title") baseFieldName = "jobTitle";

    const fieldName = `experience[${sectionIndex}].${baseFieldName}`;

    const error = Boolean(errors.experience?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.experience?.[sectionIndex]?.[baseFieldName]?.message;

    if (baseFieldName === "startdate" || baseFieldName === "enddate") {
      return (
        <>
          <LocalizationProvider dateAdapter={AdapterDateFns} key={fieldName}>
            <DesktopDatePicker
              label={field}
              inputFormat="MM/dd/yyyy"
              value={watch(fieldName)}
              onChange={(newValue) => setValue(fieldName, newValue)}
              sx={{ width: "32%" }}
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
        </>
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
        sx={{ width: "32%" }}
      />
    );
  };

  const experienceFields = [
    "Title",
    "Company / Organization",
    "Location",
    "Start Date",
    "End Date",
    "Description",
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
          EXPERIENCE
        </Typography>
      </Stack>
      <Stack
        gap={2}
        sx={{ width: "100%", margin: "0 auto" }}
        direction="row"
        flexWrap="wrap"
      >
        {experienceFields.map((field, index) => renderTextField(field, 0))}
      </Stack>
    </Stack>
  );
};

export default ResumeExperience;
