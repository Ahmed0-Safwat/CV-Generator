import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const ResumeEducation = () => {
  const { register, watch, setValue } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    let fieldName = field.toLowerCase().replace(/\s/g, "");

    fieldName = `education[${sectionIndex}].${fieldName}`;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
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
