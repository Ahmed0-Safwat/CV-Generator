import React, { useEffect } from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";

const AcademicExperience = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const experienceFields = ["Institution", "Rank", "Year"];

  // Retrieve existing experience data
  const existingExperience = watch("experience") || [];
  const initialExperienceFieldsCount =
    existingExperience.length > 0 ? existingExperience.length : 1;

  const [experienceFieldsCount, setExperienceFieldsCount] = React.useState(
    initialExperienceFieldsCount
  );

  useEffect(() => {
    // Set the initial fields count based on existing data
    setExperienceFieldsCount(existingExperience.length);
  }, [existingExperience.length]);

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `experience[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s+/g, "")}`;
    const error = Boolean(
      errors.experience?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]
    );
    const helperText =
      errors.experience?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]?.message;

    return (
      <TextField
        key={fieldName}
        {...register(fieldName)}
        required
        id={`outlined-${fieldName}`}
        label={field}
        value={watch(fieldName)}
        type={field === "Year" ? "number" : "text"}
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "49%" }}
        InputLabelProps={field === "Date" ? { shrink: true } : null}
      />
    );
  };

  const handleAddField = () => {
    setExperienceFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (experienceFieldsCount > 1) {
      setExperienceFieldsCount((prev) => prev - 1);

      const currentExp = watch("experience");
      if (currentExp && currentExp.length > 0) {
        const updatedExp = currentExp.slice(0, -1);
        setValue("experience", updatedExp);
      }
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
          Academic Experience
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {experienceFieldsCount > 1 && (
          <IconButton
            color="secondary"
            sx={{ position: "absolute", top: "10px", right: "50px" }}
            onClick={handleRemoveField}
          >
            <RemoveIcon />
          </IconButton>
        )}
      </Stack>
      <Stack
        gap={2}
        sx={{ width: "100%", margin: "0 auto" }}
        direction="row"
        flexWrap="wrap"
      >
        {Array.from({ length: experienceFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider sx={{ width: "100%", my: 2 }} />}
            {experienceFields.map((field) => renderTextField(field, index))}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default AcademicExperience;
