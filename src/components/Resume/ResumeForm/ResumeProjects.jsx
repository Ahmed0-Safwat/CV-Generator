import React, { useState } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useFormContext } from "react-hook-form";

const projectFields = ["Project Name", "Project Link", "Description"];

const ResumeProjects = () => {
  const [projectFieldsCount, setProjectFieldsCount] = useState(1);

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const renderTextField = (field, sectionIndex) => {
    const baseFieldName = field.toLowerCase().replace(/\s/g, "");
    const fieldName = `project[${sectionIndex}].${baseFieldName}`;

    const error = Boolean(errors.project?.[sectionIndex]?.[baseFieldName]);
    const helperText =
      errors.project?.[sectionIndex]?.[baseFieldName]?.message;

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
        error={error}
        helperText={helperText}
      />
    );
  };

  const handleAddProjectField = () => {
    setProjectFieldsCount((prevCount) => prevCount + 1);
  };

  const handleRemoveProjectField = () => {
    if (projectFieldsCount > 1) {
      setProjectFieldsCount((prevCount) => prevCount - 1);
    }
  };

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
          PROJECTS
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddProjectField}
        >
          <AddIcon />
        </IconButton>
      </Stack>
      <Stack gap={2} sx={{ width: "100%", margin: "0 auto" }} direction="column">
        {Array.from({ length: projectFieldsCount }).map((_, index) => (
          <Stack key={index} direction="row">
            {projectFields.map((field) => renderTextField(field, index))}
          </Stack>
        ))}
      </Stack>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-end"
        mt={2}
        sx={{ position: "relative" }}
      >
        <IconButton
          color="secondary"
          sx={{
            position: "absolute",
            bottom: "-5px",
            right: "5px",
          }}
          onClick={handleRemoveProjectField}
        >
          <RemoveIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ResumeProjects;
