import React, { useState } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ResumeExperience = () => {
  const [experienceFieldsCount, setExperienceFieldsCount] = useState(1);

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
                  id={`experience-${sectionIndex}-${baseFieldName}`} // Added id here
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

  const handleAddExperienceField = () => {
    setExperienceFieldsCount((prevCount) => prevCount + 1);
  };

  const handleRemoveExperienceField = () => {
    if (experienceFieldsCount > 1) {
      setExperienceFieldsCount((prevCount) => prevCount - 1);
    }
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
          position: "relative",
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: "22px", fontWeight: "400" }}>
          EXPERIENCE
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddExperienceField}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <Stack
        gap={2}
        sx={{ width: "100%", margin: "0 auto" }}
        direction="row"
        flexWrap="wrap"
      >
        {Array.from({ length: experienceFieldsCount }).map((_, index) =>
          experienceFields.map((field) => (
            <React.Fragment key={field}>
              {renderTextField(field, index)}
            </React.Fragment>
          ))
        )}
      </Stack>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-end"
        spacing={2}
        sx={{ position: "relative", width: "100%", marginTop: "15px" }}
      >
        <IconButton
          color="secondary"
          sx={{
            position: "absolute",
            bottom: "-5px",
            right: "5px",
          }}
          onClick={handleRemoveExperienceField}
        >
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ResumeExperience;
