import React, { useState, useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useFormContext } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ResumeAcademicPersonalInfo = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    let baseFieldName = field.toLowerCase().replace(/\s/g, "");
    if (baseFieldName === "Academic Rank") baseFieldName = "academicRank";
    if (field === "Google Scholar") baseFieldName = "googleScholar";
    if (baseFieldName === "Research Gate") baseFieldName = "researchGate";
    if (field === "Orcid Record") baseFieldName = "orcidRecord";
    if (baseFieldName === "Scopus Id") baseFieldName = "scopusId";

    const fieldName = `personalInfo[${sectionIndex}].${baseFieldName}`;

    const error = Boolean(errors.personalInfo?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.personalInfo?.[sectionIndex]?.[baseFieldName]?.message;

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
                  id={`personalInfo-${sectionIndex}-${baseFieldName}`} // Added id here
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

  const personalInfoFields = [
    "Academic Rank",
    "Department",
    "Specialization",
    "Google Scholar",
    "Research Gate",
    "Orcid Record",
    "Scopus Id",
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
          Personal Info
        </Typography>
      </Stack>
      <Stack
        gap={2}
        sx={{ width: "100%", margin: "0 auto" }}
        direction="row"
        flexWrap="wrap"
      >
        {Array.from({ length: 1 }).map((_, index) =>
          personalInfoFields.map((field) => (
            <React.Fragment key={field}>
              {renderTextField(field, index)}
            </React.Fragment>
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default ResumeAcademicPersonalInfo;
