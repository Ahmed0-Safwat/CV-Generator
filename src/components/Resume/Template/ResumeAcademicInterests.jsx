import React from "react";
import { TextField, Stack, Typography, IconButton } from "@mui/material";
import { useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ResearchInterests = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const researchInterestFields = ["Research Interest"];

  const renderTextField = (field, sectionIndex) => {
    const fieldName = `researchInterests[${sectionIndex}].${field
      .toLowerCase()
      .replace(/\s+/g, "")}`;
    const error = Boolean(
      errors.researchInterests?.[sectionIndex]?.[
        field.toLowerCase().replace(/\s+/g, "")
      ]
    );
    const helperText =
      errors.researchInterests?.[sectionIndex]?.[
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
        type="text"
        onChange={(e) => setValue(fieldName, e.target.value)}
        error={error}
        helperText={helperText}
        sx={{ width: "100%" }}
      />
    );
  };

  const [researchInterestFieldsCount, setResearchInterestFieldsCount] =
    React.useState(1);

  const handleAddField = () => {
    setResearchInterestFieldsCount((prev) => prev + 1);
  };

  const handleRemoveField = () => {
    if (researchInterestFieldsCount > 1) {
      setResearchInterestFieldsCount((prev) => prev - 1);

      const currentInterests = watch("researchInterests");
      if (currentInterests && currentInterests.length > 0) {
        const updatedInterests = currentInterests.slice(0, -1);
        setValue("researchInterests", updatedInterests);
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
          Research Interests
        </Typography>
        <IconButton
          color="primary"
          sx={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={handleAddField}
        >
          <AddIcon />
        </IconButton>
        {researchInterestFieldsCount > 1 && (
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
        direction="column"
      >
        {Array.from({ length: researchInterestFieldsCount }).map((_, index) => (
          <React.Fragment key={index}>
            {researchInterestFields.map((field) =>
              renderTextField(field, index)
            )}
          </React.Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default ResearchInterests;
