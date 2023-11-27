import React from "react";
import { TextField, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

const ResumeProjects = () => {
  const { register, watch, setValue } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `project[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s/g, "")}`;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        fullWidth
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        onChange={(e) => setValue(fieldName, e.target.value)}
      />
    );
  };

  const projectFields = ["Project Name", "Project Link", "Description"];

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
          PROJECTS
        </Typography>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0 auto" }} direction="row">
        {projectFields.map((field, index) => renderTextField(field, 0))}
      </Stack>
    </Stack>
  );
};

export default ResumeProjects;
