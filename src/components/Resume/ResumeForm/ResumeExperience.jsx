import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const ResumeExperience = () => {
  const { register, watch, setValue } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    let fieldName = field.toLowerCase().replace(/\s/g, "");
    if (fieldName === "company/organization") fieldName = "company";

    fieldName = `experience[${sectionIndex}].${fieldName}`;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
        sx={{ width: "32%" }}
      />
    );
  };

  // Experience fields to be rendered
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
